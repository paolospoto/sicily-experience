import {
  AppShell,
  Burger,
  Button,
  Flex,
  Image,
  Space,
  Text,
} from "@mantine/core";
// import { Image } from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { useHeadroom } from "@mantine/hooks";

import Navigation from "../navigation";
import { useEffect } from "react";

// import Navigation from "./Navigation";

const AppLayout = ({ children, withHeaderBorder }) => {
  const pinned = useHeadroom({ fixedAt: 10 });
  const { data: session } = useSession();

  useEffect(() => {
    console.log(session);
  }, [session]);
  // const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      style={{ zIndex: 9999 }}
      header={{ height: 80 }}
      footer={{ height: 50 }}
    >
      <AppShell.Header
        bg={"transparent"}
        withBorder={withHeaderBorder}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,

          transform: `translate3d(0, ${pinned ? 0 : "-110rem"}, 0)`,
          transition: "transform 400ms ease",
        }}
      >
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

            <Button
              color="purple"
              onClick={() => {
                session ? signOut() : signIn();
              }}
            >
              {session ? "SIGN OUT" : "SIGN IN"}
            </Button>
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
          <Button
            color="purple"
            onClick={() => {
              session ? signOut() : signIn();
            }}
          >
            {session ? "SIGN OUT" : "SIGN IN"}
          </Button>
        </Flex>
      </AppShell.Header>

      {/* <AppShell.Navbar>
        <Navigation />
      </AppShell.Navbar> */}

      <AppShell.Main>{children}</AppShell.Main>
      <AppShell.Footer withBorder={false} bg={"transparent"}>
        {/* desktop
        <Text visibleFrom="md">Desktop Footer</Text> */}
        {/* mobile */}

        <Flex
          hiddenFrom="sm"
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
