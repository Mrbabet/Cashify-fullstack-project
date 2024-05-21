import {
  Box,
  Flex,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import Balance from "../components/Balance/Balance";
import TransactionManager from "../components/TransactionManager/TransactionManager";
import reportsIcon from "../assets/bar_chart-24px 1.svg";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserBalance } from "../redux/transactions/operations";
import { useAuth } from "../hooks/useAuth";
import { selectLoginCount } from "../redux/auth/selectors";


const Home = () => {
  const dispatch = useDispatch();


  useEffect(() => {
   
     dispatch(getUserBalance());
    
   
  }, [dispatch]);

  const flexDirection = useBreakpointValue({
    base: "column",
    md: "row-reverse",
  });

  const marginBottom = useBreakpointValue({
    base: "32px",
    md: "none",
  });

  return (
    <>
      <Box
        m={"0 auto"}
        maxW={["100%", "100%", "768px", "992px", "1280px"]}
        paddingInline={["20px", "32px", "32px", "90px"]}
      >
        <Flex
          pt={["20px", "32px"]}
          justifyContent={["unset", "space-between"]}
          flexDirection={flexDirection}
        >
          <Link to={"/reports"}>
            <Flex
              justifyContent={"center"}
              alignItems={"center"}
              gap={"8px"}
              marginBottom={marginBottom}
            >
              Reports
              <Image src={reportsIcon} />
            </Flex>
          </Link>
          <Balance />
        </Flex>
        <TransactionManager />
      </Box>
    </>
  );
};

export default Home;
