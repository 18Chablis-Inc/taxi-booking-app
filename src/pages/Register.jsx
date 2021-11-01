import React, { useState } from "react";
import {
  Card,
  FlexContainer,
  HeaderText,
  Input,
  Label,
  StyledLink,
  Text,
} from "../style/styled";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [disable, setDisable] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
    setDisable(true);
    setTimeout(function () {
      setDisable(false);
    }, 5000);
  };
  return (
    <>
      <HeaderText
        textTransform="capitalize"
        fontSize="26px"
        marginTop="2em"
        marginBottom="1em"
        Color="#000"
      >
        Login
      </HeaderText>
      <Card
        Width="400px  !important"
        responsiveWidth="280px  !important"
        borderRadius="10px !important"
        Margin="0 auto !important"
        boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
      >
        <form onSubmit={handleRegister}>
          <FlexContainer
            justifyContent="center !important"
            alignItems="center !important"
            marginBottom="1em !important"
          >
            <Label
              responsiveFontSize="14px !important"
              fontSize="16px !important"
              Margin="0 1em 0 0 !important"
            >
              Username :
            </Label>
            <Input
              borderRadius="20px !important"
              Padding="10px 20px !important"
              Width="60% !important"
              responsiveWidth="50% !important"
              Margin=".1em .4em .3em 1.3em !important"
              fontSize="1em"
              type="text"
              Border="1px solid #26272B !important"
              focusBorder="1px solid #484a4f !important"
              autoComplete="off"
              placeholder="user43089"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </FlexContainer>
          <FlexContainer
            justifyContent="center !important"
            alignItems="center !important"
            marginBottom="1em !important"
          >
            <Label
              responsiveFontSize="14px !important"
              fontSize="16px !important"
              Margin="0 1em 0 0 !important"
            >
              Email :
            </Label>
            <Input
              borderRadius="20px !important"
              Padding="10px 20px !important"
              Width="70% !important"
              responsiveWidth="60% !important"
              Margin=".1em .4em .3em 1.3em !important"
              fontSize="1em"
              type="email"
              Border="1px solid #26272B !important"
              focusBorder="1px solid #484a4f !important"
              autoComplete="off"
              placeholder="something@anything.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </FlexContainer>
          <FlexContainer
            justifyContent="center"
            alignItems="center"
            marginBottom="1em"
          >
            <Label
              responsiveFontSize="14px !important"
              fontSize="16px !important"
              Margin="0 1em 0 0 !important"
            >
              Password :
            </Label>
            <Input
              borderRadius="20px !important"
              Width="60% !important"
              Padding="10px 20px !important"
              responsiveWidth="60% !important"
              fontSize="1em"
              autoComplete="off"
              Border="1px solid #26272B !important"
              focusBorder="1px solid #484a4f !important"
              Margin=".1em .6em .3em 1em !important"
              type="password"
              placeholder="**************"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </FlexContainer>
          <FlexContainer
            marginTop="2em"
            marginBottom=".5em"
            alignItems="center"
            justifyContent="center"
          >
            <Input
              Margin="0 .4em"
              borderRadius="20px"
              Padding="10px 30px"
              bgColor="#26272B"
              hoverBgColor="#484a4f"
              Cursor="pointer"
              disableBgColor="gray"
              Border="none"
              Color="#fff"
              Width="80%"
              disabled={disable}
              type="submit"
              value={disable ? "Registering ..." : "Register"}
            />
          </FlexContainer>
          <FlexContainer justifyContent="center">
            <Text fontSize="16px" textAlign="center">
              Already have an account?{" "}
              <StyledLink fontSize="14px" Color="#0a8fff" to="/login">
                Login
              </StyledLink>
            </Text>
          </FlexContainer>
        </form>
      </Card>
    </>
  );
};

export default Register;
