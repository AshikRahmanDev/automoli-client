import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="bg-accent h-[100vh] md:flex items-center justify-center">
      <div className="md:w-[70%] md:flex items-center justify-between">
        <div className="text-center">
          <h1 className="text-9xl font-semibold text-primary">404</h1>
          <h4 className="text-white text-2xl font-semibold">Page not Found</h4>
          <Link
            to={"/"}
            className="btn btn-outline btn-primary btn-sm btn-wide my-3"
          >
            Go Home
          </Link>
        </div>
        <img
          className="w-[500px]"
          src="https://i.ibb.co/c6WvT9h/3828537-removebg.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default ErrorPage;
