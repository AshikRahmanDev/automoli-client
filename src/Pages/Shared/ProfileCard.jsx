import React, { useState } from "react";
import { MdVerifiedUser } from "react-icons/md";
import useDelete from "../../Hooks/useDelete";
import useVerify from "../../Hooks/useVerify";

const ProfileCard = ({ userData, refetch }) => {
  const [userEmail, setUserEmail] = useState(null);
  const [userDeleteEmail, setDeleteEmail] = useState(null);
  const { name, email, photo, role } = userData;
  const [idVerified] = useVerify(userEmail);
  const [isDelete] = useDelete(userDeleteEmail);

  if (idVerified) {
    refetch();
  }
  if (isDelete) {
    refetch();
  }

  const handleVerify = () => {
    setUserEmail(email);
  };
  const handleDelete = () => {
    setDeleteEmail(email);
  };
  return (
    <div className="flex border p-3 rounded-sm">
      <div className="indicator">
        <div className="grid w-32 h-32 place-items-center">
          <img className="h-full w-full object-cover" src={photo} alt="" />
        </div>
      </div>
      <div className="mx-2">
        <h4 className="text-lg font-semibold p-0 m-0 flex items-center">
          {name}
          {userData?.verified && (
            <span className="text-green-500 font-normal text-[12px] mx-1 mt-1">
              <MdVerifiedUser />
            </span>
          )}
        </h4>
        <p className="text-gray-500 text-[12px] p-0 m-0">{email}</p>
        {userData?.verified ? (
          <p className="text-green-600">
            <span className="capitalize text-black">{role}:</span> Verified
          </p>
        ) : (
          <p className="text-red-500">
            <span className="capitalize text-black">{role}:</span> unverified
          </p>
        )}
        <div className="mt-3">
          <button
            onClick={handleDelete}
            className="btn mx-1 btn-xs btn-error text-white"
          >
            Delete
          </button>
          {!userData?.verified && (
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
