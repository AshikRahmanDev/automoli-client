import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="bg-accent h-[100vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-8xl font-semibold text-primary">404</h1>
        <h4 className="text-white text-2xl font-semibold">Page not Found</h4>
        <Link
          to={"/"}
          className="btn btn-outline btn-primary btn-sm btn-wide my-3"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
