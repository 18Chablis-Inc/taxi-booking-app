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
    <div>
      <HeaderText
        textTransform="capitalize"
        fontSize="26px"
        marginTop="2em"
        marginBottom="1em"
      >
        Register
      </HeaderText>
      <Card
        Width="400px"
        borderRadius="10px"
        Margin="0 auto"
        boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
      >
        <form onSubmit={handleRegister}>
          <FlexContainer
            justifyContent="center"
            alignItems="center"
            marginBottom="1em"
          >
            <Label fontSize="18px" Margin="0 .3em 0 0">
              Username :
            </Label>
            <Input
              borderRadius="20px"
              Padding="10px 20px"
              Margin=".1em .4em .3em .3em"
              type="text"
              Border="1px solid #26272B"
              focusBorder="1px solid #484a4f"
              autoComplete="off"
              placeholder="user8943"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </FlexContainer>
          <FlexContainer
            justifyContent="center"
            alignItems="center"
            marginBottom="1em"
          >
            <Label fontSize="18px" Margin="0 1em 0 0">
              Email :
            </Label>
            <Input
              borderRadius="20px"
              Padding="10px 20px"
              Margin=".1em .4em .3em 1.3em"
              type="email"
              Border="1px solid #26272B"
              focusBorder="1px solid #484a4f"
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
            <Label fontSize="18px" Margin="0 .3em 0 0">
              Password :
            </Label>
            <Input
              borderRadius="20px"
              Padding="10px 20px"
              autoComplete="off"
              Border="1px solid #26272B"
              focusBorder="1px solid #484a4f"
              Margin=".1em .4em .3em .6em"
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
              Have an account already?{" "}
              <StyledLink fontSize="14px" Color="#0a8fff" to="/login">
                Login
              </StyledLink>
            </Text>
          </FlexContainer>
        </form>
      </Card>
    </div>
  );
};

export default Register;
