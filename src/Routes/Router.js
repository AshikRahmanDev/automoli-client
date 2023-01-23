import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Root from "../Layout/Root";
import AllBuyer from "../Pages/Admin/AllBuyer";
import AllSeller from "../Pages/Admin/AllSeller";
import Blog from "../Pages/Blog/Blog";
import Cars from "../Pages/Cars/Cars";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import MyBooking from "../Pages/My Booking/MyBooking";
import Payment from "../Pages/Payment/Payment";
import Register from "../Pages/Register/Register";
import AddProduct from "../Pages/Seller/AddProduct";
import MyAds from "../Pages/Seller/MyAds";
import ErrorPage from "../Pages/Shared/ErrorPage";
import AdminProtectedRoute from "./AdminProtectedRoute";
import PrivetRoute from "./PrivetRoute";
import SellerProtectedRoute from "./SellerProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/blog", element: <Blog /> },
      { path: "/register", element: <Register></Register> },
      {
        path: "/brand/cars/:brandName",
        loader: ({ params }) =>
          fetch(
            `https://automoli-server-mohammdashik.vercel.app/brand/cars/${params.brandName}`
          ),
        element: (
          <PrivetRoute>
            <Cars />
          </PrivetRoute>
        ),
      },
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
      { path: "/dashboard/", element: <MyBooking /> },
      {
        path: "/dashboard/addpost",
        element: (
          <SellerProtectedRoute>
            <AddProduct />
          </SellerProtectedRoute>
        ),
      },
      {
        path: "/dashboard/myads",
        element: (
          <SellerProtectedRoute>
            <MyAds />
          </SellerProtectedRoute>
        ),
      },
      {
        path: "/dashboard/allseller",
        element: (
          <AdminProtectedRoute>
            <AllSeller />
          </AdminProtectedRoute>
        ),
      },
      {
        path: "/dashboard/allbuyer",
        element: (
          <AdminProtectedRoute>
            <AllBuyer />
          </AdminProtectedRoute>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        loader: ({ params }) =>
          fetch(
            `https://automoli-server-mohammdashik.vercel.app/bookings/${params.id}`
          ),
        element: <Payment />,
      },
    ],
  },
  { path: "*", element: <ErrorPage /> },
]);
