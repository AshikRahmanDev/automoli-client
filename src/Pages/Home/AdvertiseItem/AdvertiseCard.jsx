import React from "react";

const AdvertiseCard = ({ item }) => {
  console.log(item);
  const {
    image,
    brand,
    model,
    perchaseDate,
    resalePrice,
    condition,
    location,
  } = item;
  return (
    <div className="p-4">
      <img className="w-full h-[200px] object-cover" src={image} alt="" />
      <div>
        <h4 className="font-semibold text-xl">
          {brand.split(" ")[1]} {model} | {perchaseDate}
        </h4>
        <p className="text-2xl font-bold">TK {resalePrice}</p>
        <hr className="border-black" />
        <div className="my-2 flex justify-between">
          <p className="bg-primary w-[80px] text-center rounded text-white font-bold text-lg">
            {perchaseDate}
          </p>
          <p className="text-gray-500">{condition}</p>
          <p className="text-gray-500">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default AdvertiseCard;
