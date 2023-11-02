import { Box, Flex, Heading, Spinner, Text } from "@chakra-ui/react";
import { colors } from "../../../../../../chakra-overrides/colors";

export default function OngoingPayment() {
  return (
    <Flex
      mt="auto"
      mb="auto"
      flexDirection="column"
      gap="20px"
      alignItems="center"
    >
      <Spinner size="lg" color={colors.theme.primary} />
      <Heading variant="headline" size="lg">
        Receiving payment order...
      </Heading>
      <Box textAlign="center">
        <Text size="lg">Please wait!</Text>
        <Text size="lg">This process might take some time.</Text>
      </Box>
    </Flex>
  );
}
