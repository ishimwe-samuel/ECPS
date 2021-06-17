import React from "react";
import { FaShoppingBag, FaUsers } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
const Sidebar = ({ menu }) => {
  return (
    <>
      <aside className="flex flex-col px-3  border-r border-gray-300 text-white">
        <section className="flex items-center py-3">
          <span className="inline-block w-12 h-12 overflow-hidden">
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
              <path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3" />
              <circle cx="12" cy="10" r="3" />
              <circle cx="12" cy="12" r="10" />
            </svg>
          </span>
          <div className="m1-3">
            <h2 className="text-lg">Samy Ishimwe</h2>
          </div>
        </section>
        <ul className="space-y-3">
          <li className="flex items-center p-2">
            <span className="h-8 w-8 flex items-center">
              <FaUsers size="25" />
            </span>
            <h4 className="m1-1">Manage Companies</h4>
          </li>
          <li className="flex items-center p-2">
            <span className="h-8 w-8 flex items-center">
              <FaShoppingBag size="25" />
            </span>
            <h4 className="m1-1">Manage Shops</h4>
          </li>
          <li className="flex items-center p-2">
            <span className="h-8 w-8 flex items-center">
              <FaUsers size="25" />
            </span>
            <h4 className="m1-1">Manage Requests</h4>
          </li>
        </ul>
        <ul className="mb-3 space-y-3 mt-auto">
          <li className="flex items-center p-2">
            <span className="h-8 w-8 flex items-center">
              <AiOutlineLogout size="25" />
            </span>
            <h4 className="font-medium m1-1">Logout</h4>
          </li>
        </ul>
      </aside>
    </>
  );
};
export default Sidebar;
