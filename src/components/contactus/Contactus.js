import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Contactus = () => {
    const [message,setMessage]=useState('')
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const onSubmit = (data) => {
    console.log(data.message);
    setMessage(data.message)
    reset()
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex
        minH={"100vh"}
        // minW={'100%'}

        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="username">
                <FormLabel>username</FormLabel>
                <Input type="text"  {...register('username')}/>
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email"  {...register('email')}/>
              </FormControl>
              <FormControl id="message">
                <FormLabel>message</FormLabel>
                <Input type="text" {...register('message')}/>
              </FormControl>

              <Stack spacing={10}>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  type='submit'
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Send Message
                </Button>
              </Stack>
            </Stack>
          </Box>



          <Box 
          h={'500px'}
          minW={"20vw"}
          boxSize={'250px'}
          shadow={'lg'}>
          <p>{message}</p>

          </Box>
         
        </Stack>
      </Flex>
     
    </form>
  );
};

export default Contactus;
