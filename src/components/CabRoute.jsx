import React from "react";
import {
  Card,
  Container,
  FlexContainer,
  HeaderText,
  HorizontalLine,
  MapIcon,
  Text,
} from "../style/styled";

const CabRoute = () => {
  return (
    <Container>
      <HeaderText
        textTransform="capitalize"
        fontSize="26px"
        marginTop="0.6em"
        marginBottom="1em"
      >
        Top cab routes
      </HeaderText>
      <FlexContainer
        borderRadius="3px"
        Border="1px solid #d1d1d1"
        flexDirection="row"
        responsiveFlexDirection="column"
      >
        <Card
          Width="300px"
          Margin="0.2em 0.5em"
          responsiveMargin="0.5em 0"
          flexDirection="row"
          responsiveFlexDirection="column"
        >
          <FlexContainer flexDirection="column">
            <FlexContainer
              flexDirection="row"
              flexWrap="no-wrap"
              marginTop="1em"
              marginBottom=".4em"
            >
              <MapIcon />
              <Text Margin="0 .6em">Pune, Mumbai</Text>
            </FlexContainer>
            <HorizontalLine Width="250px" />
            <FlexContainer
              marginBottom=".4em"
              flexDirection="row"
              flexWrap="no-wrap"
            >
              <MapIcon />
              <Text Margin="0 .6em">Pune, Mumbai</Text>
            </FlexContainer>
            <HorizontalLine Width="250px" />
            <FlexContainer
              marginBottom="1em"
              flexDirection="row"
              flexWrap="no-wrap"
            >
              <MapIcon />
              <Text Margin="0 .6em">Pune, Mumbai</Text>
            </FlexContainer>
          </FlexContainer>
        </Card>
        <Card
          Width="300px"
          flexDirection="row"
          responsiveMargin="0.5em 0"
          Margin="0.2em 0.5em"
          responsiveFlexDirection="column"
        >
          <FlexContainer flexDirection="column">
            <FlexContainer
              flexDirection="row"
              flexWrap="no-wrap"
              marginTop="1em"
              marginBottom=".4em"
            >
              <MapIcon />
              <Text Margin="0 .6em">Pune, Mumbai</Text>
            </FlexContainer>
            <HorizontalLine Width="250px" />
            <FlexContainer
              marginBottom=".4em"
              flexDirection="row"
              flexWrap="no-wrap"
            >
              <MapIcon />
              <Text Margin="0 .6em">Pune, Mumbai</Text>
            </FlexContainer>
            <HorizontalLine Width="250px" />
            <FlexContainer
              marginBottom="1em"
              flexDirection="row"
              flexWrap="no-wrap"
            >
              <MapIcon />
              <Text Margin="0 .6em">Pune, Mumbai</Text>
            </FlexContainer>
          </FlexContainer>
        </Card>
        <Card
          Width="300px"
          flexDirection="row"
          Margin="0.2em 0.5em"
          responsiveMargin="0.5em 0"
          responsiveFlexDirection="column"
        >
          <FlexContainer flexDirection="column">
            <FlexContainer
              flexDirection="row"
              flexWrap="no-wrap"
              marginTop="1em"
              marginBottom=".4em"
            >
              <MapIcon />
              <Text Margin="0 .6em">Pune, Mumbai</Text>
            </FlexContainer>
            <HorizontalLine Width="250px" />
            <FlexContainer
              marginBottom=".4em"
              flexDirection="row"
              flexWrap="no-wrap"
            >
              <MapIcon />
              <Text Margin="0 .6em">Pune, Mumbai</Text>
            </FlexContainer>
            <HorizontalLine Width="250px" />
            <FlexContainer
              marginBottom="1em"
              flexDirection="row"
              flexWrap="no-wrap"
            >
              <MapIcon />
              <Text Margin="0 .6em">Pune, Mumbai</Text>
            </FlexContainer>
          </FlexContainer>
        </Card>
        <Card
          Width="300px"
          flexDirection="row"
          Margin="0.2em 0.5em"
          responsiveMargin="0.5em 0"
          responsiveFlexDirection="column"
        >
          <FlexContainer flexDirection="column">
            <FlexContainer
              flexDirection="row"
              flexWrap="no-wrap"
              marginTop="1em"
              marginBottom=".4em"
            >
              <MapIcon />
              <Text Margin="0 .6em">Pune, Mumbai</Text>
            </FlexContainer>
            <HorizontalLine Width="250px" />
            <FlexContainer
              marginBottom=".4em"
              flexDirection="row"
              flexWrap="no-wrap"
            >
              <MapIcon />
              <Text Margin="0 .6em">Pune, Mumbai</Text>
            </FlexContainer>
            <HorizontalLine Width="250px" />
            <FlexContainer
              marginBottom="1em"
              flexDirection="row"
              flexWrap="no-wrap"
            >
              <MapIcon />
              <Text Margin="0 .6em">Pune, Mumbai</Text>
            </FlexContainer>
          </FlexContainer>
        </Card>
      </FlexContainer>
    </Container>
  );
};

export default CabRoute;
