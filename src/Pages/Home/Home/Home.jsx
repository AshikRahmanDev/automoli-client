import React from "react";
import Achievement from "../Achievement/Achievement";
import Advertise from "../AdvertiseItem/Advertise";
import Banner from "../Banner/Banner";
import Categories from "../Category/Categories";

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <Advertise />
      <Achievement />
    </div>
  );
};

export default Home;
