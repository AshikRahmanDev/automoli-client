import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/AuthProvider";

const BookNowModal = ({ setBookItem, bookItem }) => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const { model, image, location, resalePrice } = bookItem;
  const brand = bookItem.brand.split(" ")[1];

  const onSubmit = (data) => {
    const booking = {
      contact: data,
      buyerName: user?.displayName,
      buyerEmail: user?.email,
      product: bookItem,
    };
    if (data.buyerMobile || data.buyerLocation) {
      fetch("https://automoli-server-mohammdashik.vercel.app/addbooking", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: localStorage.getItem("automoliToken"),
        },
        body: JSON.stringify(booking),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.acknowledged) {
            setBookItem("");
            toast.success("Booking Successfull");
          }
        });
    }
  };

  return (
    <div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <div className="flex">
            <img className="w-24 rounded-md" src={image} alt="" />
            <div className="mx-2 ">
              <h2 className="text-xl font-semibold">
                {model} ({brand})
              </h2>
              <p className="text-[12px]">{location}</p>
            </div>
          </div>
          <form className="py-4 grid md:grid-cols-2 gap-4">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Model</span>
              </label>
              <input
                type="text"
                defaultValue={model}
                readOnly
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                defaultValue={resalePrice}
                readOnly
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                defaultValue={user?.displayName}
                readOnly
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                type="text"
                defaultValue={user?.email}
                readOnly
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Mobile</span>
              </label>
              <input
                type="number"
                {...register("buyerMobile")}
                placeholder="Number"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Your Location</span>
              </label>
              <input
                type="text"
                placeholder="location"
                {...register("buyerLocation")}
                required
                className="input input-bordered w-full"
              />
            </div>
            <div className="modal-action">
              <button
                onClick={() => setBookItem("")}
                className="btn btn-outline btn-primary"
              >
                Cancel
              </button>

              <input
                onClick={handleSubmit(onSubmit)}
                className="btn btn-primary text-white"
                type="submit"
                value="Book Now"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookNowModal;
