import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const LetsTalkData = () => {
  const [userData, setUserData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedUserDetails, setSelectedUserDetails] = useState(null);
  const [isRotating, setIsRotating] = useState(false);
  const [deletereminder, setDeletereminder] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    setIsRotating(true); // Start rotation
    getalldata();
    setTimeout(() => {
      setIsRotating(false); // Stop rotation after 2 seconds
    }, 2000);
  };

  //delete a user form data
  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        `${process.env.REACT_APP_API}/api/v1/formdata/delete-user-data/${id}`
      );
      if (data?.success) {
        toast.success("Product Deleted Succfully");
        getalldata();
        navigate("/dashboard/letstalk");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  const formatTimeElapsed = (createdAt) => {
    const createdTime = new Date(createdAt);
    const currentTime = new Date();
    const diffInSeconds = Math.floor((currentTime - createdTime) / 1000);

    const days = Math.floor(diffInSeconds / (60 * 60 * 24));
    const hours = Math.floor((diffInSeconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((diffInSeconds % (60 * 60)) / 60);

    if (days > 0) return `${days} day${days > 1 ? "s" : ""}`;
    if (hours > 0) return `${hours} hour${hours > 1 ? "s" : ""}`;
    return `${minutes} minute${minutes > 1 ? "s" : ""}`;
  };

  const getalldata = async () => {
    try {
      const data = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/Formdata/allUserdata`
      );
      setUserData(data.data.Data);
    } catch (error) {
      return;
    }
  };
  useEffect(() => {
    getalldata();
  }, []);
  return (
    <div className="flex h-screen">
      {/* Sidebar Column (1/4) */}
      <div className="w-1/6 bg-gray-800 text-white py-6">
        <h2 className="text-3xl font-bold ps-4 mb-6">Admin Panel</h2>
        <div className="flex flex-col">
          <Link
            to="/dashboard/dashboard1"
            className="py-3 text-lg  hover:bg-slate-600 font-semibold ps-6 transition-all duration-300"
          >
            Dashboard
          </Link>
          <Link
            to="/dashboard/admin"
            className="py-3 text-lg  hover:bg-slate-600 font-semibold ps-6 transition-all duration-300"
          >
            Admin
          </Link>
          <Link
            to="/dashboard/letstalk"
            className="py-3 text-lg bg-slate-700 hover:bg-slate-600 font-semibold ps-6 transition-all duration-300"
          >
            Let's Talk Data
          </Link>
        </div>
      </div>

      {/* Main Content Column */}
      <div className="w-5/6 bg-gray-200 p-4 absolute right-0 h-screen">
        <div className="mt-6 flex flex-col items-center">
          <div className="flex justify-between w-full pl-10">
            <h1 className="text-3xl font-bold fontstyle-1">
              All Users Data From Let's Connect
            </h1>
            <button
              onClick={handleButtonClick}
              disabled={isRotating}
              className="flex items-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-full shadow-md transition-transform duration-500"
            >
              <i
                className={`fa-solid fa-arrows-rotate transition-transform duration-1000 ${
                  isRotating ? "animate-spin" : ""
                }`}
              ></i>
              {isRotating ? "Processing..." : "Click Me"}
            </button>
          </div>

          <div className="w-full mt-10 px-24">
            <table className="w-full border-collapse border border-gray-400 shadow-md">
              <thead className="bg-gray-700 text-white">
                <tr>
                  <th className="p-2 border border-gray-400 text-center">
                    Name
                  </th>
                  <th className="p-2 border border-gray-400 text-center">
                    Email
                  </th>
                  <th className="p-2 border border-gray-400 text-center">
                    Phone
                  </th>
                  <th className="p-2 border border-gray-400 text-center">
                    Added
                  </th>
                  <th className="p-2 border border-gray-400 text-center">
                    Delete
                  </th>
                  <th className="p-2 border border-gray-400 text-center">
                    Show Full Detail
                  </th>
                </tr>
              </thead>
              <tbody>
                {userData?.map((e) => (
                  <tr
                    key={e.id}
                    className="bg-white hover:bg-gray-100 transition-colors"
                  >
                    <td className="p-2 border border-gray-400 text-center">
                      {e.FirstName.toUpperCase() +
                        " " +
                        e.LastName.toUpperCase()}
                    </td>
                    <td className="p-2 border border-gray-400 text-center">
                      {e.Email.substring(0, 22)}
                    </td>
                    <td className="p-2 border border-gray-400 text-center">
                      {e.Phone}
                    </td>
                    <td className="p-2 border border-gray-400 text-center">
                      {formatTimeElapsed(e.createdAt)} ago
                    </td>
                    <td className="p-2 border border-gray-400 text-center">
                      <i
                        className="fa-solid fa-trash fa-lg cursor-pointer"
                        onClick={() => {
                          setSelectedUser(e);
                          setDeletereminder(true);
                        }}
                        style={{ color: "#f55151" }}
                      ></i>
                    </td>
                    <td
                      onClick={() => setSelectedUserDetails(e)}
                      className="p-2 border border-gray-400 font-normal hover:font-medium cursor-pointer text-center"
                    >
                      {" "}
                      Show Detail
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Delete Confirmation Modal */}
            {deletereminder === true && (
              <div className="fixed top-0 left-0 w-full h-full bg-black/40 flex items-center justify-center">
                <div className="bg-white px-6 pb-6 w-1/3 rounded-md shadow-lg">
                  <div className="flex justify-between mb-4 items-center">
                    <h2 className="text-2xl font-bold">Reminder</h2>
                    <button
                      className="text-black text-3xl font-semibold"
                      onClick={() => setDeletereminder(false)}
                    >
                      &times;
                    </button>
                  </div>
                  <p className="text-xl font-medium">
                    Are you sure you want to delete this user data with name{" "}
                    {selectedUser?.FirstName}?
                  </p>
                  <div className="h-10 flex mt-4 justify-between w-full">
                    <button
                      className="w-3/6 bg-red-800 text-white rounded-lg"
                      onClick={() => setDeletereminder(false)}
                    >
                      No
                    </button>
                    <button
                      onClick={() => {
                        handleDelete(selectedUser?._id);
                        setDeletereminder(false);
                      }}
                      className="w-3/6 ml-2 bg-blue-500 text-white rounded-lg"
                    >
                      Yes
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Detail Box Modal */}
            {selectedUserDetails && (
              <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center transition-opacity duration-300 ease-in-out">
                <div className="bg-white px-8 py-6 w-1/3 rounded-lg shadow-xl relative animate-fade-in">
                  <div className="flex justify-between items-center border-b pb-4">
                    <h2 className="text-2xl font-bold text-gray-700">
                      User Details
                    </h2>
                    <button
                      className="text-gray-600 hover:text-gray-800 text-3xl font-semibold transition-transform transform hover:scale-110"
                      onClick={() => setSelectedUserDetails(null)}
                    >
                      &times;
                    </button>
                  </div>
                  <div className="mt-4 space-y-4">
                    <p className="text-lg text-gray-600">
                      <strong className="font-medium text-gray-800">
                        Name:
                      </strong>{" "}
                      {selectedUserDetails?.FirstName || "N/A"}
                    </p>
                    <p className="text-lg text-gray-600">
                      <strong className="font-medium text-gray-800">
                        Email:
                      </strong>{" "}
                      {selectedUserDetails?.Email || "N/A"}
                    </p>
                    <p className="text-lg text-gray-600">
                      <strong className="font-medium text-gray-800">
                        Phone:
                      </strong>{" "}
                      {selectedUserDetails?.Phone || "N/A"}
                    </p>
                    <p className="text-lg text-gray-600">
                      <strong className="font-medium text-gray-800">
                        Message:
                      </strong>{" "}
                      {selectedUserDetails?.Message || "N/A"}
                    </p>
                  </div>
                  <div className="mt-6 flex justify-end">
                    <button
                      className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition-transform transform hover:scale-105 focus:outline-none"
                      onClick={() => setSelectedUserDetails(null)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetsTalkData;
