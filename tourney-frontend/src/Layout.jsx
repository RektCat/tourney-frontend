import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

function Layout() {
  return (
    <div className="flex min-h-screen flex-1 flex-col bg-gray-900">
      <div className="mx-auto w-full max-w-[1250px]">
        <Header />
        <main className="block">
          <Outlet />
        </main>
      </div>
      <footer className="absolute bottom-0 w-full border-t border-t-white bg-white/10 py-[2px] text-center text-xs">
        Created by <b>Norbert Tanács</b> for thesis
      </footer>
    </div>
  );
}

export default Layout;
