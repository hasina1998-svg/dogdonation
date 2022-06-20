import React from "react";
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  HStack,
  useBreakpointValue,
  Divider,
} from "@chakra-ui/react";
import SearchBar from "../searchBar/SearchBar";
import dog1 from '../../components/images/dog1.png'
import Donate from "../donate/Donate";

const Banner = () => {
  return (
    <Flex
      w={"full"}
      h={"700px"}
      backgroundImage={
        "url(https://metro.co.uk/wp-content/uploads/2018/11/sei_38602094-3937.jpg?quality=90&strip=all)"
      }
      backgroundSize={"cover"}
      objectFit={'cover'}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <HStack justifyContent={'space-around'} spacing={200}>
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          >
            Will you save me?
          </Text>
       {/* donate button starts here */}
          <Donate/>
           {/* donate button sends here */}
          {/* <SearchBar/> */}
          </HStack>
        </Stack>
      </VStack>
    </Flex>
  );
};

export default Banner;
