import { PlusSquareIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  Text
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

interface scheduleProps {
  date: string;
  slot: number
}

export default function SchedulingComplete(
  {
    date,
    slot
  }:scheduleProps
  ) {
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
            Date: <strong>{new Date(date).toLocaleString("en", { day: "2-digit"}) + "/" + (new Date(date).getMonth()+1) + "/" + new Date(date).getFullYear()}</strong>
          </Text>
          <Text>
            Time: <strong>{slot == 1?"9:00 - 12:00":"13:00 - 16:00"}</strong>
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
        <Flex mt="auto" flexDirection="column" >
          <Button colorScheme="admin" as={RouterLink} to="/">
            Home
          </Button>
          <Button
            as={RouterLink}
            to="/housing/construction-permit/my-applications"
            colorScheme="admin"
            variant="outline"
          >
            My Applications
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
