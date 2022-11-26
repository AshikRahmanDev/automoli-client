import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import Loading from "../Shared/Loading";
import AdsCard from "./AdsCard";

const MyAds = () => {
  const { user } = useContext(AuthContext);
  const { data: ads = [], isLoading } = useQuery({
    queryKey: ["myads"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/myads/?email=${user?.email}`,
        {
          headers: {
            authorization: localStorage.getItem("automoliToken"),
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="sticky top-[-13px] bg-white">
        <h2 className="text-2xl font-semibold mb-1">
          Published ads {ads.length}
        </h2>
        <hr />
        <label
          htmlFor="dashboard-drawer"
          className="btn btn-ghost drawer-button text-primary absolute top-[-8px] right-1 lg:hidden"
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
      </div>
      <div className="w-[98%] my-5 grid grid-cols-1">
        {ads && ads.map((ad) => <AdsCard key={ad._id} ad={ad} />)}
      </div>
    </div>
  );
};

export default MyAds;
