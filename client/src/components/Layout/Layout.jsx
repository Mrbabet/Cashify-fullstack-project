import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Background from "../background/Background";

const Layout = ({ isAuthenticated }) => {
  return (
    <Background isAuthenticated={isAuthenticated}>
      <Header />
      <Outlet />
    </Background>
  );
};

Layout.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default Layout;
