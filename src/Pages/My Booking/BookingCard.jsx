import React from "react";

const BookingCard = ({ booking }) => {
  const { product } = booking;
  console.log(product);
  const {
    perchaseDate,
    resalePrice,
    brand,
    condition,
    kilomiterRun,
    location,
    model,
    image,
  } = product;

  return (
    <div className="bg-accent/5 p-3 flex">
      <div className="">
        <img className="w-[200px]" src={image} alt="" />
      </div>
      <div className="px-4">
        <h3 className="text-xl font-semibold">
          {model} {brand.split(" ")[1]} {perchaseDate}
        </h3>
        <p>{kilomiterRun} (km)</p>
        <p className="text-gray-500">{location}</p>
        <p className="text-md text-primary font-semibold">
          Price: {resalePrice} TK
        </p>
        <button className="btn btn-sm btn-primary my-2 text-white"> Pay</button>
      </div>
    </div>
  );
};

export default BookingCard;
