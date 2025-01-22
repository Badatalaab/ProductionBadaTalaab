import { useState } from "react";
import Navbar from "../../../Component/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../../../Context/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [auth, setAuth] = useAuth();
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/admin/login`,
        { Email: email, Password: password }
      );
      if (res.data.success === true) {
        toast.success(res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(error);
      toast.error("Somethig Gone Wrong");
    }
  };

  return (
    <>
      <Navbar />
      <div className="h-screen flex">
        {/* Left Section */}
        <div className="flex flex-1 flex-col justify-center items-center bg-gray-50">
          <div className="w-3/4 max-w-md">
            <h1 className="text-4xl font-bold mb-2 fontstyle-1">
              WELCOME BACK
            </h1>
            <p className="text-gray-600 mb-6 fontstyle-2">
              Welcome back! Please enter your details.
            </p>
            <form className="space-y-4">
              {/* Email Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Enter your email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                />
              </div>
              {/* Password Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                />
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                onClick={handlesubmit}
                className="w-full py-2 px-4 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>

        {/* Right Section */}
        <div className="hidden md:flex h-screen flex-1 pt-14 justify-center items-center bg-gray-100">
          <img
            src="Images\AdminLoginBackground.png"
            alt="Illustration"
            className="w-full h-full"
          />
        </div>
      </div>
    </>
  );
};

export default Login;
