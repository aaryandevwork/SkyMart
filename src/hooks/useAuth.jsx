import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { addUser } from "../features/authSlice";

export const useAuth = () => {
  const [registeredUser, setRegisteredUser] = useState(
    JSON.parse(localStorage.getItem("registeredUser")) || [],
  );
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();
  let disptach = useDispatch();

  //login page
  const loginFormSubmit = (data) => {
    let user = registeredUser.find(
      (val) => val.email === data.email && val.password === data.password,
    );

    if (!user) {
      toast.error("user not found..");
      return;
    }

    disptach(addUser(user));
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    toast.success(`Hello ${user.name} , login successfull..`);
    navigate("/main");
  };

  //Register page
  const registerFormSubmit = (data) => {
    const newUser = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    const updatedUser = [...registeredUser, newUser];

    const checkIsUser = isUserAlreadyRegistered(newUser);

    if (checkIsUser) {
      toast.error("user already registered..");
    } else {
      toast.success(`Hello ${newUser.name}..`);
      setRegisteredUser(updatedUser);
      localStorage.setItem("registeredUser", JSON.stringify(updatedUser));
      localStorage.setItem("loggedInUser", JSON.stringify(newUser));

      disptach(addUser(newUser));
    }
  };

  const isUserAlreadyRegistered = (newUser) => {
    return registeredUser.some((user) => user.email === newUser.email);
  };

  return {
    register,
    loginFormSubmit,
    registerFormSubmit,
    errors,
    watch,
    navigate,
    disptach,
    registeredUser,
    setRegisteredUser,
    showPassword,
    setShowPassword,
    handleSubmit,
  };
};
