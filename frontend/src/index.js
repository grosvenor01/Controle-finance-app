import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import ProfilePage from "./Components/Profile";
import Dashboard from "./Pages/Dashboard";
import Sidebar from "./Pages/Dashboard/Sidebar";
import Navbar from "./Pages/Dashboard/Navbar";

import Courses from "./Components/Courses/Courses";
import HireExpert from "./Components/HireExpert/HireExpert";
import AllPlans from "./Components/Plans/AllPlans";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/Plans",
    element: <AllPlans />,
  },
  {
    path: "/dashboard/",
    element: (
      <div className="flex">
        <Sidebar />
        <div className="flex-[5] flex flex-col ml-[13rem]">
          <Navbar />
          <Outlet />
        </div>
      </div>
    ),
    children: [
      {
        path: "home",
        element: <Dashboard />,
      },
      {
        path: "investing",
        element: <div>Investing</div>,
      },
      {
        path: "hire-expert",
        element: <HireExpert />,
      },
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "support",
        element: <div>Support</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
