import React, { useState } from "react";
import {
  Button,
  CalendarIcon,
  Container,
  FlexContainer,
  HeaderText,
  Input,
  MapIcon,
  PersonIcon,
  SearchIcon,
  Select,
  Text,
} from "../style/styled";
import { PassengerData } from "../utils/Data";

const SearchCab = () => {
  const [location, setLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [pickUpDate, setPickUpDate] = useState("");
  const [pickUpTime, setPickUpTime] = useState("");
  const [passenger, setPassenger] = useState("");
  const handleChange = (e) => {
    setPassenger(e.target.value);
  };
  const handleSearch = (e) => {};
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
        <FlexContainer
          justifyContent="start"
          alignItems="center"
          flexDirection="row"
          responsiveFlexDirection="column"
          borderRadius="8px"
          bgColor="#fff"
          marginTop="2em"
          marginBottom="2em"
        >
          <FlexContainer flexDirection="column" bgColor="#fff">
            <FlexContainer
              flexDirection="row"
              marginTop=".6em"
              marginBottom=".6em"
              Padding="0 .6em"
              justifyContent="center"
            >
              <MapIcon Color="#000" />
              <Text Margin="0 .4em" Color="#000">
                Pickup location
              </Text>
            </FlexContainer>
            <Input
              type="text"
              Padding="10px 30px"
              Border="none"
              placeholder="Enter airport, hotel, address"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </FlexContainer>
          <FlexContainer flexDirection="column" bgColor="#fff">
            <FlexContainer
              flexDirection="row"
              marginTop=".6em"
              marginBottom=".6em"
              Padding="0 .6em"
              justifyContent="center"
            >
              <MapIcon Color="#000" />
              <Text Margin="0 .4em" Color="#000">
                Drop-off location
              </Text>
            </FlexContainer>
            <Input
              type="text"
              Padding="10px 30px"
              Border="none"
              placeholder="Enter airport, hotel, address"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </FlexContainer>
          <FlexContainer flexDirection="column" bgColor="#fff">
            <FlexContainer
              flexDirection="row"
              marginBottom=".6em"
              marginTop=".6em"
              Padding="0 .6em"
              justifyContent="center"
            >
              <CalendarIcon fontSize="18px" Color="#000" />
              <Text Margin="0 .4em" Color="#000">
                Pick-up Date and Time
              </Text>
            </FlexContainer>
            <FlexContainer flexDirection="row" Width="240px">
              <Input
                type="text"
                Padding="10px 20px"
                Border="none"
                placeholder="For date"
                Width="120px"
                value={pickUpDate}
                onChange={(e) => setPickUpDate(e.target.value)}
              />
              <Input
                type="text"
                Padding="10px 20px"
                Border="none"
                placeholder="For time"
                Width="120px"
                value={pickUpTime}
                onChange={(e) => setPickUpTime(e.target.value)}
              />
            </FlexContainer>
          </FlexContainer>
          <FlexContainer
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            bgColor="#d0d0d0"
            Padding="2em 4em"
          >
            <Text fontSize="14px">ADD RETURN</Text>
          </FlexContainer>
          <FlexContainer flexDirection="column" bgColor="#fff" Width="180px">
            <FlexContainer
              flexDirection="row"
              marginBottom=".6em"
              marginTop=".6em"
              Padding="0 .6em"
            >
              <PersonIcon fontSize="18px" Color="#000" />
              <Text Margin="0 .4em" Color="#000">
                Passenger
              </Text>
            </FlexContainer>
            <Select
              onChange={handleChange}
              Padding=".1em .4em"
              Border="none"
              Width="100%"
            >
              {PassengerData.map((option) => (
                <option value={option.value}>{option.title}</option>
              ))}
            </Select>
          </FlexContainer>
          <FlexContainer
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            bgColor="#ff5a1f"
            Padding="2em 1.7em"
          >
            <SearchIcon Color="#fff" fontSize="18px" />{" "}
            <Text Color="#fff" Margin="0 .5em">
              SEARCH
            </Text>
          </FlexContainer>
        </FlexContainer>
      </Container>
    </div>
  );
};

export default SearchCab;
