import React from "react";
import { Container, HeaderText, Text } from "../style/styled";

const Rate = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/bgImgCabs.jpg)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "300px",
        padding: "2em",
      }}
      className="bgImg"
    >
      <HeaderText
        textTransform="capitalize"
        Color="#fff"
        fontSize="30px"
        marginBottom="1em"
      >
        Best rate for cab booking at EaseMyTrip
      </HeaderText>
      <Text Color="#fff" fontSize="16px" textAlign="justify" Margin="0 0 4em 0">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
        porro explicabo reprehenderit optio animi veritatis pariatur harum, id
        accusantium itaque mollitia totam. Animi cupiditate excepturi ea,
        reprehenderit, deserunt beatae id optio, quod ex repellat sint ipsa
        velit incidunt. Iure nisi facere itaque minus consectetur dignissimos
        aspernatur! Ratione repellendus saepe aperiam sequi aliquam facere
        doloremque vero atque illum est. Ducimus saepe repellendus corporis
        illum adipisci eveniet officiis aut perspiciatis ad unde, repudiandae
        quidem vel sint porro quo sit impedit sequi recusandae. Rem laudantium
        consequatur facere, repudiandae totam assumenda in blanditiis pariatur
        obcaecati! Aut impedit soluta reiciendis at, ex temporibus enim quis.
      </Text>
    </div>
  );
};

export default Rate;
