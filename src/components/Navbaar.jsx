import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import Logo from "../assets/logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


  return (
    <nav className=" bg-white  fixed w-full z-20 top-0 start-0 border-b border-gray-200 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          {/* <img src={Logo} className="h-10" alt="veda pro logo" /> */}
          <span className="self-center text-3xl font-[Lobster] font-semibold whitespace-nowrap text-black">
            Talent Brich India
          </span>
        </NavLink>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-white bg-[#e6c42e] sm:inline-block hidden hover:bg-[#0a7a3e] focus:ring-4 focus:outline-none focus:ring-[#e6c42e] font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-[#e6c42e] dark:hover:bg-[#0a7a3e] dark:focus:ring-[#e6c42e] transform transition-transform duration-300 hover:scale-105"
          >
            Get started
          </button>

          <button
            onClick={toggleMobileMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? (
              <i className="fas fa-times"></i>
            ) : (
              <i className="fas fa-bars"></i>
            )}
          </button>
        </div>
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center py-2 px-3 ${
                    isActive ? "text-[#e6c42e]" : "text-gray-900"
                  } rounded transform transition-transform duration-300 hover:scale-105 md:p-0 md:dark:text-blue-500`
                }
                aria-current="page"
              >
                <i className="fas fa-home mr-2"></i>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `flex items-center py-2 px-3 ${
                    isActive ? "text-[#e6c42e]" : "text-gray-900"
                  } rounded transform transition-transform duration-300 hover:scale-105 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white`
                }
              >
                <i className="fas fa-info-circle mr-2"></i>
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `flex items-center py-2 px-3 ${
                    isActive ? "text-[#e6c42e]" : "text-gray-900"
                  } rounded transform transition-transform duration-300 hover:scale-105 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white`
                }
              >
                <i className="fas fa-envelope mr-2"></i>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
