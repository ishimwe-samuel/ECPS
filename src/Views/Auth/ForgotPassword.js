import React, { useState } from "react";
const ForgotPassword = () => {
  const [recoveryEmail, setRecoveryEmail] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    const data = JSON.stringify({ recoveryEmail });
    console.log(data);
  };
  return (
    <>
      {/* Card Title  */}
      <h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
        Forgot Password
      </h2>
      <form class="mt-10" onSubmit={onSubmit} autoComplete="off">
        {/* Email Input  */}
        <label
          htmlFor="email"
          class="block text-xs font-semibold text-gray-600 uppercase"
        >
          E-mail
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="e-mail address"
          autoComplete="email"
          class="block w-full py-3 px-1 mt-2 
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
          required
          value={recoveryEmail}
          onChange={(e) => setRecoveryEmail(e.target.value)}
        />
        <button
          type="submit"
          class="w-full py-3 mt-10 bg-gray-800 rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-gray-700 hover:shadow-none"
        >
          Request
        </button>
      </form>
    </>
  );
};
export default ForgotPassword;
