import { Flex, Text } from "@mantine/core";

import { IconHome, IconInfoCircle, IconMap } from "@tabler/icons-react";

import { useRouter } from "next/router";

const Navigation = ({ isMobile }) => {
  const router = useRouter();
  return (
    <>
      {isMobile ? (
        <Flex
          w={"100"}
          h={"100%"}
          justify={"center"}
          align={"center"}
          gap={"md"}
        >
          <IconHome onClick={() => router.push("/")} color={"black"} />
          <IconMap
            onClick={() => router.push("/experiences")}
            color={"black"}
          />
          <IconInfoCircle
            onClick={() => router.push("/about")}
            color={"black"}
          />
        </Flex>
      ) : (
        <Flex
          w={"100"}
          h={"100%"}
          justify={"center"}
          align={"center"}
          gap={"md"}
        >
          <Text
            onClick={() => router.push("/")}
            size={"lg"}
            fw={800}
            c={"black"}
            style={{ cursor: "pointer" }}
          >
            HOME
          </Text>
          <Text
            onClick={() => router.push("/experiences")}
            size={"lg"}
            fw={800}
            c={"black"}
            style={{ cursor: "pointer" }}
          >
            EXPERIENCES
          </Text>
          <Text
            onClick={() => router.push("/about")}
            size={"lg"}
            fw={800}
            c={"black"}
            style={{ cursor: "pointer" }}
          >
            ABOUT
          </Text>
        </Flex>
      )}
    </>
  );
};

export default Navigation;
