import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import BookNowModal from "./BookNowModal";
import CarCard from "./CarCard";

const Cars = () => {
  const [bookItem, setBookItem] = useState("");
  const [isveified, setIsverified] = useState("");
  const { user } = useContext(AuthContext);
  const cars = useLoaderData();

  useEffect(() => {
    fetch(`http://localhost:5000/isUserVerified/?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.verified) {
          setIsverified(data.verified);
        }
      });
  }, [user?.email]);

  return (
    <div className="w-[95%] mx-auto my-5 p-4">
      <h2 className="text-2xl font-semibold">
        Ads of brand {cars[0]?.brand?.split(" ")[1]}
      </h2>
      <hr className="mb-5 mt-2" />
      <div className="my-3 grid grid-cols-1 gap-4">
        {cars &&
          cars.map((car) => (
            <CarCard
              key={car._id}
              car={car}
              isveified={isveified}
              setBookItem={setBookItem}
            />
          ))}
      </div>
      {bookItem && (
        <BookNowModal setBookItem={setBookItem} bookItem={bookItem} />
      )}
    </div>
  );
};

export default Cars;
