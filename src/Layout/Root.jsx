import React from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Header from "../Pages/Shared/Header";

const Root = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Toaster />
      <Footer />
    </div>
  );
};

export default Root;
