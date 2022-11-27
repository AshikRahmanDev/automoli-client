import React from "react";

const adsCard = ({ ad }) => {
  const {
    brand,
    condition,
    image,
    model,
    perchaseDate,
    resalePrice,
    location,
  } = ad;
  console.log(ad);
  return (
    <div className="border my-5 p-2 md:flex">
      <img
        className="md:w-[250px] w-[100%] h-[180px] object-cover"
        src={image}
        alt=""
      />
      <div className="mx-3">
        <h4 className="text-xl font-semibold">
          {model} {`(${condition})`}
        </h4>
        <p className="text-gray-600">{location}</p>
        <p>TK {resalePrice}</p>
        <p>
          {brand} | {perchaseDate}
        </p>
        <p className="text-red-500">Usold</p>
        <button className="border p-2 bg-slate-400/30 rounded-lg hover:btn-error mt-2 ">
          Delete
        </button>
      </div>
      <div className="md:ml-auto md:w-[40%]">
        <p>
          Reach up to 10x more people by promoting your ad. your ad will show in
          advertise section.
        </p>
        <div className="text-center ">
          <button className="btn btn-primary btn-wide text-white my-2">
            Advertise
          </button>
        </div>
      </div>
    </div>
  );
};

export default adsCard;
