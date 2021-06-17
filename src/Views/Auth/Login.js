import React, { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      {/* Card Title  */}
      <h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
        Login
      </h2>
      <form className="mt-10" method="POST">
        {/* Email Input  */}
        <label
          for="email"
          className="block text-xs font-semibold text-gray-600 uppercase"
        >
          E-mail
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="e-mail address"
          autocomplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full py-3 px-1 mt-2 
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
          required
        />

        {/* Password Input  */}
        <label
          for="password"
          className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="password"
          autocomplete="current-password"
          className="block w-full py-3 px-1 mt-2 mb-4
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Auth Buttton  */}
        <button
          type="submit"
          className="w-full py-3 mt-10 bg-gray-800 rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-gray-700 hover:shadow-none"
        >
          Login
        </button>

        {/* Another Auth Routes  */}
        <div className="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center">
          <Link to="forgot-password" className="flex-2 underline">
            Forgot password?
          </Link>

          <p className="flex-1 text-gray-500 text-md mx-4 my-1 sm:my-auto">
            or
          </p>

          <Link to="register" className="flex-2 underline">
            Create an Account
          </Link>
        </div>
      </form>
    </>
  );
};

export default Login;
