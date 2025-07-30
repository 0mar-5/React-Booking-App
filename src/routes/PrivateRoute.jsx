import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useEffect, useRef } from "react";

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const location = useLocation();
  const toastShownRef = useRef(false);

  useEffect(() => {
    if (!isLoggedIn && !toastShownRef.current) {
      toast.error("You must be logged in to access this page.");
      toastShownRef.current = true;
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
