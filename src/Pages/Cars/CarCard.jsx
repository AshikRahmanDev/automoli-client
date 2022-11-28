import React from "react";
import { MdVerifiedUser } from "react-icons/md";

const CarCard = ({ car, isveified }) => {
  console.log(isveified);
  const {
    brand,
    condition,
    image,
    kilomiterRun,
    location,
    model,
    orginalPrice,
    perchaseDate,
    post,
    resalePrice,
    sellerName,
  } = car;
  const brandName = brand.split(" ")[1];

  return (
    <div className="w-[90%] mx-auto bg-accent/10 p-3 grid grid-cols-6">
      <img
        className="h-[250px] w-full rounded-sm col-span-2"
        src={image}
        alt=""
      />
      <div className="m-3 p-3 bg-accent/10 rounded col-span-2">
        <h3 className="text-2xl font-semibold ">
          <span className="text-primary">{model}</span> ({brandName})
        </h3>
        <p>Brand: {brandName}</p>
        <p>Condition: {condition}</p>
        <p>Location: {location}</p>
        <p>Kilomiter Run: {kilomiterRun} (km)</p>
        <p>Manufacturing Year: {perchaseDate}</p>
      </div>
      <div className="col-span-2 p-3">
        <p className="text-primary text-[12px]">Posted By</p>
        <p className="text-xl font-semibold flex items-center">
          {sellerName}{" "}
          {isveified && (
            <span className="text-green-500 font-normal text-[12px] mx-1 mt-1">
              <MdVerifiedUser />
            </span>
          )}
        </p>
        <p className="text-[12px]">Post at: {post}</p>
        <p>
          Orginal Price: <span className="text-red-500">{orginalPrice}</span>
        </p>
        <p>
          Resale Price: <span className="text-green-500">{resalePrice}</span>
        </p>
      </div>
    </div>
  );
};

export default CarCard;
