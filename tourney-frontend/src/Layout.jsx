import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

function Layout() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main className="block">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
