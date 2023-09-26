import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
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
      >
        <Outlet />
      </Flex>
      <Footer />
    </Flex>
  );
}
