import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const user = localStorage.getItem("admin_user");
  if (!user) {
    return <Navigate to="/admin/login" replace />;
  }
  return children;
}

export default PrivateRoute;
