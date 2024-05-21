import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  useDisclosure,
  Button
} from '@chakra-ui/react';
import { useRef } from 'react';

const LogoutModal = ({ isOpen, onClose, onConfirm, onCancel }) => {
  const finalRef = useRef(null);

  const handleConfirm = () => {
    // Execute the logout operation
    onConfirm();
    // Close the modal
    onClose();
  };

  return (
    <Modal finalFocusRef={finalRef} isOpen={isOpen} >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Do you really want to leave?</ModalHeader>
        <ModalFooter>
          <Button variant="ghost" onClick={handleConfirm}>
            Yes
          </Button>
          <Button variant="ghost" onClick={onClose}>
            No
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default LogoutModal;
