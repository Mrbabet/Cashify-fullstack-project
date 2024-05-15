import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ Component, redirecTo }) {
  const { isLoggedIn, isRegistred } = useAuth();
  if (isRegistred) {
    return isRegistred ? Component : <Navigate to={redirecTo} />;
  }
  return isLoggedIn ? Component : <Navigate to={redirecTo} />;
}
