import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row w-[95%] md:h-[80vh] items-center mx-auto bg-accent/20  mt-6">
      <div className="md:ml-10 p-5 md:p-0">
        <h4 className="text-lg font-semibold text-primary">
          Best Used Car Selling Platfrom
        </h4>
        <h1 className="text-2xl md:text-7xl font-bold">
          <span className="text-primary">Buy</span> and{" "}
          <span className="text-primary">sell</span>{" "}
          <br className="md:block hidden" /> used car with Automoli
        </h1>
        <p>
          Automoli is a platfrom on which you can sell and buy car in greet
          condition. <br className="md:block hidden" /> 24 coustomer service.
        </p>
        <div className="mt-3">
          <button className="btn btn-primary mr-3 rounded-sm text-white">
            Register
          </button>
          <button className="btn btn-outline mx-3 rounded-sm btn-primary text-white">
            Register
          </button>
        </div>
      </div>
      <img
        className="md:w-[50%] "
        src="https://i.ibb.co/MpFHrX2/pngwing-com.png"
        alt=""
      />
    </div>
  );
};

export default Banner;
