import { Image, Text, Box, Center, Button, ButtonGroup } from "@chakra-ui/react";
const Error = () => {
  return (
    <div>
      <Center p={6}>
        <Box
          maxW={"440px"}
          w={"full"}
          // bg={useColorModeValue('white', 'gray.900')}
          boxShadow={"2xl"}
          rounded={"lg"}
          p={6}
          textAlign={"center"}
          alignItems='center'
          justifyContent={'center'}
        >
          {/* <Image
            boxSize="360px"
            src="https://i1.wp.com/uxdworld.com/wp-content/uploads/2019/01/404-banner.jpg?resize=696%2C214&ssl=1"
            alt="error page"
          /> */}
          <Text>404 PAGE ERROR</Text>
          <ButtonGroup>
          <Button>Home</Button>
          <Button>Contact Us</Button>


          </ButtonGroup>
        </Box>
      </Center>

      {/* https://media.istockphoto.com/vectors/error-404-vector-id538038858 */}
    </div>
  );
};

export default Error;
