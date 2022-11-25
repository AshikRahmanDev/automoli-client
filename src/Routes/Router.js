import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Root from "../Layout/Root";
import AllSeller from "../Pages/Admin/AllSeller";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddProduct from "../Pages/Seller/AddProduct";
import MyAds from "../Pages/Seller/MyAds";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register></Register> },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { path: "/dashboard/", element: <AddProduct /> },
      { path: "/dashboard/myads", element: <MyAds /> },
      { path: "/dashboard/allseller", element: <AllSeller /> },
    ],
  },
]);
