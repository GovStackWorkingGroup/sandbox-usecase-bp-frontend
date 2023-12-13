import {
  Button,
  Flex,
  Grid,
  Heading,
  Text
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export default function FeedbackSent() {
  return (
    <>
      <Flex
        gap="20px"
        margin="80px -20px 0 -20px"
        direction="column"
        paddingX="20px"
        pb="20px"
        flexGrow={1}
      >
        <Flex direction="column" gap="10px">
          <Heading as="h1" size="md" variant="display">
            Thank You for Your Feedback!
          </Heading>
          <Text size="md">
            Your feedback is invaluable in helping us improve our services.
            <br /> <br />
            We greatly appreciate your time and input. Your suggestions and
            comments contribute to making our processes better and more
            user-friendly.
          </Text>
        </Flex>
        <Flex marginTop="auto" w="100%" direction={{base: "column", md: "row"}}>
          <Grid
            gap="10px"
            w="100%"
            gridAutoColumns={{base:"100%", md: "50%"}}
            templateAreas={{
              base: `"a" "b"`,
              md: `"b a"`
          }}>
            <Button gridArea="a" as={RouterLink} to="/housing/construction-permit/my-applications" colorScheme="admin" variant="solid" w="100%">
              My Applicatons
            </Button>
            <Button gridArea="b" as={RouterLink} to="/" colorScheme="admin" variant="outline" w="100%">
              Home
            </Button>
          </Grid>
        </Flex>
      </Flex>
    </>
  );
}
