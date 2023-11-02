import {
  Button,
  ButtonGroup,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import FeedbackRating from "./FeedbackRatingRadio";
import FeedbackSent from "./FeedbackSent";

export default function Feedback() {
  const [feedbackSent, setFeedbackSent] = useState(false);
  if (feedbackSent) {
    return <FeedbackSent />;
  }
  return (
    <>
      <Flex mt="80px" gap="20px" paddingBottom="20px" flexGrow={1}>
        <Flex gap="10px" direction="column" w="100%">
          <Heading as="h1" size="md" variant="display">
            We need your Feedback!
          </Heading>
          <FormControl marginTop="1rem" isRequired>
            <FormLabel>
              How would you rate your experience with our service?
            </FormLabel>
            <Flex justifyContent="center">
              <FeedbackRating />
            </Flex>
          </FormControl>
          <FormControl marginTop="1rem">
            <FormLabel>Let us know about your experience</FormLabel>
            <Text size="md">
              Did you accomplish what you intended to do in this session? Help
              us to understand what we can improve.
            </Text>
            <Textarea marginTop="1rem" placeholder="(Optional)" />
          </FormControl>
          <Flex mt="auto">
            <ButtonGroup colorScheme="admin" w="100%">
              <VStack w="100%">
                <Button
                  onClick={() => setFeedbackSent(true)}
                  variant="solid"
                  width="100%"
                >
                  Submit
                </Button>
                <Button as={RouterLink} to="/" variant="outline" width="100%">
                  Skip & Home
                </Button>
              </VStack>
            </ButtonGroup>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}