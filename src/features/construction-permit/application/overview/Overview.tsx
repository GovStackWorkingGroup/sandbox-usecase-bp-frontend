import {
  Button,
  ButtonGroup,
  Divider,
  Flex,
  Heading,
  Link,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { Link as RouterLink, useParams } from "react-router-dom";
import { colors } from "../../../../chakra-overrides/colors";
import { Status } from "../../../../components/status/ApplicationStatus";
import Action from "./components/Action";

export default function Overview() {
  const { id } = useParams();
  return (
    <Flex direction="column" flexGrow={1}>
      <Flex mb="30px" gap="20px" direction="column">
        <Heading size="md" variant="title">
          Construction Permit Application
        </Heading>
        <Text>
          For a successful application, please ensure all required documents and
          information are provided accurately for the construction permit.
        </Text>
      </Flex>
      <Flex gap="20px" direction="column" mb="20px">
        <Text variant="title">
          Application Overview{" "}
          <span style={{ color: colors.secondary[600] }}>#{id}</span>
        </Text>
        <Action
          title="Parcel ID"
          status={Status.NOT_STARTED}
          action={
            <Link
              as={RouterLink}
              to="parcel"
              variant="underline"
              color={colors.theme.primary}
            >
              Add Parcel ID
            </Link>
          }
        >
          <Text>
            Provide the Parcel ID of the construction site in your application.
          </Text>
        </Action>
        <Divider />
        <Action
          title="Identification"
          status={Status.NOT_STARTED}
          action={
            <Link
              as={RouterLink}
              to="identification"
              variant="underline"
              color={colors.theme.primary}
            >
              Add contact details
            </Link>
          }
        >
          <Text>
            Provide the contact information for the owner, contractor, and lead
            architect or engineer.
          </Text>
        </Action>
        <Divider />

        <Action
          title="Documents"
          status={Status.NOT_STARTED}
          action={
            <Link
              as={RouterLink}
              to="documents"
              variant="underline"
              color={colors.theme.primary}
            >
              Upload documents
            </Link>
          }
        >
          <Text>
            Uploaded documents should be digitally signed by each person that is
            identified during the second step - identification.
          </Text>
          <UnorderedList>
            <ListItem>Block/Site Plan</ListItem>
            <ListItem>Detailed Plans Scale 1:50</ListItem>
            <ListItem>Estimate time and cost of the projects</ListItem>
            <ListItem>Property Title</ListItem>
          </UnorderedList>
        </Action>
        <Text variant="label">
          The payment fee will be calculated after reviewing the application.
        </Text>
      </Flex>
      <Flex marginTop="auto" mb="20px">
        <ButtonGroup flexDirection="column" w="100%" gap="10px">
          <Button colorScheme="admin" as={RouterLink} to="sent">
            Apply
          </Button>
          <Button variant="outline" colorScheme="admin">
            Back to Home
          </Button>
          <Button variant="plain" color={colors.theme.info}>
            Delete Application
          </Button>
        </ButtonGroup>
      </Flex>
    </Flex>
  );
}
