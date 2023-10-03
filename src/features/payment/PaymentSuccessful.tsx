import DownloadIcon from "@assets/icons/download.svg?react";
import { Button, ButtonGroup, Flex, Heading, VStack, Text } from "@chakra-ui/react";
import { colors } from "../../chakra-overrides/colors";
import { Link as RouterLink } from "react-router-dom";

export default function PaymentSuccessful() {
  return (
    <>
      <Flex
        gap="20px"
        margin="0 -20px"
        direction="column"
        paddingTop="40px"
        paddingBottom="20px"
        paddingX="20px"
        height="100%"
        flexGrow={1}
      >
        <Heading as="h1" size="md" variant="display" alignSelf="center">
          Your Payment was Successful!
        </Heading>
        <Text>
          You will receive notifications regarding the final outcome of your application.<br/><br/>
          Please allow <span style={{fontWeight: "bold", color: colors.theme.primary}}>3 to 10 working days</span> for the application review process to be completed.<br/><br/>
          Thank you for your patience.
        </Text>
        <Button variant="link" colorScheme="newAdmin" justifyContent="start" leftIcon={<DownloadIcon />}>
          Download Invoice
        </Button>

        <ButtonGroup padding="10px" colorScheme="newAdmin" marginTop="auto">
          <VStack w="100%">
            <Button
            as={RouterLink}
            to="/"
            variant="solid"
            w="100%">
              Home
            </Button>
            <Button variant="outline" w="100%">
              Download Invoice
            </Button>
          </VStack>
        </ButtonGroup>
      </Flex>
    </>
  );
}
