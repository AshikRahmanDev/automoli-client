import React from "react";
import { Link, Outlet } from "react-router-dom";
import { GiCarWheel } from "react-icons/gi";
import { AiOutlineFileAdd, AiFillHome } from "react-icons/ai";

const DashboardLayout = () => {
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content flex flex-col p-3">
          <label
            htmlFor="dashboard-drawer"
            className="btn btn-ghost drawer-button text-primary absolute top-1 right-1 lg:hidden"
          >
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
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>

          <ul className="menu w-72 bg-accent text-white">
            <p className="shadow">
              <Link
                to={"/"}
                className="btn flex items-center text-white btn-ghost normal-case text-2xl"
              >
                Aut <GiCarWheel className="w-[17px] mt-[5px] text-primary" /> m
                <GiCarWheel className="w-[17px] mt-[5px] text-primary" />
                li
              </Link>
            </p>

            <li className="my-1 btn btn-ghost">
              <Link to={"/dashboard"}>
                <AiOutlineFileAdd />
                Add Product
              </Link>
            </li>
            <li className="my-1 btn btn-ghost">
              <Link to={"/dashboard/addproduct"}>
                <AiOutlineFileAdd />
                Add Product
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
