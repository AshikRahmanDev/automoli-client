import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // get current time
  const today = new Date();
  let date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  let time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  // handle ad post
  const onPost = (data) => {
    const brand = data.brand;
    const model = data.model;
    const orginalPrice = data.orginalPrice;
    const resalePrice = data.resalePrice;
    const kilomiterRun = data.kilomiterRun;
    const perchaseDate = data.perchaseDate;
    const condition = data.condition;
    const description = data.description;
    const location = data.location;
    const mobile = data.mobile;
    const image = data.photo;
    const formData = new FormData();
    formData.append("image", image[0]);
    // upload image in imgebb
    const url = `https://api.imgbb.com/1/upload?&key=${process.env.REACT_APP_ImgBB_key}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const ad = {
            brand,
            model,
            orginalPrice,
            resalePrice,
            kilomiterRun,
            post: time + " " + date,
            perchaseDate,
            condition,
            description,
            location,
            mobile,
            image: result.data.url,
            sellerName: user?.displayName,
            email: user?.email,
          };
          // save car ad in mongobd
          fetch("http://localhost:5000/add-car-ad", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(ad),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                toast.success("Ad Post Successful!");
                navigate("/dashboard/myads");
              }
            });
        }
      });
  };
  return (
    <div>
      <div className="sticky top-[-13px] bg-white">
        <h3 className="text-2xl font-semibold mb-1">Fill in the details</h3>
        <hr />
        <label
          htmlFor="dashboard-drawer"
          className="btn btn-ghost drawer-button text-primary absolute top-[-8px] right-1 lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
      <form
        onSubmit={handleSubmit(onPost)}
        className="w-[80%] mx-auto grid md:grid-cols-2 gap-4 mt-5"
      >
        <div className="form-control col-span-2 md:col-span-1 w-full max-w-xs">
          {/* brand */}
          <label className="label">
            <span className="label-text">Brand </span>
          </label>
          <select
            {...register("brand", {
              required: "You can't skip this required field!",
            })}
            className="select select-bordered rounded-sm"
          >
            <option selected>1. Honda</option>
            <option>2. Toyota</option>
            <option>3. Nisshan</option>
            <option>4. Other</option>
          </select>
          {errors?.brand && (
            <p className="text-red-500">{errors.brand.message}</p>
          )}
        </div>
        {/* model */}
        <div className="form-control col-span-2 md:col-span-1 w-full max-w-xs">
          <label className="label">
            <span className="label-text">Model </span>
          </label>
          <input
            type="text"
            {...register("model", {
              required: "Model Name field is required!",
            })}
            placeholder="Model"
            className="input input-bordered rounded-sm w-full max-w-xs"
          />
          {errors?.model && (
            <p className="text-red-500">{errors.model.message}</p>
          )}
        </div>
        {/* Kilometers run */}
        <div className="form-control col-span-2 md:col-span-1 w-full max-w-xs">
          <label className="label">
            <span className="label-text">Kilometers run (km)</span>
          </label>
          <input
            type="number"
            {...register("kilomiterRun", {
              required: "You must fill out this field.!",
            })}
            placeholder="What is the mileage of your car?"
            className="input input-bordered rounded-sm w-full max-w-xs"
          />
          {errors?.kilomiterRun && (
            <p className="text-red-500">{errors.kilomiterRun.message}</p>
          )}
        </div>
        {/* orginal Price */}
        <div className="form-control col-span-2 md:col-span-1 w-full max-w-xs">
          <label className="label">
            <span className="label-text">Orginal Price </span>
          </label>
          <input
            type="number"
            {...register("orginalPrice", {
              required: "ops! Your forget to add price",
            })}
            placeholder="$ 00"
            className="input input-bordered rounded-sm w-full max-w-xs"
          />
          {errors?.orginalPrice && (
            <p className="text-red-500">{errors.orginalPrice.message}</p>
          )}
        </div>
        {/* resale Price */}
        <div className="form-control col-span-2 md:col-span-1 w-full max-w-xs">
          <label className="label">
            <span className="label-text">Resale Price </span>
          </label>
          <input
            type="number"
            {...register("resalePrice", {
              required: "ops! Your forget to add price",
            })}
            placeholder="$ 00"
            className="input input-bordered rounded-sm w-full max-w-xs"
          />
          {errors?.resalePrice && (
            <p className="text-red-500">{errors.resalePrice.message}</p>
          )}
        </div>
        {/* year of purchase */}
        <div className="form-control col-span-2 md:col-span-1 w-full max-w-xs">
          <label className="label">
            <span className="label-text">Year of purchase</span>
          </label>
          <input
            {...register("perchaseDate", { required: "Date is required" })}
            type="number"
            placeholder="2020"
            className="input input-bordered rounded-sm w-full max-w-xs"
          />
          {errors?.perchaseDate && (
            <p className="text-red-500">{errors.perchaseDate.message}</p>
          )}
        </div>
        {/* select */}
        <div className="form-control col-span-2 md:col-span-1 rounded-sm w-full max-w-xs">
          <label className="label">
            <span className="label-text">Condition</span>
          </label>
          <select
            {...register("condition", {
              required: "You skip this required field!",
            })}
            className="select select-bordered rounded-sm"
          >
            <option disabled selected>
              Exllent
            </option>
            <option>Good</option>
            <option>Fair</option>
          </select>
          {errors?.condition && (
            <p className="text-red-500">{errors.condition.message}</p>
          )}
        </div>
        {/* name */}
        <div className="form-control col-span-2 md:col-span-1 w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name </span>
          </label>
          <input
            type="text"
            defaultValue={user?.displayName}
            readOnly
            className="input input-bordered rounded-sm w-full max-w-xs"
          />
        </div>
        {/* email */}
        <div className="form-control col-span-2 md:col-span-1 w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email </span>
          </label>
          <input
            type="email"
            readOnly
            defaultValue={user?.email}
            className="input input-bordered rounded-sm w-full max-w-xs"
          />
        </div>
        {/* Mobile */}
        <div className="form-control col-span-2 md:col-span-1 w-full max-w-xs">
          <label className="label">
            <span className="label-text">Mobile </span>
          </label>
          <input
            type="number"
            {...register("mobile", { required: "Add Your phone number!" })}
            placeholder="+880 123456789"
            className="input input-bordered rounded-sm w-full max-w-xs"
          />
          {errors?.mobile && (
            <p className="text-red-500">{errors.mobile.message}</p>
          )}
        </div>
        {/* description */}
        <div className="form-control col-span-2 md:col-span-1 w-full max-w-xs">
          <label className="label">
            <span className="label-text">Details</span>
          </label>
          <textarea
            className="border-2 "
            {...register("description", {
              required: "Add a Short description!!",
            })}
            cols="30"
            rows="7"
          ></textarea>
          {errors?.description && (
            <p className="text-red-500">{errors.description.message}</p>
          )}
        </div>
        {/* location and image */}
        <div className="grid grid-cols-1 md:col-span-1 col-span-2">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Location </span>
            </label>
            <input
              type="text"
              {...register("location", { required: "Add Your Location!" })}
              placeholder="Your location"
              className="input input-bordered rounded-sm w-full max-w-xs"
            />
            {errors?.location && (
              <p className="text-red-500">{errors.location.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Add a photo</span>
            </label>
            <input
              type="file"
              {...register("photo", {
                required: "upload your car photo here!",
              })}
              className="file-input file-input-primary file-input-md w-full max-w-xs"
            />
            {errors?.photo && (
              <p className="text-red-500">{errors.photo.message}</p>
            )}
          </div>
        </div>

        <div className="col-span-2 flex justify-center">
          <button className="btn btn-primary text-white w-[300px]">
            Post Ad
          </button>
        </div>
      </form>
      <Toaster />
    </div>
  );
};

export default AddProduct;
