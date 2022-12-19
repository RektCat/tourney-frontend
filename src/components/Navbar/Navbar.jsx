import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-3 bg-primary text-white">
      <a className="font-bold text-xl" href="#">
        My Website
      </a>
      <div className="flex items-center">
        <a className="px-3 py-2 rounded-full text-secondary hover:bg-secondary hover:text-white" href="#">
          Home
        </a>
        <a className="px-3 py-2 rounded-full text-secondary hover:bg-secondary hover:text-white" href="#">
          About
        </a>
        <a className="px-3 py-2 rounded-full text-secondary hover:bg-secondary hover:text-white" href="#">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
