import React from "react";
import { AiFillCar } from "react-icons/ai";
import { FaAward } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";

const Achievement = () => {
  return (
    <div className="w-[95%] mx-auto bg-accent/10 my-6 p-4">
      <h2 className="text-4xl text-center font-semibold">
        What Have We Achieved
      </h2>
      <p className="text-center text-primary font-semibold">REAL FIGURES</p>
      <div className="my-5 grid md:grid-cols-3">
        <div className="flex flex-col justify-center items-center">
          <AiFillCar className="text-7xl text-primary" />
          <p className="text-2xl font-bold text-primary">4567</p>
          <p className="text-xl font-bold">Vehicles In Stock</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <FaAward className="text-7xl text-primary" />
          <p className="text-2xl font-bold text-primary">227</p>
          <p className="text-xl font-bold">Awards</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <HiUserGroup className="text-7xl text-primary" />
          <p className="text-2xl font-bold text-primary">100%</p>
          <p className="text-xl font-bold">Happy Customers</p>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
