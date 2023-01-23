import React, { useEffect, useState } from "react";
import AdvertiseCard from "./AdvertiseCard";

const Advertise = () => {
  const [advertiseItem, setAvertiseItem] = useState([]);
  useEffect(() => {
    fetch("https://automoli-server-mohammdashik.vercel.app/advertiseItem")
      .then((res) => res.json())
      .then((data) => {
        setAvertiseItem(data);
      });
  }, []);

  return (
    <div>
      {advertiseItem !== 0 && (
        <div className="w-[95%] mx-auto bg-accent/10 p-4">
          <h2 className="text-xl font-bold">Best Deal</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-auto my-5 gap-6">
            {advertiseItem.map((item) => (
              <AdvertiseCard key={item._id} item={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Advertise;
