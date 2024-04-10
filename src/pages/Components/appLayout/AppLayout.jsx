import { AppShell, Burger, Button, Flex, Image, Text } from "@mantine/core";
// import { Image } from "next/image";
import { useDisclosure } from "@mantine/hooks";
import Navigation from "../navigation";

// import Navigation from "./Navigation";

const AppLayout = ({ children }) => {
  // const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      style={{ zIndex: 9999 }}
      header={{ height: 80 }}
      footer={{ height: 50 }}
    >
      <AppShell.Header bg={"transparent"}>
        {/* desktop */}
        <Flex
          visibleFrom={"sm"}
          align={"center"}
          justify={"space-between"}
          h={"100%"}
          w={"100%"}
          pl={"xl"}
          pr={"xl"}
        >
          <Image src={"/logo.svg"} alt={"logo"} />

          <Flex align={"center"} justify={"center"} h={"100%"} gap={"xl"}>
            <Navigation isMobile={false} />
            <Button>Sign In</Button>
          </Flex>
        </Flex>

        {/* mobile */}
        <Flex
          hiddenFrom={"sm"}
          align={"center"}
          justify={"space-between"}
          h={"100%"}
          w={"100%"}
          pl={"xl"}
          pr={"xl"}
        >
          <Image src={"/logo.svg"} alt={"logo"} />
          <Button>Sign In</Button>
        </Flex>
      </AppShell.Header>

      {/* <AppShell.Navbar>
        <Navigation />
      </AppShell.Navbar> */}

      <AppShell.Main pt={100}>{children}</AppShell.Main>
      <AppShell.Footer withBorder={false} bg={"transparent"}>
        {/* desktop */}
        {/* <Text visibleFrom="md">Desktop Footer</Text> */}
        {/* mobile */}
        <Flex
          // hiddenFrom="sm"
          justify="center"
          // style={{ "border-top-right": "20rem" }}
          style={{
            borderTopLeftRadius: "15rem",
            borderTopRightRadius: "15rem",
          }}
          h={"100%"}
          bg={"white"}
        >
          <Navigation isMobile={true} />
        </Flex>
      </AppShell.Footer>
    </AppShell>
  );
};

export default AppLayout;
