import { BackgroundImage, Button, Center, Flex } from "@mantine/core";
import { IconHeart, IconInfoCircleFilled } from "@tabler/icons-react";
import React from "react";

const Card = () => {
  return (
    <>
      {/* desktop */}
      <BackgroundImage
        visibleFrom={"sm"}
        src={"/exp1.jpg"}
        radius={"5px"}
        h={"500px"}
        w={"900px"}
      >
        <Flex
          h={"100%"}
          w={"100%"}
          direction={"column"}
          justify={"space-between"}
          align={"center"}
          bg={"rgba(0, 0, 0, 0.5)"}
          style={{ borderRadius: "5px" }}
        >
          <Flex justify={"space-between"} align={"center"} w={"90%"}>
            <h3>stars</h3>
            <Button bg={"transparent"} onClick={() => console.log("preferito")}>
              <IconHeart size={"xl"} />
            </Button>
          </Flex>
          <h1>TITOLO ESPERIENZA</h1>
          <Flex direction={"column"}>
            <Button
              bg={"transparent"}
              onClick={() => console.log("info")}
              mb={"sm"}
            >
              <IconInfoCircleFilled size={"xl"} />
            </Button>
            <h4>10 AM - 13 AM</h4>
          </Flex>
        </Flex>
      </BackgroundImage>
      {/* mobile */}
      <BackgroundImage
        hiddenFrom={"sm"}
        src={"/exp1.jpg"}
        radius={"5px"}
        h={"250px"}
        w={"350px"}
      >
        <Flex
          h={"100%"}
          w={"100%"}
          direction={"column"}
          justify={"space-between"}
          align={"center"}
          bg={"rgba(0, 0, 0, 0.5)"}
          style={{ borderRadius: "5px" }}
        >
          <Flex justify={"space-between"} align={"center"} w={"90%"}>
            <h3>stars</h3>
            <Button bg={"transparent"} onClick={() => console.log("preferito")}>
              <IconHeart size={"25px"} />
            </Button>
          </Flex>
          <h3>TITOLO ESPERIENZA</h3>
          <Flex direction={"column"}>
            <Button
              bg={"transparent"}
              onClick={() => console.log("info")}
              mb={"sm"}
            >
              <IconInfoCircleFilled size={"25px"} />
            </Button>
            <h4>10 AM - 13 AM</h4>
          </Flex>
        </Flex>
      </BackgroundImage>
    </>
  );
};

export default Card;
