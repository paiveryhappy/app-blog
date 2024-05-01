import "bootstrap/dist/css/bootstrap.min.css";
import { Fragment, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import Navbar from "./Navbar";
import greenCard from "../../assets/images/green-card.jpg";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  Input,
} from "@chakra-ui/react";

function SignUp() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit(values, event) {
    event.preventDefault();
    return new Promise((resolve) => {
      setTimeout(() => {
        axios
          .post("http://localhost:3000/", values)
          .then((res) => console.log(res))
          .catch((errors) => console.log(console.log(errors)));
        reset();
        resolve();
      }, 3000);
    });
  }

  return (
    <>
      <Navbar />
      <section className="flex items-center justify-center h-screen">
        <main className="bg-emerald-50 w-2/4 h-[500px] flex items-center justify-center m-auto rounded-2xl border border-gray-400">
          <div className="w-2/4 float-left bg-cover box-border max-w-full h-[500px]">
            <img
              src={greenCard}
              alt=""
              className="object-cover h-full w-full rounded-l-2xl"
            />
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-2/4 float-right p-12 box-border"
          >
            <h1 className="text-3xl mb-3 text-center">Register Your Account</h1>
            <FormControl isInvalid={errors.username}>
              <FormLabel htmlFor="username">Username</FormLabel>
              <Input
                className="bg-white"
                id="username"
                type="text"
                placeholder="username"
                {...register("username", { required: "กรุณากรอก username" })}
              />
              <FormErrorMessage>
                {errors.username && errors.username.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.email}>
              <FormLabel htmlFor="email">Email address</FormLabel>
              <Input
                className="bg-white"
                id="email"
                type="email"
                placeholder="email"
                {...register("email", { required: "กรุณากรอก email" })}
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.password}>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                className="bg-white"
                id="password"
                type="password"
                placeholder="password"
                {...register("password", { required: "กรุณากรอก password" })}
              />
              <FormErrorMessage>
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>
            <div className="flex items-center justify-evenly my-4">
              <p>
                <Link to="/">
                  <IoMdArrowBack className="inline" /> Back
                </Link>
              </p>
              <Button
                colorScheme="teal"
                isLoading={isSubmitting}
                type="submit"
                className="block"
              >
                Submit
              </Button>
            </div>
          </form>
        </main>
      </section>
    </>
  );
}

export default SignUp;
