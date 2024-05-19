import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

export default function AfterRegisterRoute({ Component, redirectTo }) {
  const { isRegistred } = useAuth();
  return !isRegistred ? Component : <Navigate to={redirectTo} />;
}
