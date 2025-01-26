import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const FormComponent = () => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Message, setMessage] = useState("");

  const formsubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/Formdata/createUserdata`,
        { FirstName, LastName, Email, Phone, Message }
      );
      if (data.data.success) {
        toast.success(data.data.message);
      } else {
        toast.error(data.data.message);
      }
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
      setPhone("");
    } catch (error) {
      toast.error(error);
      toast.error("Somethig Gone Wrong");
    }
  };
  return (
    <form
      onSubmit={formsubmit}
      className="bg-gray-100 p-6 rounded-lg shadow-md w-full"
    >
      <div className="flex flex-col lg:flex-row lg:gap-6 mb-4">
        <div className="w-full">
          <label
            htmlFor="firstName"
            className="block text-sm font-normal  fontstyle-2 text-[#0C0C0C]"
          >
            First name
          </label>
          <input
            type="text"
            id="firstName"
            required
            value={FirstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            name="firstName"
            className="mt-1 block w-full  bg-transparent border-b-2 border-[#DFDFDF]  focus:outline-none focus:border-gray-400 focus:ring-0"
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="lastName"
            className="block text-sm font-normal  fontstyle-2 text-[#0C0C0C]"
          >
            Last name
          </label>
          <input
            type="text"
            id="lastName"
            required
            value={LastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            name="lastName"
            className="mt-1 block w-full  bg-transparent border-b-2 border-[#DFDFDF]  focus:outline-none focus:border-gray-400 focus:ring-0"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:gap-6 mb-4">
        <div className="w-full">
          <label
            htmlFor="email"
            className="block text-sm font-normal  fontstyle-2 text-[#0C0C0C]"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            value={Email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            name="email"
            className="mt-1 block w-full  bg-transparent border-b-2 border-[#DFDFDF]  focus:outline-none focus:border-gray-400 focus:ring-0"
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="phone"
            className="block text-sm font-normal  fontstyle-2 text-[#0C0C0C]"
          >
            Phone
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            required
            value={Phone}
            onChange={(e) => {
              const value = e.target.value;
              // Allow only numbers and limit to 10 digits
              if (/^\d{0,10}$/.test(value)) {
                setPhone(value);
              }
            }}
            className="mt-1 block w-full  bg-transparent border-b-2 border-[#DFDFDF]  focus:outline-none focus:border-gray-400 focus:ring-0"
          />
        </div>
      </div>
      <div className="mb-4">
        <label
          htmlFor="message"
          className="block text-sm font-normal  fontstyle-2 text-[#0C0C0C]"
        >
          Message
        </label>
        <input
          id="message"
          name="message"
          value={Message}
          required
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          className="mt-4 block w-full bg-transparent border-b-2 border-[#DFDFDF]  focus:outline-none focus:border-gray-400 focus:ring-0"
        />
      </div>
      <button
        type="submit"
        className="bg-black text-white py-2 px-6 rounded-lg shadow-md hover:bg-gray-800 transition"
      >
        Submit Now
      </button>
    </form>
  );
};

export default FormComponent;
