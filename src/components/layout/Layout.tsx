import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { colors } from "../../chakra-overrides/colors";
import Footer from "../footer/Footer";
import Header from "../header/Header";

export function Layout() {
  return (
    <Flex minH="100vh" direction="column">
      <Header />
      <Flex
        position="relative"
        padding="0 20px"
        flexGrow="1"
        flexDirection="column"
        maxWidth="64rem"
        margin="0 auto"
        backgroundColor={colors.secondary[0]}
        // marginTop={{ xl: "40px" }}
        // marginBottom={{ xl: "40px" }}
        width="100%"
      >
        <Outlet />
      </Flex>
      <Footer />
    </Flex>
  );
}
