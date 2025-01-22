import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Createadmincomponent from "../../Component/Createadmincomponent";
import axios from "axios";
import EditAdminComponent from "../../Component/EditAdminComponent";
import toast from "react-hot-toast";

const Alladmin = () => {
  const [formvisible, setFormvisible] = useState(false);
  const [editacess, setEditacess] = useState(null);
  const [deletereminder, setDeletereminder] = useState(false);
  const [admin, setAdmin] = useState([]);
  const navigate = useNavigate();

  const getallAdmin = async () => {
    try {
      const data = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/admin/allAdmin`
      );
      setAdmin(data.data.Admins);
    } catch (error) {
      return;
    }
  };

  //delete a product
  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        `${process.env.REACT_APP_API}/api/v1/admin/delete-admin/${id}`
      );
      if (data?.success) {
        toast.success("Product Deleted Succfully");
        navigate("/dashboard/admin");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    getallAdmin();
  }, [formvisible]);

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
            className="py-3 text-lg bg-slate-700 hover:bg-slate-600 font-semibold ps-6 transition-all duration-300"
          >
            Admin
          </Link>
          <Link
            to="/dashboard/letstalk"
            className="py-3 text-lg hover:bg-slate-600 font-semibold ps-6 transition-all duration-300"
          >
            Let's Talk Data
          </Link>
        </div>
      </div>

      {/* Main Content Column */}
      <div className="w-5/6 bg-gray-200 p-4 absolute right-0 h-screen">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Admins</h1>
          <button
            className="bg-blue-600 hover:bg-blue-500 p-2 rounded-md font-semibold text-white"
            onClick={() => {
              setFormvisible(!formvisible);
            }}
          >
            Create Admin <i className="fa-solid fa-plus font-extrabold"></i>
          </button>
        </div>
        {formvisible ? (
          <div className="absolute z-2 flex justify-center items-center w-4/5">
            <Createadmincomponent
              setFormvisible={setFormvisible}
              formvisible={formvisible}
            />
          </div>
        ) : (
          ""
        )}
        <div className=" mt-6 flex flex-col items-center">
          {admin?.map((e) => {
            return (
              <div className="bg-white p-2 w-4/5 rounded-sm mt-2 flex justify-between shadow-md">
                <h1 className="font-semibold">{e.Name.toUpperCase()}</h1>
                <div className="w-1/6 flex justify-end items-center gap-4">
                  <i
                    className="fa-solid fa-pencil fa-xl cursor-pointer"
                    style={{ color: "#f0e924" }}
                    onClick={() => setEditacess(e)}
                  ></i>
                  <i
                    className="fa-solid fa-trash fa-lg cursor-pointer"
                    style={{ color: "#f55151" }}
                    onClick={() => setDeletereminder(true)}
                  ></i>
                  {deletereminder === true && (
                    <div className="fixed top-0 left-0 w-full h-full bg-black/40 flex items-center justify-center">
                      <div className="bg-white px-6 pb-6 w-1/3 rounded-md shadow-lg">
                        <div className="flex justify-between mb-4 items-center">
                          <h2 className="text-2xl font-bold">Reminder</h2>
                          <button
                            className="text-black text-3xl font-semibold"
                            onClick={() => setDeletereminder(false)} // Close the modal
                          >
                            &times;
                          </button>
                        </div>
                        <p className="text-xl font-medium">
                          Are you sure you want to delete this user with the
                          name <span className="font-bold">{e.Name}</span>?
                        </p>
                        <div className="h-10 flex mt-4 justify-between w-full">
                          <button
                            className="w-3/6 bg-red-800 text-white rounded-lg p-2"
                            onClick={() => setDeletereminder(false)} // Cancel deletion
                          >
                            No
                          </button>
                          <button
                            className="w-3/6 ml-2 bg-blue-500 text-white rounded-lg p-2"
                            onClick={() => {
                              handleDelete(e._id); // Pass admin id to handleDelete
                              setDeletereminder(false); // Close the modal
                            }}
                          >
                            Yes
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                  {editacess && (
                    <div className="fixed top-0 left-0 w-full h-full bg-black/40 flex items-center justify-center">
                      <EditAdminComponent
                        id={editacess._id}
                        Name={editacess.Name}
                        Email={editacess.Email}
                        Phone={editacess.Phone}
                        setEditacess={setEditacess}
                        Password={editacess.Password}
                        getallAdmin={getallAdmin}
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Alladmin;
