import React, { useState } from "react";
import toast from "react-hot-toast";
import useVerify from "../../Hooks/useVerify";

const ProfileCard = ({ seller }) => {
  const [verifyEmail, setVerifyEmail] = useState(null);
  const { name, email, photo } = seller;
  const [data] = useVerify(verifyEmail);
  if (data) {
    console.log(data);
    toast.success("verified succesful");
  }

  const handleVerify = () => {
    setVerifyEmail(email);
  };
  return (
    <div className="flex border p-3 rounded-sm">
      <div className="indicator">
        <span
          className={`indicator-item indicator-start sm:indicator-middle md:indicator-bottom lg:indicator-center xl:indicator-end badge ${
            seller?.verified ? "badge-neutral" : "badge-secondary"
          }`}
        ></span>
        <div className="grid w-32 h-32 place-items-center">
          <img className="h-full w-full object-cover" src={photo} alt="" />
        </div>
      </div>
      <div className="mx-2">
        <h4 className="text-lg font-semibold p-0 m-0">{name}</h4>
        <p className="text-gray-500 p-0 m-0">{email}</p>
        {seller?.verified ? <p>Verified</p> : <p>unverified</p>}
        <div className="mt-3">
          <button className="btn mx-1 btn-xs btn-error text-white">
            Delete
          </button>
          {!seller?.verified && (
            <button
              onClick={handleVerify}
              className="btn mx-1 btn-xs bg-green-600 border-green-600 text-white"
            >
              verify
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
