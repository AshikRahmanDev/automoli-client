import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/AuthProvider";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // handle ad post
  const onPost = (data) => {
    const brand = data.brand;
    const model = data.model;
    const price = data.price;
    const perchaseDate = data.perchaseDate;
    const condition = data.condition;
    const description = data.description;
    const location = data.location;
    const image = data.photo;
    console.log(
      brand,
      model,
      price,
      perchaseDate,
      condition,
      description,
      location,
      image
    );
  };
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-1">Fill in the details</h3>
      <hr />
      <form
        onSubmit={handleSubmit(onPost)}
        className="w-[80%] mx-auto grid grid-cols-2 gap-4 mt-5"
      >
        <div className="form-control w-full max-w-xs">
          {/* brand */}
          <label className="label">
            <span className="label-text">Brand </span>
          </label>
          <input
            {...register("brand", { required: "Brand is required" })}
            type="text"
            placeholder="Brand"
            className="input input-bordered rounded-sm w-full max-w-xs"
          />
          {errors?.brand && (
            <p className="text-red-500">{errors.brand.message}</p>
          )}
        </div>
        {/* model */}
        <div className="form-control w-full max-w-xs">
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
        {/* Price */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Price </span>
          </label>
          <input
            type="number"
            {...register("price", {
              required: "ops! Your forget to add price",
            })}
            placeholder="$ 00"
            className="input input-bordered rounded-sm w-full max-w-xs"
          />
          {errors?.price && (
            <p className="text-red-500">{errors.price.message}</p>
          )}
        </div>
        {/* year of purchase */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Year of purchase</span>
          </label>
          <input
            {...register("perchaseDate", { required: "Date is required" })}
            type="date"
            placeholder="$ 00"
            className="input input-bordered rounded-sm w-full max-w-xs"
          />
          {errors?.perchaseDate && (
            <p className="text-red-500">{errors.perchaseDate.message}</p>
          )}
        </div>
        {/* select */}
        <div className="form-control rounded-sm w-full max-w-xs">
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
        <div className="form-control w-full max-w-xs">
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
        <div className="form-control w-full max-w-xs">
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
        <div className="form-control w-full max-w-xs">
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
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Details</span>
          </label>
          <textarea
            className="border-2"
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
        <div className="grid grid-cols-1">
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
    </div>
  );
};

export default AddProduct;
