const LoginForm = () => {
  return (
    <>
      {/* Left Section: Form */}
      <div className="w-full lg:w-1/2 p-8">
        <h2 className="text-3xl font-semibold mb-2">WELCOME BACK</h2>
        <p className="text-gray-500 mb-6">
          Welcome back! Please enter your details.
        </p>

        <form className="space-y-4">
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
              placeholder="********"
            />
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="flex items-center justify-between">
            <label className="inline-flex items-center text-sm text-gray-700">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-black focus:ring-black"
              />
              <span className="ml-2">Remember me</span>
            </label>
            <a href="#" className="text-sm text-red-500 hover:underline">
              Forgot password
            </a>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition"
          >
            Sign in
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="text-sm text-center text-gray-500 mt-4">
          Don’t have an account?{" "}
          <a href="#" className="text-red-500 font-medium hover:underline">
            Sign up for free!
          </a>
        </p>
      </div>
    </>
  );
};

export default LoginForm;
