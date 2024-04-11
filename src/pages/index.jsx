import Head from "next/head";
import AppLayout from "../Components/appLayout";
import {
  BackgroundImage,
  Button,
  Center,
  Flex,
  Space,
  Text,
  Image,
} from "@mantine/core";
import Slider from "../Components/slider";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BackgroundImage src="/homePic.jpeg" h={"70vh"} w={"100%"}>
        <Flex
          direction={"column"}
          h={"100%"}
          w={"100%"}
          bg={"rgba(0, 0, 0, 0.5"}
        >
          <AppLayout withHeaderBorder={false}>
            <Flex
              direction={"column"}
              h={"40vh"}
              align={"center"}
              justify={"center"}
              style={{ textAlign: "center" }}
            >
              <h1>
                Sicily Experience <br /> Find Local Adventures in Your City
              </h1>
              <Image
                visibleFrom="sm"
                src={"/sicily.svg"}
                alt={"logo"}
                w={"250"}
              />
              <Image
                hiddenFrom="sm"
                src={"/sicily.svg"}
                alt={"logo"}
                w={"150"}
              />
            </Flex>
          </AppLayout>
        </Flex>
      </BackgroundImage>
      <Space h={"xl"} />
      <Text align={"center"} size={"xl"} fw={800}>
        Popular Experiences
      </Text>
      <Space h={"xl"} />
      <Slider />
      <Space h={"xl"} />
      <Space h={"xl"} />
      <Center w={"100%"}>
        <Button
          align={"center"}
          onClick={() => router.push("/experiences")}
          color={"purple"}
        >
          View All
        </Button>
      </Center>
      <Space h={"xl"} />
      <Space h={"xl"} />
    </>
  );
}
