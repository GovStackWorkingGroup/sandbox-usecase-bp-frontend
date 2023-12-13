import DownloadIcon from "@assets/icons/download.svg?react";
import {
  Button,
  Flex,
  Grid,
  Heading,
  Text
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { colors } from "../../../../../../chakra-overrides/colors";

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
        <Heading as="h1" size="md" variant="display">
          Your Payment was Successful!
        </Heading>
        <Text>
          You will receive notifications regarding the final outcome of your
          application.
          <br />
          <br />
          Please allow{" "}
          <span style={{ fontWeight: "bold", color: colors.theme.primary }}>
            3 to 10 working days
          </span>{" "}
          for the application review process to be completed.
          <br />
          <br />
          Thank you for your patience.
        </Text>
        <Button
          variant="link"
          colorScheme="admin"
          justifyContent="start"
          leftIcon={<DownloadIcon />}
        >
          Download Invoice
        </Button>

        <Flex padding="10px" marginTop="auto" w="100%" direction={{base: "column", md: "row"}}>
          <Grid
            gap="10px"
            w="100%"
            gridAutoColumns={{base:"100%", md: "50%"}}
            templateAreas={{
              base: `"a" "b"`,
              md: `"b a"`
          }}>
            <Button gridArea="a" as={RouterLink} to="/" colorScheme="admin"  variant="solid" w="100%">
              Home
            </Button>
            <Button gridArea="b" colorScheme="admin" variant="outline" w="100%">
              Download Invoice
            </Button>
          </Grid>
        </Flex>
      </Flex>
    </>
  );
}
