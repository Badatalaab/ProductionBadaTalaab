import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const EditAdminComponent = (props) => {
  const id = props.id;
  const [Name, setName] = useState(props.Name);
  const [Email, setEmail] = useState(props.Email);
  const [Password, setPassword] = useState("");
  const [Phone, setPhone] = useState(props.Phone);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.put(
        `${process.env.REACT_APP_API}/api/v1/admin/updateprofile`,
        {
          id,
          Name,
          Email,
          Password: Password ? Password : props.Password,
          Phone,
          changepassword: Password ? true : false,
        }
      );
      props.getallAdmin();
      props.setEditacess(null);
    } catch (error) {
      toast.error(error);
    }

    // Handle form submission
  };
  return (
    <div className="bg-white p-8 pt-2 rounded-lg shadow-2xl w-96 max-w-md">
      <div
        className="flex justify-end font-extrabold cursor-pointer text-2xl"
        onClick={(e) => {
          props.setEditacess(null);
        }}
      >
        X
      </div>
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Create Admin
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={Name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={Email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            New Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={Password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone
          </label>
          <input
            type="number"
            name="phone"
            id="phone"
            value={Phone}
            onChange={(e) => {
              const value = e.target.value;
              // Allow only numbers and limit to 10 digits
              if (value.length <= 10) {
                setPhone(value);
              }
            }}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm no-spinner"
            required
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditAdminComponent;
