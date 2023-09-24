import { useSelector } from "react-redux";

import Home from "../pages/home";
import Cart from "../pages/Cart";
import Login from "../components/authentication/login";

export const LoggedInRoutes = () => {
  const { user } = useSelector((state) => ({...state }));

  return user ? (
    <>
      <Home />
      <Cart />
    </>
  ) : (
    <Login />
  );
};
