import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/AuthProvider";

const AdsCard = ({ ad, refetch }) => {
  const { user } = useContext(AuthContext);
  const [avertiseId, setAvertiseId] = useState("");

  const {
    brand,
    condition,
    image,
    model,
    perchaseDate,
    resalePrice,
    location,
    _id,
  } = ad;
  fetch(`https://automoli-server-mohammdashik.vercel.app/avertise/${_id}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setAvertiseId(data.itemId);
    });
  const handleDelte = (ad) => {
    const conformation = window.confirm(
      `You are going to delete your ${ad.model} ads`
    );
    if (conformation) {
      // delete seller add
      fetch(
        `https://automoli-server-mohammdashik.vercel.app/ad/delete/?email=${user?.email}`,
        {
          method: "DELETE",
          headers: {
            authorization: localStorage.getItem("automoliToken"),
            productId: ad._id,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            refetch();
          }
        });
    }
  };

  const handleAdveritse = (item) => {
    const {
      brand,
      condition,
      image,
      model,
      perchaseDate,
      resalePrice,
      location,
      _id,
    } = item;
    const advertise = {
      brand,
      condition,
      image,
      model,
      perchaseDate,
      resalePrice,
      location,
      itemId: _id,
    };
    fetch(`https://automoli-server-mohammdashik.vercel.app/avertise/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAvertiseId(data.itemId);
      });

    if (advertise) {
      fetch("https://automoli-server-mohammdashik.vercel.app/advertise", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: localStorage.getItem("automoliToken"),
        },
        body: JSON.stringify(advertise),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            toast.success("Successfully advertise!");
            fetch(
              `https://automoli-server-mohammdashik.vercel.app/avertise/${_id}`
            )
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                setAvertiseId(data.itemId);
              });
          }
        });
    }
  };
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
        <button
          onClick={() => handleDelte(ad)}
          className="border btn btn-sm btn-error text-white mt-2 "
        >
          Delete
        </button>
      </div>
      <div className="md:ml-auto md:w-[40%]">
        <p>
          Reach up to 10x more people by promoting your ad. your ad will show in
          advertise section.
        </p>
        <div className="text-center ">
          {avertiseId !== _id && (
            <button
              onClick={() => handleAdveritse(ad)}
              className="btn btn-primary btn-wide text-white my-2"
            >
              Advertise
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdsCard;
