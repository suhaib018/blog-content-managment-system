import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
  const token = Cookies.get("token");

  if (!token) {
    // If no token, redirect to the login page
    return <Navigate to="/login" />;
  }

  // If token exists, render the children components
  return children;
};

export default ProtectedRoute;
