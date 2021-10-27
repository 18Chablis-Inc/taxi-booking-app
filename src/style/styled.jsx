import styled from "styled-components";
import { MdArrowForwardIos } from "react-icons/md";
import { BiMapPin, BiTrip } from "react-icons/bi";
import { BsCalendarDate } from "react-icons/bs";
import { AiFillCar } from "react-icons/ai";
import { RiHandCoinLine } from "react-icons/ri";
export const Container = styled.div`
  width: 100%;
  padding: 1em;
  margin: 0 auto;
  overflow: hidden;
  @media (min-width: 640px) {
    max-width: 640px;
  }
  @media (min-width: 768px) {
    max-width: 768px;
  }
  @media (min-width: 1024px) {
    max-width: 1024px;
  }
  @media (min-width: 1280px) {
    max-width: 1280px;
  }
`;
export const FlexContainer = styled.div`
  display: flex;
  overflow: hidden;

  margin-top: ${(props) => props.marginTop};
  justify-content: ${(props) => props.justifyContent};
  padding: ${(props) => props.Padding};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  align-items: ${(props) => props.alignItems};
  flex-wrap: ${(props) => props.flexWrap};
  flex-direction: ${(props) => props.flexDirection};
  border: ${(props) => props.Border};
  border-radius: ${(props) => props.borderRadius};
  @media (max-width: 768px) {
    flex-direction: ${(props) => props.responsiveFlexDirection};
  }
`;

export const HeaderText = styled.h2`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.Color};
  font-weight: 600px;
  text-align: center;
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  text-transform: ${(props) => props.textTransform};
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => props.flexDirection};
  border-radius: ${(props) => props.borderRadius};
  box-shadow: ${(props) => props.boxShadow};
  width: ${(props) => props.Width};
  height: ${(props) => props.Height};
  padding: 0.3em;
  margin: 0.2em 0.5em;
  @media (max-width: 768px) {
    flex-direction: ${(props) => props.responsiveFlexDirection};
    margin: 0.5em 0;
    cursor: pointer;
  }
  @media (max-width: 425px) {
    width: 350px;
  }
`;
export const CardImage = styled.img`
  display: block;
  max-width: 200px;
  max-height: 55px;
  width: auto;
  height: auto;
  margin-left: 0.2em;
  margin-right: 0.2em;
`;
export const CardTextContainer = styled.div`
  margin-left: 0.2em;
  margin-right: 0.2em;
  margin-bottom: 0.5em;
`;
export const Text = styled.p`
  font-size: ${(props) => props.fontSize};
  text-transform: ${(props) => props.textTransform};
  text-align: ${(props) => props.textAlign};
  margin: ${(props) => props.Margin};
`;
export const ForwardIcon = styled(MdArrowForwardIos)`
  font-size: 20px;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const NotificationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em 1.5em;
  border-radius: 4px;
  background-color: ${(props) => props.backgroundColor};
  @media (max-width: 768px) {
    flex-direction: column;
    flex-wrap: wrap;
    width: 400px;
    margin: 0 auto;
  }
  @media (max-width: 425px) {
    width: 330px;
  }
`;

export const Button = styled.a`
  cursor: pointer;
  font-size: 16px;
  padding: 8px 24px;
  color: ${(props) => props.Color};
  border-radius: 50px;
  border: ${(props) => props.Border};
  margin: ${(props) => props.Margin};
  text-align: center;
  &:hover {
    background-color: ${(props) => props.hoverBgColor};
    color: ${(props) => props.hoverColor};
  }
  @media (max-width: 768px) {
    margin: 0.6em 0;
  }
`;

export const MapIcon = styled(BiMapPin)`
  font-size: 18px;
`;
export const CarIcon = styled(AiFillCar)`
  font-size: 30px;
  color: #79b1e5;
`;
export const TripIcon = styled(BiTrip)`
  font-size: 30px;
  color: #79b1e5;
`;
export const CalendarIcon = styled(BsCalendarDate)`
  font-size: 30px;
  color: #79b1e5;
`;
export const HandCoinIcon = styled(RiHandCoinLine)`
  font-size: 30px;
  color: #79b1e5;
`;

export const HorizontalLine = styled.hr`
  width: ${(props) => props.Width};
  margin: 1em 0;
`;

export const Circle = styled.div`
  border-radius: 100%;
  border: ${(props) => props.Border};
  padding: 40px;
  margin: 0.3em 0;
`;
