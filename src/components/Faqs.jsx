import React from "react";
import { HeaderText, Text } from "../style/styled";

const Faqs = () => {
  return (
    <div>
      <HeaderText textTransform="capitalize" fontSize="30px" marginBottom="1em">
        Faqs
      </HeaderText>
      <Text textTransform="capitalize" fontSize="18px">
        How can i book a cab from EaseMyTrip?
      </Text>
      <Text fontSize="14px">
        To book a cab, you can visit our website, mobile site or mobile app and
        click on the cab option. Cab booking is available with us in various
        options. You can book cabs for one way, round trip, airport or railway
        station transfer, hourly basis or day basis. Intercity cabs are also
        available with us.
      </Text>
      <Text textTransform="capitalize" fontSize="18px">
        What Car Categories Do You Provide?
      </Text>
      <Text fontSize="14px">
        Currently, we have three categories of cars. <br />.{" "}
        <strong>Hatchback -</strong> Indica, WagonR or Similar <br />.{" "}
        <strong>Sedan - </strong>DZire, Etios, Xent or Similar <br />.{" "}
        <strong>SUV - </strong>Ertiga, Lodgy or similar
      </Text>
      <Text textTransform="capitalize" fontSize="18px">
        Do you Offer Multiple Pickups Or Drops?
      </Text>
      <Text fontSize="14px">
        At present, we only provide pick up and drop at one point but very soon,
        we will introduce other options like multiple pickups and drops. Very
        soon, we will introduce more segments in cabs.
      </Text>
      <Text textTransform="capitalize" fontSize="18px">
        Is There a Convenience Charge for Booking on the Phone / Web?
      </Text>
      <Text fontSize="14px">
        No we don't charge any convenience fee for booking cabs.
      </Text>
      <Text textTransform="capitalize" fontSize="18px">
        What should I Do If I have to Carry a Lot of Luggage during the Journey?
      </Text>
      <Text fontSize="14px">
        During booking the cab, you will have to insure that how much luggage
        you are going to carry. Each cab has its own capacity of carrying
        luggage. You can see the seating and baggage capacity for the particular
        car. So, find the right vehicle that goes with your requirements.
      </Text>
      <Text textTransform="capitalize" fontSize="18px">
        How can I Find the Best Cab Booking Offers &amp; Deals?
      </Text>
      <Text fontSize="14px" Margin="0 0 5em 0">
        At EaseMyTrip, we make sure that our customers can book their cab trips
        at really reasonable rates. We always introduce the best offers and
        deals to make sure that they travel at the lowest cost with us.
      </Text>
    </div>
  );
};

export default Faqs;
