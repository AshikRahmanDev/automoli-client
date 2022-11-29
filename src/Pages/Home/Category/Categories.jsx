import axios from "axios";
import React, { useEffect, useState } from "react";
import BrandCard from "./BrandCard";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    try {
      axios
        .get("http://localhost:5000/brands", (res) => {
          res.json();
        })
        .then((data) => setCategories(data.data));
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div className="w-[95%] mx-auto bg-accent/20 p-3 mb-5">
      <h2 className="text-2xl font-bold">Find your car</h2>
      <div className="my-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories &&
          categories.map((category) => (
            <BrandCard key={category._id} category={category} />
          ))}
      </div>
    </div>
  );
};

export default Categories;
