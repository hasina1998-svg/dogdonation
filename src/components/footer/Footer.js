import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,

} from "@chakra-ui/react";

import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import footerData from "./footerData";

import { Link as RouterLink } from "react-router-dom";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"800"} fontSize={"2xl"} mb={2}>
      {children}
    </Text>
  );
};

const Footer = () => {
  return (
    <Box
      // bg={useColorModeValue("gray.50", "gray.900")}
      // color={useColorModeValue("gray.700", "gray.200")}
      color="white"
      bg="black"
    >
      <Container as={Stack} maxW={"10xl"} py={10} fontSize={"xl"}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={"flex-start"}>
            <ListHeader>Contact us</ListHeader>
            <Text>Address:Kathmandu</Text>\<Text>Phone:0000000000</Text>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>About</ListHeader>
            {footerData.map((item, index) => {
              return (
                <>
                  <RouterLink to={item.path}>
                    <Text>{item.name}</Text>
                  </RouterLink>
                </>
              );
            })}
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Follow us</ListHeader>

            <Link href={"https://www.facebook.com/login/"}>
              <FacebookIcon />
            </Link>
            <Link href={"#"}>
              <YouTubeIcon />
            </Link>
            <Link href={"#"}>
              <TwitterIcon />
            </Link>
            <Link href={"#"}>
              <LinkedInIcon />
            </Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>
              <RouterLink to="/" pt={2} textAlign={"center"}>
                © 2022 Dog Donation. All rights reserved
              </RouterLink>
            </ListHeader>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={10}></Box>
    </Box>
  );
};
export default Footer;
