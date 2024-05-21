import React, { useState } from "react";
import kapustaLogo from "../../assets/logo.svg";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import logout from "../../assets/logout 1.svg";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../redux/auth/operations";
import { useAuth } from "../../hooks/useAuth";
import LogoutModal from "../LogoutModal/LogoutModal"; // Import LogoutModal component

const UserHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoggedIn } = useAuth();
  const isWideScreen = useBreakpointValue({ base: false, md: true });

  // State to manage the visibility of the logout modal
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const handleLogout = () => {
    // Open the logout modal instead of directly logging out
    setIsLogoutModalOpen(true);
  };

  const handleConfirmLogout = () => {
    try {
      dispatch(logoutUser());
      navigate("/welcome");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <>
      <Flex h="56px" alignItems={"center"} as="header">
        <Image src={kapustaLogo} alt="Kapusta logo" mr="auto" />
        {isLoggedIn && (
          <>
            <Avatar name={user.email} size="sm" marginInline="8px" bg="gray" />
            {isWideScreen && <Text>{user.email}</Text>}
            <Button onClick={handleLogout} bg={"transparent"}>
              {isWideScreen ? "Exit" : <Image src={logout} alt="Logout icon" />}
            </Button>
          </>
        )}
      </Flex>
      {isLogoutModalOpen && (
        <LogoutModal
          isOpen={isLogoutModalOpen}
          onClose={() => setIsLogoutModalOpen(false)}
          onConfirm={handleConfirmLogout}
        />
      )}
    </>
  );
};

export default UserHeader;
