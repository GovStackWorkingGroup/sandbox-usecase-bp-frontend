import {
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import { useParams } from "react-router-dom";
import { colors } from "../../../../../chakra-overrides/colors";
import Breadcrumbs, {
  BreadcrumbPaths,
} from "../../../../../components/breadcrumbs/Breadcrumbs";
import SchedulingComplete from "./SchedulingComplete";

export default function ScheduleInspection() {
  const { id } = useParams();
  const breadcrumbs: BreadcrumbPaths = [
    ["Housing", null],
    ["Construction Permit", "/housing/construction-permit"],
    ["My Applications", `/housing/construction-permit/my-applications`],
    [
      `Permit application #${id}`,
      `/housing/construction-permit/my-applications/review/${id}`,
    ],
  ];
  const [date, setDate] = useState("");
  const [schedulingComplete, setSchedulingComplete] = useState(false);
  const handleDate = (event: ChangeEvent) => {
    setDate((event.target as HTMLInputElement).value);
  };

  return (
    <>
      <Breadcrumbs path={breadcrumbs} />
      {schedulingComplete ? (
        <SchedulingComplete />
      ) : (
        <Flex direction="column" gap="20px" mb="20px" flexGrow="1">
          <Flex direction="column" gap="20px">
            <Heading variant="headline">
              Construction Permit Application
            </Heading>

            <Text variant="label">Application #{id}</Text>
            <Text>
              Please select a date from the available options. Please ensure
              your presence on the chosen date for the inspection on location.
            </Text>
          </Flex>
          <Flex direction="column" gap="20px">
            <Text variant="label">Select a Date</Text>
            <Input type="date" value={date} onChange={handleDate} />
          </Flex>
          <Flex direction="column" gap="20px">
            <Text variant="label">Select a Time Slot</Text>
            {!date && <Text>Please pick a date first</Text>}
            {date && (
              <>
                <Button justifyContent="space-between" colorScheme="admin">
                  <span>17 August</span>
                  <span>9:00 - 12:00</span>
                </Button>
                <Button
                  justifyContent="space-between"
                  colorScheme="white"
                  color={colors.black}
                >
                  <span>17 August</span>
                  <span>13:00 - 16:00</span>
                </Button>
              </>
            )}
          </Flex>
          <ButtonGroup mt="auto" orientation="vertical" colorScheme="admin">
            <Button onClick={() => setSchedulingComplete(true)}>
              Schedule
            </Button>
            <Button variant="outline">Back</Button>
          </ButtonGroup>
        </Flex>
      )}
    </>
  );
}
