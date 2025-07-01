import { Navigate, useLocation } from "react-router-dom";

function PrivateRoutes({ children }) {
  const location = useLocation();

  // Get user data from localStorage
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.email) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
}

export default PrivateRoutes;
