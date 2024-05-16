import css from "../../components/header/Header.module.css";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";

import { Avatar } from "@chakra-ui/react";

const Header = ({ isAuthenticated }) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header>
      <div className={css.headerContainer}>
        <div className={css.headerLogo}></div>
        {isAuthenticated && (
          <div className={css.userLogout}>
            <div className={css.user}>
              <Avatar
                name="User"
                borderRadius="50%"
                backgroundColor="lightgrey"
                height="32px"
                width="32px"
              />
            </div>
            <div className={css.userName}>User Name</div>
            <div className={css.vector}></div>
            <div className={css.logout} onClick={handleLogout}>
              Exit
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
