import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [userDetails, setUserDetails] = useState(null);

  const getData = () => {
    const authData = JSON.parse(localStorage.getItem("auth"));
    setUserDetails(authData.user);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/6 bg-gray-800 text-white py-6">
        <h2 className="text-3xl font-bold ps-4 mb-6">Admin Panel</h2>
        <div className="flex flex-col">
          <Link
            to="/dashboard/dashboard1"
            className="py-3 text-lg bg-slate-700 hover:bg-slate-600 font-semibold ps-6 transition-all duration-300"
          >
            Dashboard
          </Link>
          <Link
            to="/dashboard/admin"
            className="py-3 text-lg hover:bg-slate-600 font-semibold ps-6 transition-all duration-300"
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

      {/* Main Content */}
      <div className="w-5/6 p-8 bg-gray-200">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Admin Dashboard
        </h1>

        {userDetails ? (
          <div className="bg-white shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Admin Details
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                <strong className="text-gray-800">Name:</strong>{" "}
                {userDetails.Name || "N/A"}
              </p>
              <p>
                <strong className="text-gray-800">Email:</strong>{" "}
                {userDetails.Email || "N/A"}
              </p>
              <p>
                <strong className="text-gray-800">Role:</strong>{" "}
                {userDetails.Role === "1" ? "Admin" : "User"}
              </p>
              <p>
                <strong className="text-gray-800">Contact:</strong>{" "}
                {userDetails.Phone || "N/A"}
              </p>
            </div>
          </div>
        ) : (
          <div className="bg-red-100 border border-red-400 text-red-700 p-4 rounded relative">
            <p>Loading admin details...</p>
            <p>Please ensure you are logged in.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
