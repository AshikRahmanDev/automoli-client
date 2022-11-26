import React from "react";
import { HashLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="w-full h-[100vh] bg-accent flex items-center justify-center">
      <HashLoader color="#00b4fc" />
    </div>
  );
};

export default Loading;
