import React from "react";
import Achievement from "../Achievement/Achievement";
import Banner from "../Banner/Banner";
import Categories from "../Category/Categories";

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <Achievement />
    </div>
  );
};

export default Home;
