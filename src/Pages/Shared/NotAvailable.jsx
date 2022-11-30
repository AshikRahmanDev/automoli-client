import React from "react";

const NotAvailable = ({ children }) => {
  return (
    <div className="w-full h-[90vh] bg-accent flex items-center justify-center">
      {children}
    </div>
  );
};

export default NotAvailable;
