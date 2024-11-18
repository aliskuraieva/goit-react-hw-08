import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { selectIsLoggedIn } from "../../redux/auth/selectors";

const RestrictedRoute = ({ component: Component, restrictedTo = "/" }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={restrictedTo} /> : Component;
};

export default RestrictedRoute;
