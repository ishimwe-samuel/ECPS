import React from "react";
import TopNav from "../components/Navigation/TopNav";
import Sidenav from "../components/Sidenav";
import MainAdmin from "../Views/admin/MainAdmin";
const AdminLayout = () => {
  return (
    <>
      <Sidenav />
      <main>
        <header className="flex items-center h-12 border-b">
          <button className="h-12 w-12 flex items-center justify-center">
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
              className="stroke-current text-gray-600"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
          <h2>Employee Credit Product System</h2>
          <TopNav/>
        </header>
        <MainAdmin />
      </main>
    </>
  );
};
export default AdminLayout;
