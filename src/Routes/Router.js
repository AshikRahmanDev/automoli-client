import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Root from "../Layout/Root";
import AllBuyer from "../Pages/Admin/AllBuyer";
import AllSeller from "../Pages/Admin/AllSeller";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddProduct from "../Pages/Seller/AddProduct";
import MyAds from "../Pages/Seller/MyAds";
import PrivetRoute from "./PrivetRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register></Register> },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivetRoute>
        <DashboardLayout />
      </PrivetRoute>
    ),
    children: [
      { path: "/dashboard/", element: <AddProduct /> },
      { path: "/dashboard/myads", element: <MyAds /> },
      { path: "/dashboard/allseller", element: <AllSeller /> },
      { path: "/dashboard/allbuyer", element: <AllBuyer /> },
    ],
  },
]);
