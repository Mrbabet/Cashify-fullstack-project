import React from "react";
import css from "../../components/header/Header.module.css";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";

import {
  AlertDialog,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

function ModalComponent() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    onClose();
  };

  return (
    <>
      <div className={css.logout} onClick={onOpen}>
        Exit
      </div>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Do you really want to leave?
            </AlertDialogHeader>

            <AlertDialogFooter>
              <Button colorScheme="green" onClick={handleLogout}>
                Yes
              </Button>
              <Button colorScheme="red" onClick={onClose} ml={3}>
                No
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

export default ModalComponent;
