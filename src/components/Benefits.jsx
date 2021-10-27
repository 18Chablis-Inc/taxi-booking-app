import React from "react";
import {
  Card,
  ForwardIcon,
  CardImage,
  CardTextContainer,
  Container,
  FlexContainer,
  HeaderText,
  Text,
  NotificationContainer,
  Button,
} from "../style/styled";

const Benefit = () => {
  return (
    <Container>
      <HeaderText
        textTransform="capitalize"
        fontSize="26px"
        marginTop="0.6em"
        marginBottom="1em"
      >
        Cab booking benefit with <strong>EaseMyTrip</strong>
      </HeaderText>
      <FlexContainer
        justifyContent="center"
        alignItems="center"
        marginBottom="1.5em"
        flexDirection="row"
        responsiveFlexDirection="column"
      >
        <Card
          Width="400px"
          borderRadius="6px"
          flexDirection="row"
          responsiveFlexDirection="column"
          boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        >
          <CardImage
            src={`${process.env.PUBLIC_URL}/assets/benefitt-discount.png`}
            alt=""
          />
          <CardTextContainer>
            <HeaderText fontSize="18px" marginTop="0.3em" marginBottom="0.3em">
              Get Flat 10% off
            </HeaderText>
            <Text textAlign="center" fontSize="16px">
              Enjoy flat 10 percent off on one way and round trip{" "}
            </Text>
          </CardTextContainer>
          <ForwardIcon />
        </Card>
        <Card
          Width="400px"
          borderRadius="6px"
          flexDirection="row"
          responsiveFlexDirection="column"
          boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        >
          <CardImage
            src={`${process.env.PUBLIC_URL}/assets/trip-advisory.png`}
            alt=""
          />
          <CardTextContainer>
            <HeaderText fontSize="18px" marginTop="0.3em" marginBottom="0.3em">
              Get Flat 10% off
            </HeaderText>
            <Text textAlign="center" fontSize="16px">
              You should know latest COVID-19 travel guidelines before booking
              your cab
            </Text>
          </CardTextContainer>
          <ForwardIcon />
        </Card>
        <Card
          Width="400px"
          borderRadius="6px"
          flexDirection="row"
          responsiveFlexDirection="column"
          boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        >
          <CardImage
            src={`${process.env.PUBLIC_URL}/assets/payment-method.png`}
            alt=""
          />
          <CardTextContainer>
            <HeaderText fontSize="18px" marginTop="0.3em" marginBottom=".3em">
              Get Flat 10% off
            </HeaderText>
            <Text textAlign="center" fontSize="16px">
              Book cab on paying 15% as initial amount and rest to driver on
              pick-up
            </Text>
          </CardTextContainer>
          <ForwardIcon />
        </Card>
      </FlexContainer>
      <NotificationContainer backgroundColor="#f7f78f">
        <Text fontSize="18px" textTransform="capitalize" textAlign="center">
          Check all the <strong>state wise regulations</strong> with health
          screening.
        </Text>
        <Button
          href="#"
          Color="#79b1e5"
          Border="1px solid #79b1e5"
          hoverBgColor="#5a86f4"
          hoverColor="#fff"
        >
          View Guidelines
        </Button>
      </NotificationContainer>
    </Container>
  );
};

export default Benefit;
