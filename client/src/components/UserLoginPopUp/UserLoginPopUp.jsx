import React, { useEffect, useState } from "react";
import {
  Box,
  Popover,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
Text,
useBreakpointValue
} from "@chakra-ui/react";

const Tooltip = ({ message1, message2, userLoginCount}) => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    if (userLoginCount === 1) {
      setIsVisible(true);
    }
  }, [userLoginCount]);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isMobile && isVisible && (
        <Box position="relative">
          <Popover  isOpen={true} placement="bottom" closeOnBlur={false}>
            <PopoverContent  bg="#1D346A" color="white" p={'30px'} width="288px" h={'163px'} mt="50px" borderRadius={'30px'}> 
              <PopoverArrow w={'10px'} h={'10px'} bg="#1D346A"  top={'-35px'} transform="rotate(45deg)"  position={'relative'} />
              <PopoverCloseButton onClick={handleClose} />
              <PopoverBody fontSize="12px" fontWeight="400" textAlign="left">
                <Text>{message2}</Text>
                <Text>{message1}</Text>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Box>
      )}
    </>
  );
};

export default Tooltip;
