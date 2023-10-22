import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { colors } from "../../../../chakra-overrides/colors";
import Accordion from "../../../../components/accordion/Accordion";
import AccordionItem from "../../../../components/accordion/AccordionItem";
import Breadcrumbs, {
  BreadcrumbPaths,
} from "../../../../components/breadcrumbs/Breadcrumbs";
import ApplicationStatus, {
  Status,
} from "../../../../components/status/ApplicationStatus";
import { ROLE } from "../../application/identification/Identification";

const application = {
  id: "987654",
  status: Status.IN_REVIEW,
  parcel: "124124",
  identification: {
    [ROLE.PROPERTY_OWNER]: { name: "Random Name", idNumber: 320592835 },
    [ROLE.PRINCIPAL_CONTRACTOR]: {
      name: "Contractor Name",
      idNumber: 32680236,
    },
    [ROLE.LEAD_ARCHITECT_OR_ENGINEER]: {
      name: "Engineer Name",
      idNumber: 2352358,
    },
    [ROLE.OTHER]: { name: null, idNumber: null },
  },
  documents: [],
};

export default function ReviewApplication() {
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

  return (
    <>
      <Breadcrumbs path={breadcrumbs} />
      <Flex direction="column" gap="20px" mb="20px" flexGrow="1">
        <Heading variant="headline">Construction Permit Application</Heading>
        <Flex alignItems="center" justifyContent="space-between">
          <Text>Application #{id}</Text>
          <ApplicationStatus status={application.status} />
        </Flex>
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
            You will receive updates on the progress via E-Mail and within your
            account. If you have any questions or need assistance, our support
            team is here to help.
          </Text>
        </Flex>
        <Flex direction="column" gap="20px">
          <Text variant="title" size="lg">
            Application Details
          </Text>
          <Accordion>
            <AccordionItem title="Parcel ID">
              <></>
            </AccordionItem>
            <AccordionItem title="Identification">
              <></>
            </AccordionItem>
            <AccordionItem title="Documents">
              <></>
            </AccordionItem>
          </Accordion>
        </Flex>
        <Button colorScheme="admin" mt="auto" variant="outline">
          Back
        </Button>
      </Flex>
    </>
  );
}
