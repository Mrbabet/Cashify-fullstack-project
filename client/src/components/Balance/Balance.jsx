import {
  Input,
  Text,
  Box,
  Button,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { updateUserBalance } from "../../redux/transactions/operations";
import { selectBalance } from "../../redux/transactions/selectors";

const Balance = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const flexDirection = useBreakpointValue({ base: "column", md: "row" });
  const inputButtonWidth = useBreakpointValue({ base: "100%", md: "auto" });

  const currentBalance = useSelector(selectBalance);
  const [balance, setBalance] = useState(user.balance);

  // Sync local balance state with Redux store balance
  useEffect(() => {
    setBalance(currentBalance);
  }, [currentBalance]);

  console.log(currentBalance);

  const handleChange = (e) => {
    setBalance(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserBalance(Number(balance))); // Use local balance state
  };

  return (
    <Flex
      gap={4}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={flexDirection}
      m={["0 auto", "unset", "unset", "0 auto"]}
    >
      <Flex
        onSubmit={handleSubmit}
        justifyContent={"center"}
        alignItems={"center"}
        as={"form"}
        flexDirection={flexDirection}
        gap={4}
      >
        <Flex>
          <Text>Balance:</Text>
        </Flex>
        <Flex gap={[0, 0, 4]}>
          <Input
            borderRadius={["20px 0 0 20px", "20px 0 0 20px", "15px"]}
            type="text"
            width={inputButtonWidth}
            value={balance}
            onChange={handleChange}
            variant={"outline"}
            borderWidth={"2px"}
            h={"44px"}
            minW={"142px"}
            borderColor={"white"}
          />
          <Button
            borderRadius={["0 20px 20px 0", "0 20px 20px 0", "15px"]}
            width={inputButtonWidth}
            borderWidth={"2px"}
            variant={"outline"}
            h={"44px"}
            minW={"142px"}
            _hover={{ bg: "#FF751D", color: "white" }}
            borderColor={"white"}
            textTransform={"uppercase"}
            type="submit"
          >
            Confirm
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Balance;
