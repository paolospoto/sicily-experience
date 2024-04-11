import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
import { SessionProvider } from "next-auth/react";

const theme = createTheme({
  /** Put your mantine theme override here */
});

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <MantineProvider theme={theme} defaultColorScheme={"dark"}>
        <Component {...pageProps} />
      </MantineProvider>
    </SessionProvider>
  );
}
