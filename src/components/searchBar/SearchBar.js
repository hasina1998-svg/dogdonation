import React from "react";
import {
  Box,
  HStack,
  Input,
  Stack,
  InputGroup,
  InputLeftElement,
  VStack,
  Select,
  Button,
  InputRightElement,
  Divider,
} from "@chakra-ui/react";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
 
import { useState } from "react";
import "./searchBar.css";

const SearchBar = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Stack spacing={14} p={2} weight={"100%"}>
      <HStack>
        <div className="searchbar-container">
          <InputGroup
            w={{ base: "25%", md: "30%", lg: "40%", xl: "40%" }}
            fontSize={{ base: "10px", md: "20px", lg: "40px", xl: "40px" }}
            display={{ base: "none", md: "flex", lg: "flex", xl: "flex" }}
          >
            <InputLeftElement
              pointerEvents="none"
              color={"grey"}
              children={<LocationOnIcon color="gray.700" />}
            />
            <Input  focusBorderColor='none' placeholder="location" />
            <InputRightElement width="4.5rem">
              <Button
                h="1.75rem"
                size="sm"
                onClick={handleClick}
                bg={"transparent"}
              >
                {show ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
         
          <Divider orientation="vertical" colorScheme={'red'}/>

          <InputGroup  
            w={{ base: "100%", md: "100%", lg: "60%", xl: "60%" }}
            fontSize={{ base: "10px", md: "20px", lg: "40px", xl: "40px" }}
          >
            <InputLeftElement
              pointerEvents="none"
              color={"grey"}
              children={<SearchIcon  color="gray.700" />}
            />
            <Input
            focusBorderColor='none'
              fontSize={"20px"}
              placeholder="Search for restaurant or dish.."
            />
          </InputGroup>
        </div>
      </HStack>
    
    </Stack>
  );
};

export default SearchBar;
