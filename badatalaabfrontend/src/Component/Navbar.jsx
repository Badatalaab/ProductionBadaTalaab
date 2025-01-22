import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../Context/auth";

const Navbar = () => {
  const [display, setDisplay] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [auth, setAuth] = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleLogout = () => {
    setAuth({ ...auth, user: null, token: "" });
    localStorage.removeItem("auth");
    toast.success("Logout Successfull");
  };

  const handleClick = () => {
    if (location.pathname === "/") {
      // If already on the home page, just scroll to the section
      const section = document.getElementById("letstalk");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Redirect to the home page and scroll after rendering
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById("letstalk");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 4000);
    }
  };
  return (
    <>
      {/* pc screen */}
      <div
        style={{ backgroundColor: "#0C0C0C" }}
        className="h-14 fixed w-full z-40 flex flex-row max-md:hidden max-lg:visible lg:visble "
      >
        <div className=" w-full flex flex-row items-center justify-between ">
          <a className="font-semibold ml-10 w-52  mt-2 " href="/">
            <img src="Images/Logo/Bada_talablogo.png" alt="LOGO" />
          </a>
          <div className="pr-5 mr-20">
            <a
              className="font-semibold fontstyle-1  text-white text-base ml-14 hover:border-b-2 hover:text-blue-200 hover:border-blue-200"
              href="/"
            >
              Home
            </a>
            <a
              className="font-semibold fontstyle-1  text-white text-base ml-12 hover:border-b-2 hover:text-blue-200 hover:border-blue-200"
              href="/about"
            >
              About us
            </a>
            <a
              className="font-semibold fontstyle-1 text-white text-base ml-12 hover:border-b-2 hover:text-blue-200 hover:border-blue-200"
              href="/faq"
            >
              FAQ’s
            </a>

            <a
              className="font-semibold fontstyle-1 text-white cursor-pointer text-base ml-12 hover:border-b-2 hover:text-blue-200 hover:border-blue-200"
              onClick={handleClick}
            >
              Contact us
            </a>
          </div>
          {auth.user ? (
            <div className="relative inline-block text-left mr-4">
              {/* Dropdown Button */}
              <button
                onClick={toggleDropdown}
                className="flex items-center px-4 py-2 bg-orange-500 text-white rounded-full focus:outline-none"
              >
                <span className="text-xl font-bold">S</span>
              </button>

              {/* Dropdown Menu */}
              {isOpen && (
                <div className="absolute right-0 z-50 mt-2 w-56 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      <span className="mr-2">📂</span> My GPTs
                    </a>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      <span className="mr-2">⚙️</span> Customize ChatGPT
                    </a>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      <span className="mr-2">🔧</span> Settings
                    </a>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      <span className="mr-2">🌟</span> Upgrade Plan
                    </a>
                    <a
                      href={`/dashboard/admin`}
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      <span className="mr-2">🔍</span> Admin
                    </a>
                    <button
                      onClick={handleLogout}
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      <span className="mr-2">🚪</span> Log out
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>

      {/* tablet and mobile screen */}
      <div
        className="lg:hidden md:hidden min-h-20 max-md:visible flex flex-col items-center fixed w-full z-40"
        style={{ backgroundColor: "#0C0C0C" }}
      >
        <div className="flex justify-between items-center px-8 w-full">
          <a className="font-semibold w-40  mt-2 " href="/">
            <img src="Images/Logo/Bada_talablogo.png" alt="LOGO" />
          </a>
          <i
            onClick={(e) => setDisplay(!display)}
            class="fa-solid fa-bars fa-2xl"
            style={{ color: "#ffff" }}
          ></i>
        </div>
        {display ? (
          <div className="flex flex-col w-full px-8 py-2 ">
            <a
              className="font-semibold text-white text-xl hover:border-b-2 hover:text-blue-200 hover:border-blue-200"
              href="/"
            >
              Home
            </a>
            <a
              className="font-semibold text-white mt-2 text-xl hover:border-b-2 hover:text-blue-200 hover:border-blue-200"
              href="/about"
            >
              About us
            </a>
            <a
              className="font-semibold text-white mt-2 text-xl hover:border-b-2 hover:text-blue-200 hover:border-blue-200"
              href="/faq"
            >
              FAQ’s
            </a>
            <a
              className="font-semibold cursor-pointer text-white mt-2 text-xl hover:border-b-2 hover:text-blue-200 hover:border-blue-200"
              onClick={handleClick}
            >
              Contact us
            </a>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Navbar;
