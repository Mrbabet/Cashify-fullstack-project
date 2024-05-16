import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Background from "../background/Background";

const Layout = ({ isAuthenticated = false }) => {
  return (
    <Background isAuthenticated={isAuthenticated}>
      <Header isAuthenticated={isAuthenticated} />
      <Outlet />
    </Background>
  );
};

Layout.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default Layout;
