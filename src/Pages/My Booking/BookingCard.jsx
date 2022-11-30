import React from "react";
import { Link } from "react-router-dom";

const BookingCard = ({ booking }) => {
  const { product } = booking;
  const {
    perchaseDate,
    resalePrice,
    brand,
    kilomiterRun,
    location,
    model,
    image,
  } = product;

  return (
    <div className="bg-accent/5 p-3 md:flex">
      <div className="">
        <img className="w-[200px]" src={image} alt="" />
      </div>
      <div className="md:px-4">
        <h3 className="text-xl font-semibold">
          {model} {brand.split(" ")[1]} {perchaseDate}
        </h3>
        <p>{kilomiterRun} (km)</p>
        <p className="text-gray-500">{location}</p>
        <p className="text-md text-primary font-semibold">
          Price: {resalePrice} TK
        </p>
        {product.resalePrice && !product.paid && (
          <Link
            to={`/dashboard/payment/${booking._id}`}
            className="btn btn-sm btn-primary my-2 text-white"
          >
            {" "}
            Pay
          </Link>
        )}
        {product.resalePrice && product.paid && (
          <button className="btn btn-sm btn-disabled my-2 text-white">
            Paid
          </button>
        )}
      </div>
    </div>
  );
};

export default BookingCard;
