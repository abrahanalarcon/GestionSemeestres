import { Navigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";


export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/loginform" replace />;
}
