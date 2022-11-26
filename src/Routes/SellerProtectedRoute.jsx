import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import useSeller from "../Hooks/useSeller";
import Loading from "../Pages/Shared/Loading";

const SellerProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isSeller, isSellerLoading] = useSeller(user?.email);

  if (loading || isSellerLoading) {
    return <Loading />;
  }

  if (user && isSeller) {
    return children;
  }
};

export default SellerProtectedRoute;
