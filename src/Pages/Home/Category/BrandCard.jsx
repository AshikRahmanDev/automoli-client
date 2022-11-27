import React from "react";
import { Link } from "react-router-dom";

const BrandCard = ({ category }) => {
  const { picture, brand } = category;
  console.log(category);

  return (
    <Link to={`/brand/cars/${brand}`}>
      <img
        className="w-[95%] h-[180px] mx-auto rounded-md"
        src={picture}
        alt=""
      />
    </Link>
  );
};

export default BrandCard;
