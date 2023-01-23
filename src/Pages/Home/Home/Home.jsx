import React, { useState } from "react";
import Achievement from "../Achievement/Achievement";
import Advertise from "../AdvertiseItem/Advertise";
import Banner from "../Banner/Banner";
import Categories from "../Category/Categories";

const Home = () => {
  const [advertise, setAdvertise] = useState([]);
  fetch("https://automoli-server-mohammdashik.vercel.app/advertiseItem")
    .then((res) => res.json())
    .then((data) => {
      setAdvertise(data);
    });
  return (
    <div>
      <Banner />
      <Categories />
      {advertise.length !== 0 && <Advertise />}
      <Achievement />
    </div>
  );
};

export default Home;
