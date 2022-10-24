import React from "react";
import { NavLink } from "react-router-dom";
import MobileHeader from "./MobileHeader";

const Header = () => {
  return (
    <>
      <div className=" hidden sm:flex navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/">Item 1</NavLink>
              </li>
              <li tabIndex={0}>
                <NavLink to="/" className="justify-between">
                  Parent
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </NavLink>
                <ul className="p-2">
                  <li>
                    <NavLink to="/">Submenu 1</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Submenu 2</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="/">Item 3</NavLink>
              </li>
            </ul>
          </div>
          <NavLink to="/" className="btn btn-ghost normal-case text-xl">
            daisyUI
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <NavLink
                to="/news"
                className={({ isActive }) => (isActive ? "active:" : undefined)}
              >
                News
              </NavLink>
            </li>

            <li>
              <NavLink to="/destination">Destination</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <NavLink to="/" className="btn-outline btn-primary border rounded-r-full rounded-l-full py-2 px-5">
           Login
          </NavLink>
        </div>
      </div>

      {/** Header for Mobile */}
      <MobileHeader></MobileHeader>
    </>
  );
};

export default Header;
