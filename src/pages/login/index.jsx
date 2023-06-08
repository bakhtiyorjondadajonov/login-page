import React, { useContext, useState } from "react";
import { ReactComponent as Cart } from "../../assets/cart.svg";
import { useNavigate } from "react-router-dom";

import Wrapper from "./style";
import { MainButton } from "../../components/button/style";
import { notification } from "antd";

import { AuthContext } from "../../auth";

const notifyError = (message) => {
  return notification.error({ message, placement: "top" });
};
function Login() {
  // Define a variable `navigator` using the `useNavigate` hook from a react router dom
  const navigator = useNavigate();
  //Define certain variables to manage validation and user input
  const { authData, setAuthed } = useContext(AuthContext);
  const [isPswWrong, setIsPswWrong] = useState(false);
  const [userData, setUserData] = useState({
    userName: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    // If the input field is the username field, update the `userName` property in the `userData` state
    if (name === "userName") {
      setUserData((prev) => {
        return { ...prev, userName: value };
      });
    }
    // If the input field is the password field, validate the password and update the `password` property in the `userData` state
    if (name === "password") {
      const regex = /^(?=.*[a-z])(?=.*\d).+$/;
      regex.test(value) ? setIsPswWrong(false) : setIsPswWrong(true);
      setUserData((prev) => {
        return { ...prev, password: value };
      });
    }
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    // If the password is invalid, return and do not proceed with authentication
    if (isPswWrong) return;
    // If the provided username or password does not match the authentication data,
    // display an error message and do not proceed with authentication
    if (
      userData.userName !== authData.userName ||
      userData.password !== authData.password
    ) {
      return notifyError("The provided username or password is wrong!");
    }
    setAuthed(true);
    navigator("/");
  };
  return (
    <Wrapper>
      <Wrapper.Container onSubmit={handleOnSubmit}>
        <Cart />
        <Wrapper.InputContainer>
          <Wrapper.InputWrapper>
            <Wrapper.Input
              required
              name="userName"
              onChange={(e) => handleOnChange(e)}
              value={userData.userName}
              type="email"
              placeholder="username"
            />
            <Wrapper.UserIcon />
          </Wrapper.InputWrapper>
          <Wrapper.InputWrapper>
            <Wrapper.Input
              required
              name="password"
              onChange={(e) => handleOnChange(e)}
              value={userData.password}
              type="password"
              placeholder="password"
            />
            <Wrapper.LockIcon />
          </Wrapper.InputWrapper>
          {isPswWrong && <Wrapper.Warning>Wrong Combination!</Wrapper.Warning>}
        </Wrapper.InputContainer>
        <Wrapper.ButtonContainer>
          <MainButton>Login</MainButton>
          <Wrapper.ForgotPsw>Forgot password?</Wrapper.ForgotPsw>
        </Wrapper.ButtonContainer>
      </Wrapper.Container>
    </Wrapper>
  );
}

export default Login;
