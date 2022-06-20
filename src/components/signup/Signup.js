
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, Link } from "react-router-dom";
import { ReactNode } from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const Signup = () => {
  const form = useRef();
  // const NavigateRouter = useNavigate();
  const[isview,setIsView]=useState(true)
  const [showPassword, setShowPassword] = useState(false);
  const NavigateRouter = useNavigate();
  // const changeIcon=()=>{
  //   setIsView(!isview)
  // }
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {

    if (data.username === "" || data.password === "" || data.email === "") {
      toast.error("fail", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      toast.success("success", {
        position: toast.POSITION.TOP_CENTER,
      });
      NavigateRouter("/home");
    }
    reset();
    emailjs
    .sendForm(
      "service_nsbk4hi",
      "template_3vv2ghn",
      form.current,
      "8gJyNh8XJZ_ggMyTZ"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <div>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack
          spacing={8}
          mx={"auto"}
          maxW={"lg"}
          py={12}
          px={6}
          // border={"1px solid grey"}
        >
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Sign up
            </Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <form onSubmit={handleSubmit(onSubmit)} ref={form}>
              {/* <FormControl > */}
       
              {/* {errors.username && <Text >must be filled</Text>} */}
              {/* </FormControl> */}
              <br />
              <div>
                {/* <label>password</label>
                <input {...register("password")} /> */}

                {/* <input {...register("password", {required: true , pattern: /\d+/ })}  /> */}
                {/* {errors.password && <Text>password must be in number</Text>} */}
              </div>
              <br />
              <FormControl name='username' id='username'>
              <label>username</label>
                <input {...register("username")}  />
              </FormControl>
              {/* <FormControl >
              <label>password</label>
                <input {...register("password")} />
                
              </FormControl> */}
                          <FormControl >
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? "text" : "password"} />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <div>
              <FormControl >
              <label>email</label>
                <input {...register("email")} />
              </FormControl>
                {/* <label>email</label>
                <input {...register("email")} /> */}

                {/* <input {...register("email", { required: true })} /> */}
                {/* {errors.email && <Text>must contain @ </Text>} */}
              </div>
              {/* <br /> */}

              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user?{" "}
                  <Link to="/signin" color={"blue.400"}>
                    Login
                  </Link>
                </Text>
              </Stack>

              <input type="submit" />
              <ToastContainer />
            </form>

            {/* <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? "text" : "password"} />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={()=>NavigateRouter('/home')}
                >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user? <Link color={"blue.400"}>Login</Link>
                </Text>
              </Stack>
            </Stack> */}
          </Box>
        </Stack>
      </Flex>
    </div>
  );
};

export default Signup;