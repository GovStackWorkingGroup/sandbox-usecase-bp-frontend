import { PlusSquareIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export default function SchedulingComplete() {
  return (
    <>
      <Flex direction="column" gap="20px" mb="20px" flexGrow="1">
        <Heading size="md" variant="title">
          Thank You for Scheduling Your Site Inspection
        </Heading>
        <Text>
          Your appointment has been successfully scheduled. Here are the
          details:
        </Text>
        <Box>
          <Text>
            Date: <strong>17/08/2023</strong>
          </Text>
          <Text>
            Time: <strong>9:00-12:00</strong>
          </Text>
        </Box>
        <Button
          width="min-content"
          colorScheme="admin"
          variant="ghost"
          leftIcon={<PlusSquareIcon />}
        >
          Add to calendar
        </Button>
        <Text>
          We appreciate your attention to this matter. If you require further
          assistance or have any inquiries, please reach out to our support
          team.
        </Text>
        <ButtonGroup mt="auto" orientation="vertical" colorScheme="admin">
          <Button as={RouterLink} to="/">
            Home
          </Button>
          <Button
            as={RouterLink}
            to="/housing/construction-permit/my-applications"
            variant="outline"
          >
            My Applications
          </Button>
        </ButtonGroup>
      </Flex>
    </>
  );
}
