import React from "react";
const UpperDashboard = ({ data }) => {
  return (
    <>
      <section className="p-3">
        <h2>Overview</h2>
        <div className="grid grid-cols-4">
          <div className="rounded overflow-hidden border-2 shadow-lg m-10">
            <div className="p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-center text-6xl ">
                  23
                </div>
              </div>
            </div>
            <button className="w-full bg-blue-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4  inline-flex items-center">
              <span>Companies</span>
            </button>
          </div>
          <div className="rounded overflow-hidden border-2 shadow-lg m-10">
            <div className="p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-center text-6xl ">
                  43
                </div>
              </div>
            </div>
            <button className="w-full bg-red-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4  inline-flex items-center">
              <span>Shop</span>
            </button>
          </div>
          <div className="rounded overflow-hidden border-2 shadow-lg m-10">
            <div className="p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-center text-6xl ">
                  102
                </div>
              </div>
            </div>
            <button className="w-full bg-yellow-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4  inline-flex items-center">
              <span>Requests</span>
            </button>
          </div>
          <div className="rounded overflow-hidden border-2 shadow-lg m-10">
            <div className="p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-center text-6xl ">
                  87
                </div>
              </div>
            </div>
            <button className="w-full bg-yellow-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4  inline-flex items-center">
              <span>Details</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
export default UpperDashboard;
