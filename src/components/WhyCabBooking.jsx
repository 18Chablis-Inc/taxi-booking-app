import React from "react";
import {
  CalendarIcon,
  Card,
  CarIcon,
  Circle,
  Container,
  FlexContainer,
  HandCoinIcon,
  HeaderText,
  Text,
  TripIcon,
} from "../style/styled";

const WhyCabBooking = () => {
  return (
    <Container>
      <HeaderText
        textTransform="capitalize"
        fontSize="26px"
        marginTop="0.6em"
        marginBottom="1em"
      >
        Why EaseMyTrip for cab booking?
      </HeaderText>
      <FlexContainer flexDirection="row" responsiveFlexDirection="column">
        <Card
          Margin="0.2em 0.5em"
          responsiveMargin="0.5em 0"
          Width="300px"
          flexDirection="column"
          Height="220px"
        >
          <Circle Border="1px solid #79b1e5">
            <CarIcon />
          </Circle>
          <HeaderText marginTop=".4em" textTransform="capitalize">
            Extensive Options
          </HeaderText>
          <Text Margin=".4em 0" textAlign="center">
            Wide range of quality, safe and license vehicles
          </Text>
        </Card>
        <Card
          Margin="0.2em 0.5em"
          responsiveMargin="0.5em 0"
          Width="300px"
          flexDirection="column"
          Height="220px"
        >
          <Circle Border="1px solid #79b1e5">
            <HandCoinIcon />
          </Circle>
          <HeaderText marginTop=".4em" textTransform="capitalize">
            Convenient
          </HeaderText>
          <Text Margin=".4em 0" textAlign="center">
            Enjoy a high quality transfer experience at surprisingly low prices
          </Text>
        </Card>
        <Card
          Margin="0.2em 0.5em"
          responsiveMargin="0.5em 0"
          Width="300px"
          flexDirection="column"
          Height="220px"
        >
          <Circle Border="1px solid #79b1e5">
            <TripIcon />
          </Circle>
          <HeaderText marginTop=".4em" textTransform="capitalize">
            easy and flexible booking
          </HeaderText>
          <Text Margin=".4em 0" textAlign="center">
            Booking online is easy and only take 5 minutes, cancellations are
            free of charge up to 24 hours before the transfer
          </Text>
        </Card>
        <Card
          Margin="0.2em 0.5em"
          responsiveMargin="0.5em 0"
          Width="300px"
          flexDirection="column"
          Height="220px"
        >
          <Circle Border="1px solid #79b1e5">
            <CalendarIcon Color="#79b1e5" fontSize="30px" />
          </Circle>
          <HeaderText marginTop=".4em" textTransform="capitalize">
            24/7 customer service
          </HeaderText>
          <Text Margin=".4em 0" textAlign="center">
            Our office is staffed 24 hours a day, 365 days a year, we're always
            here to help.
          </Text>
        </Card>
      </FlexContainer>
    </Container>
  );
};

export default WhyCabBooking;
