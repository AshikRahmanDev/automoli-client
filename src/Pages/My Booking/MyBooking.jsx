import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import Loading from "../Shared/Loading";
import NotAvailable from "../Shared/NotAvailable";
import BookingCard from "./BookingCard";

const MyBooking = () => {
  const { user } = useContext(AuthContext);

  const { data: mybooking = [], isLoading } = useQuery({
    queryKey: ["mybooking"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/mybooking?email=${user?.email}`,
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
  console.log(mybooking);
  return (
    <div>
      <div className="sticky top-[-13px] bg-white">
        <h2 className="text-2xl font-semibold mb-1">My Booking {}</h2>
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
      {mybooking.length === 0 ? (
        <NotAvailable>
          <h1 className="text-white font-semibold text-5xl">
            You haven't <span className="text-primary">book</span> any.
          </h1>
        </NotAvailable>
      ) : (
        <div className="grid grid-cols-1 gap-5 w-[70%] mx-auto my-5 rounded-sm ">
          {mybooking.map((booking) => (
            <BookingCard key={booking._id} booking={booking} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBooking;
