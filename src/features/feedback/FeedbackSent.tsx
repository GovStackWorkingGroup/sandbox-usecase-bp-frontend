import {
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export default function FeedbackSent() {
  return (
    <>
      <Flex
        gap="20px"
        margin="0 -20px"
        direction="column"
        paddingTop="40px"
        paddingBottom="20px"
        paddingX="20px"
        flexGrow={1}
      >
        <Flex direction="column" gap="10px">
          <Heading as="h1" size="md" variant="display">
          Thank You for Your Feedback!
          </Heading>
            <Text size="md">Your feedback is invaluable in helping us improve our services.<br /> <br /> 
              We greatly appreciate your time and input. Your suggestions and comments contribute to making our processes better and more user-friendly.</Text>
        </Flex>
        <ButtonGroup padding="10px" colorScheme="newAdmin" marginTop="auto">
          <VStack w="100%">
            <Button variant="solid" w="100%">
              My Applicatons
            </Button>
            <Button 
            as={RouterLink} 
            to="/" 
            variant="outline" 
            w="100%">
              Home
            </Button>
          </VStack>
        </ButtonGroup>
      </Flex>
    </>
  );
}