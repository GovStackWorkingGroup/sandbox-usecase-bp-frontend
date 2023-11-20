import AlertIcon from "@assets/icons/alert-circle.svg?react";
import PlusIcon from "@assets/icons/plus.svg?react";
import {
  Button,
  Flex,
  ListItem,
  Spacer,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { colors } from "../../../../../chakra-overrides/colors";
import { Application } from "../../../../../rpc/types";

export default function ApplicationAction({
  action,
  id,
  application,
}: {
  action:
    | "inReview"
    | "scheduleInspection"
    | "upcomingInspection"
    | "documentsRequired"
    | "paymentRequired"
    | string;
  id?: string;
  application: Application;
}) {
  const navigate = useNavigate();
  switch (action) {
    case "paymentRequired":
      return (
        <>
          <Flex
            direction="column"
            p="20px"
            mr="-20px"
            ml="-20px"
            gap="20px"
            bg={colors.secondary[50]}
          >
            <Text variant="title" size="lg">
              Payment Required
            </Text>
            <Text>
              To facilitate the processing of your application, please proceed
              with the payment of the required fee. Once payment is complete,
              your application will be forwarded to stakeholders for clearance.
            </Text>
            <Button colorScheme="admin" as={RouterLink} to={`payment`}>
              Payment
            </Button>
          </Flex>
        </>
      );

    case "scheduleInspection":
      return (
        <>
          <Flex
            direction="column"
            p="20px"
            mr="-20px"
            ml="-20px"
            gap="20px"
            bg={colors.secondary[50]}
          >
            <Flex direction="row" gap="20px" alignItems="center">
              <Text variant="title" size="lg">
                Schedule Your Site Inspection
              </Text>{" "}
              <Spacer />
              <AlertIcon stroke="black" />
            </Flex>
            <Text>
              Please select a date from the available options. <br />
              Ensure your presence on the chosen date for the inspection.
            </Text>
            <Button w="100%" colorScheme="admin" variant="solid">
              Select a date
            </Button>
          </Flex>
        </>
      );

    case "upcomingInspection":
      return (
        <>
          <Flex
            direction="column"
            p="20px"
            mr="-20px"
            ml="-20px"
            gap="20px"
            bg={colors.secondary[50]}
          >
            <Flex direction="row" gap="20px" alignItems="center">
              <Text variant="title" size="lg">
                Upcoming Site Inspection
              </Text>{" "}
              <Spacer />
              <AlertIcon stroke="black" />
            </Flex>
            <Text>
              Mandatory site inspection scheduled. Please ensure your presence
              on the specified date for the inspection.
            </Text>
            <Text>
              Date: <span style={{ fontWeight: "bold" }}>17/08/2023</span>
              <br />
              Time: <span style={{ fontWeight: "bold" }}>9:00 - 12:00</span>
            </Text>
            <Flex
              direction="row"
              gap="20px"
              p="10px"
              color={colors.theme.primary}
            >
              <PlusIcon stroke={colors.theme.primary} />
              <Text fontWeight="semibold">Add to calendar</Text>
            </Flex>
            <Text>
              If you want to change or propose other dates, please contact{" "}
              <span style={{ color: colors.theme.primary }}>support</span>.
            </Text>
          </Flex>
        </>
      );

    case "documentsRequired":
      return (
        <>
          <Flex
            direction="column"
            p="20px"
            mr="-20px"
            ml="-20px"
            gap="20px"
            bg={colors.secondary[50]}
          >
            <Flex direction="row" gap="20px" alignItems="center">
              <Text variant="title" size="lg">
                Additional Documents Needed
              </Text>{" "}
              <Spacer />
              <AlertIcon stroke="black" />
            </Flex>
            <Text>Additional documents are required for your application.</Text>
            <Text>Requested documents:</Text>
            <UnorderedList color={colors.theme.primary} paddingX="10px">
              {application?.pendingDocuments.map((document) => (
                <>
                  <ListItem>
                    <Text fontWeight="bold">{document.name}</Text>
                  </ListItem>
                </>
              ))}
            </UnorderedList>
            <Button
              w="100%"
              colorScheme="admin"
              variant="solid"
              onClick={() =>
                navigate(
                  `../../construction-permit/application/${application?.id}/documents`,
                )
              }
            >
              Upload Documents
            </Button>
          </Flex>
        </>
      );

    default:
      return (
        <>
          <Flex
            direction="column"
            p="20px"
            mr="-20px"
            ml="-20px"
            gap="20px"
            bg={colors.secondary[50]}
          >
            <Text variant="title" size="lg">
              Application Under Review
            </Text>
            <Text>
              Your construction permit application is currently under review by
              our team. We're diligently assessing your submission to ensure
              compliance with all necessary regulations.
            </Text>
            <Text>
              You will receive updates on the progress via E-Mail and within
              your account. If you have any questions or need assistance, our
              support team is here to help.
            </Text>
          </Flex>
        </>
      );
  }
}
