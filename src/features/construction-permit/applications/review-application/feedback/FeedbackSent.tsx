import {
  Button,
  Flex,
  Heading,
  Text,
  VStack
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
        <Flex marginTop="auto">
          <VStack w="100%">
            <Button as={RouterLink} to="/housing/construction-permit/my-applications" colorScheme="admin" variant="solid" w="100%">
              My Applicatons
            </Button>
            <Button as={RouterLink} to="/" colorScheme="admin" variant="outline" w="100%">
              Home
            </Button>
          </VStack>
        </Flex>
      </Flex>
    </>
  );
}
