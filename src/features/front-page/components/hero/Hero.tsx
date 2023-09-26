import { Flex, Heading } from "@chakra-ui/react";
import { colors } from "../../../../chakra-overrides/colors";
import Search from "../../../../components/search/Search";

export default function Hero() {
  return (
    <Flex
      backgroundColor={colors.secondary[50]}
      gap="20px"
      margin="0 -20px"
      direction="column"
      paddingTop="40px"
      paddingBottom="20px"
      paddingX="20px"
    >
      <Heading as="h1" size="lg" variant="display">
        Welcome to Digital Island eGov Portal
      </Heading>
      <Heading size="sm" variant="title">
        Your Gateway to Government Services
      </Heading>
      <Search colorScheme="admin" />
    </Flex>
  );
}
