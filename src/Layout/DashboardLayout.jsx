import React from "react";
import { Link, Outlet } from "react-router-dom";
import { GiCarWheel } from "react-icons/gi";
import { AiOutlineFileAdd, AiFillHome } from "react-icons/ai";
import { MdSell } from "react-icons/md";
import { RiRoadsterFill } from "react-icons/ri";

const DashboardLayout = () => {
  return (
    <div className="relative">
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content flex flex-col p-3">
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
              <Link to={"/"}>
                <AiOutlineFileAdd />
                Home
              </Link>
            </li>
            <li className="my-1 btn btn-ghost">
              <Link to={"/dashboard"}>
                <AiOutlineFileAdd />
                post ad
              </Link>
            </li>
            <li className="my-1 btn btn-ghost">
              <Link to={"/dashboard/myads"}>
                <RiRoadsterFill />
                My Ads
              </Link>
            </li>
            <li className="my-1 btn btn-ghost">
              <Link to={"/dashboard/allseller"}>
                <MdSell />
                All Seller
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
