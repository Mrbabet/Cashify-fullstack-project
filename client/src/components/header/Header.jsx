import css from "../../components/header/Header.module.css";
import LogoutModal from "./LogoutModal"; // Import your modal component here
import { ChakraProvider } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";

const Header = ({ isAuthenticated }) => {
  return (
    <ChakraProvider>
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
              <LogoutModal />
            </div>
          )}
        </div>
      </header>
    </ChakraProvider>
  );
};

export default Header;
