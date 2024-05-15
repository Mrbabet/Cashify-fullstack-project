import { useSelector } from "react-redux";
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRegistered,
} from "../redux/auth/selectors";

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const isRegistred = useSelector(selectIsRegistered);

  return {
    isLoggedIn,
    user,
    isRegistred,
  };
};
