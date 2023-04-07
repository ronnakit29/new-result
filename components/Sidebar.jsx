import React from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="flex flex-col w-64 bg-gray-800">
      <div className="h-16 flex items-center justify-center">
        <h1 className="text-white font-bold text-2xl">Dashboard</h1>
      </div>
      <nav className="flex-1 px-4 mt-6">
        <Link href="/dashboard">
          <div className="flex items-center mt-4 py-2 px-6 rounded-lg text-gray-300 hover:bg-gray-900 hover:text-white cursor-pointer">
            Dashboard
          </div>
        </Link>
        <Link href="/profile">
          <div className="flex items-center mt-4 py-2 px-6 rounded-lg text-gray-300 hover:bg-gray-900 hover:text-white cursor-pointer">
            Profile
          </div>
        </Link>
        <Link href="/settings">
          <div className="flex items-center mt-4 py-2 px-6 rounded-lg text-gray-300 hover:bg-gray-900 hover:text-white cursor-pointer">
            Settings
          </div>
        </Link>
        <Link href="/logout">
          <div className="flex items-center mt-4 py-2 px-6 rounded-lg text-gray-300 hover:bg-gray-900 hover:text-white cursor-pointer">
            Logout
          </div>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
