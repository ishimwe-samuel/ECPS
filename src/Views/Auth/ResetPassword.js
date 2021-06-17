import React from "react";
const ResetPassword = () => {
  return (
    <>
      <form className="mt-10" method="POST" autoComplete="off">
        <label
          for="new_password"
          className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
        >
          New Password
        </label>
        <input
          id="new_password"
          type="password"
          name="new_password"
          placeholder="New password"
          autocomplete="current-password"
          className="block w-full py-3 px-1 mt-2 mb-4
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
          required
        />
        <label
          for="comfirm_new_password"
          className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
        >
          Comfirm New Password
        </label>
        <input
          id="comfirm_new_password"
          type="password"
          name="comfirm_new_password"
          placeholder="Comfirm New password"
          autocomplete="current-password"
          className="block w-full py-3 px-1 mt-2 mb-4
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
          required
        />
        {/* Auth Buttton  */}
        <button
          type="submit"
          className="w-full py-3 mt-10 bg-gray-800 rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-gray-700 hover:shadow-none"
        >
          Reset
        </button>
      </form>
    </>
  );
};
export default ResetPassword;
