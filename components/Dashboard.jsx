import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Table from "./Table";
import Card from "./Card";
import Footer from "./Footer";

const Dashboard = ({ children }) => {
  const users = [
    { id: 1, name: "John Doe", email: "johndoe@example.com", role: "Admin" },
    { id: 2, name: "Jane Doe", email: "janedoe@example.com", role: "User" },
    { id: 3, name: "Bob Smith", email: "bobsmith@example.com", role: "User" },
  ];

  const data = [
    { id: 1, column1: "Value 1A", column2: "Value 1B", column3: "Value 1C" },
    { id: 2, column1: "Value 2A", column2: "Value 2B", column3: "Value 2C" },
    { id: 3, column1: "Value 3A", column2: "Value 3B", column3: "Value 3C" },
    { id: 4, column1: "Value 4A", column2: "Value 4B", column3: "Value 4C" },
    { id: 5, column1: "Value 5A", column2: "Value 5B", column3: "Value 5C" },
  ];

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <Navbar />
        <div className="flex-1 relative z-0 overflow-y-auto py-6 px-4 sm:px-6 lg:px-8">
          {/* <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row -mx-4">
              <div className="md:w-1/2 px-4">
                <Card title="Users" value={users.length} />
              </div>
              <div className="md:w-1/2 px-4">
                <Card title="Revenue" value="$42,000" />
              </div>
            </div>
            <Table data={data} loading={false} />
          </div> */}
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
