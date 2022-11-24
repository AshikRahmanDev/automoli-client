import React, { useContext, useState } from "react";
import { GiCarWheel } from "react-icons/gi";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/AuthProvider";

const Login = () => {
  const [error, setError] = useState(null);
  const { login } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();

  // handle form values and login
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    login(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError(null);
      })
      .catch((err) => setError(err.message));
  };
  return (
    <div className="flex items-center justify-center h-[80vh] ">
      <div className="grid grid-cols-5 w-[75%] h-[70vh] mx-auto overflow-hidden shadow-2xl rounded-3xl">
        <div className="bg-primary flex items-center h-[70vh] justify-center col-span-2">
          <div>
            <GiCarWheel className="text-9xl mx-auto text-white " />
            <div>
              <h1 className="text-center text-2xl font-bold text-white">
                Automoli
              </h1>
              <p className="text-white w-[80%] mx-auto text-center">
                Join Automoli for sell or buy used car in best price.
              </p>
            </div>
          </div>
        </div>
        {/* form */}
        <div className="col-span-3 p-4">
          <h4 className="text-center text-3xl font-bold">
            L<GiCarWheel className="inline w-[20px] text-primary" />
            gin
          </h4>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-[60%] mx-auto mt-4"
          >
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold text-lg">Email</span>
              </label>
              <input
                type="email"
                {...register("email")}
                placeholder="Enter Your Email"
                className="input input-bordered rounded-md w-full "
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
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
            <div>
              {error && <p className="text-red-500">{error}</p>}
              <input
                className="btn btn-primary w-full text-white mt-6"
                type="submit"
                value="Login"
              />
              <p className="mt-1">
                New in Automoli?{" "}
                <Link to={"/register"} className="text-primary">
                  Register
                </Link>
              </p>
            </div>
            <div>
              <p className="text-center">---- or ----</p>
              <Link className="btn btn-outline btn-primary w-full flex items-center">
                <FcGoogle className="mx-1" />
                Login with Google
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
