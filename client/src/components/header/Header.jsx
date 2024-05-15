import css from "../../components/header/Header.module.css";
import { Avatar } from "@chakra-ui/react";

const Header = () => {
  return (
    <header>
      <div className={css.headerContainer}>
        <div className={css.headerLogo}></div>
        <div className={css.userLogout}>
          <div className={css.user}>
            <Avatar
              name="User"
              src="https://bit.ly/broken-link"
              borderRadius="50%"
              backgroundColor="lightgrey"
              height="32px"
              width="32px"
            />
          </div>
          <div className={css.logout}></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
