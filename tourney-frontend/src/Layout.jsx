import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="min-h-screen bg-gray-900">
      <main className="block">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
