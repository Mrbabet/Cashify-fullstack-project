import { Box, Flex } from "@chakra-ui/react";
import React from "react";

const afterRegistration = () => {
  return (
    <Flex
      justify="center"
      align="center"
      w="100%"
      h="100%"
      zIndex="1001"
      position="absolute"
    >
      <Box
        textAlign="center"
        backgroundColor="white"
        borderRadius="30px"
        fontSize="15px"
        minWidth="250px"
        padding="30px 5px"
        sx={{
          "@media screen and (min-width: 768px)": {
            transform: "scale(1.5)",
          },
          "@media screen and (min-width: 1280px)": {
            transform: "scale(1.7)",
          },
        }}
      >
        We have send you a verification link
        <br /> Please check your email
      </Box>
    </Flex>
  );
};

export default afterRegistration;
