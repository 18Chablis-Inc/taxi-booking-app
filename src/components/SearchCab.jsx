import React from "react";
import { Button, Container, FlexContainer, HeaderText } from "../style/styled";

const SearchCab = () => {
  return (
    <div className="bgColor">
      <Container>
        <HeaderText
          textTransform="capitalize"
          fontSize="26px"
          marginTop="0.6em"
          marginBottom="1em"
          Color="#fff"
        >
          Book online cab
        </HeaderText>
        <FlexContainer justifyContent="start" alignItems="flex-start">
          <Button
            href="#"
            Color="#fff"
            Border="1px solid #fff"
            hoverBgColor="#fff"
            hoverColor="#5a86f4"
            Margin="0 .5em"
          >
            Airport Transfer
          </Button>
          <Button
            href="#"
            Color="#fff"
            Border="1px solid #fff"
            hoverBgColor="#fff"
            hoverColor="#5a86f4"
            Margin="0 .5em"
          >
            Outstation / Other
          </Button>
          <Button
            href="#"
            Color="#fff"
            Border="1px solid #fff"
            hoverBgColor="#fff"
            hoverColor="#5a86f4"
            Margin="0 .5em"
          >
            Hourly
          </Button>
        </FlexContainer>
      </Container>
    </div>
  );
};

export default SearchCab;
