import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
      <h1 className="text-9xl fontstyle-1 font-bold text-gray-800">404</h1>
      <h2 className="text-3xl fontstyle-2 font-semibold text-gray-600 mt-4">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-500 mt-2">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default PageNotFound;
