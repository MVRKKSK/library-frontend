import React from "react";
import Cart from "./pages/Cart";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from "./components/authentication/login";
import Signup from "./components/authentication/signup";
import { LoggedInRoutes } from "./routes/LoggedInRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoggedInRoutes />,
  },
  {
    path: "/",
    element: <Cart />,
  },   
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

export const App = () => {
  return (
    <RouterProvider router={router} />
  );
};


