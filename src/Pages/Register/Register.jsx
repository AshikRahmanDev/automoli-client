import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/AuthProvider";

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  //   handle form values
  const onSubmit = (data) => {
    const name = data.name;
    const email = data.email;
    const role = data.role;
    const password = data.password;
    const confirm = data.confirm;
    // verify password
    if (password !== confirm) {
      return setError("password should be same!!");
    }
    setError(null);
    const img = data.image[0];
    const formData = new FormData();
    formData.append("image", img);
    const user = {
      name,
      email,
      role,
    };

    // upload image in imgbb
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_ImgBB_key}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.success) {
          //   create user
          createUser(email, password)
            .then((result) => {
              const user = result.user;
              //   update user
              if (user?.uid) {
                const profile = {
                  displayName: name,
                  photoURL: data.data.url,
                };
                updateUser(profile)
                  .then((result) => {
                    console.log(result);
                    navigate("/");
                  })
                  .catch((err) => console.log(err));
              }
            })
            .catch((err) => setError(err.massage));
        }
      });
  };

  return (
    <div className="flex items-center justify-center h-[80vh] ">
      <div className="grid grid-cols-5 w-[65%] h-[75vh] mx-auto overflow-hidden shadow-2xl rounded-3xl">
        {/* form */}
        <form onSubmit={handleSubmit(onSubmit)} className="col-span-5 p-4">
          <h4 className="text-center text-3xl font-bold">Register</h4>
          <div
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-2 gap-4 w-[70%] mx-auto mt-4"
          >
            <div className="form-control w-full">
              <label className="label py-1">
                <span className="label-text font-semibold text-lg">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: "Name is Required" })}
                placeholder="Enter Your Full Name"
                className="input input-bordered rounded-md w-full "
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label py-1">
                <span className="label-text font-semibold text-lg">Email</span>
              </label>
              <input
                type="email"
                {...register("email")}
                placeholder="Email"
                className="input input-bordered rounded-md w-full "
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label py-1">
                <span className="label-text font-semibold text-lg">Photo</span>
              </label>
              <input
                type="file"
                {...register("image")}
                className="file-input  file-input-primary w-full max-w-xs"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label py-1">
                <span className="label-text font-semibold text-lg">Role</span>
              </label>
              <select
                {...register("role")}
                className="select select-bordered w-full max-w-xs"
              >
                <option selected>User</option>
                <option>Seller</option>
              </select>
            </div>
            {/* password */}
            <div className="form-control w-full">
              <label className="label py-1">
                <span className="label-text font-semibold text-lg">
                  Password
                </span>
              </label>
              <input
                type="password"
                {...register("password")}
                placeholder="Password"
                className="input input-bordered rounded-md w-full "
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label py-1">
                <span className="label-text font-semibold text-lg">
                  Confirm
                </span>
              </label>
              <input
                type="password"
                {...register("confirm")}
                placeholder="Confirm"
                className="input input-bordered rounded-md w-full "
                required
              />
            </div>
          </div>
          <div className="w-[400px] mx-auto mt-1">
            {/* <Link className="btn btn-primary w-full text-white mt-6">
              Register
            </Link> */}
            <p className="text-red-500 text-center">{error}</p>
            <input
              type="submit"
              className="btn btn-primary w-full text-white mt-2"
              value="Register"
            />
            <p className="mt-1 text-center">
              Already have an Account?{" "}
              <Link to={"/login"} className="text-primary">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
