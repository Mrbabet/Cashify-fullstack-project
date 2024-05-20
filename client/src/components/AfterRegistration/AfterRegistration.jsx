import { Box, Flex, calc } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const afterRegistration = () => {
  return (
    <Flex
      justify="center"
      align="center"
      w="100%"
      h={"90vh"}
      zIndex="1001"
      bg={"white"}
      position="absolute"
    >
      <Box
        textAlign="center"
        backgroundColor="white"
        borderRadius="30px"
        fontSize="15px"
        minWidth="250px"
        padding="30px 5px"
        border={"1px solid black"}
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
        <Box>
          {" "}
          <Link to={"/welcome"}> Go back to login</Link>
        </Box>
      </Box>
    </Flex>
  );
};

export default afterRegistration;
