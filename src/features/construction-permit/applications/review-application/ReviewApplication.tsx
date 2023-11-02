import AlertIcon from "@assets/icons/alert-circle.svg?react";
import PlusIcon from "@assets/icons/plus.svg?react";
import { Button, Flex, Heading, ListItem, Spacer, Text, UnorderedList } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import Accordion from "../../../../components/accordion/Accordion";
import AccordionItem from "../../../../components/accordion/AccordionItem";
import Breadcrumbs, {
  BreadcrumbPaths,
} from "../../../../components/breadcrumbs/Breadcrumbs";
import ApplicationStatus from "../../../../components/status/ApplicationStatus";
import { RPCContext } from "../../../../rpc/rpc";
import { Application } from "../../../../rpc/types";
import ApplicationAction from "./application-action/ApplicationAction";
import { colors } from "../../../../chakra-overrides/colors";

export default function ReviewApplication() {
  const { id } = useParams();
  const rpc = useContext(RPCContext);
  const navigate = useNavigate();
  const [application, setApplication] = useState<Application>();

  const status = (state: string, application: Application) => {
    switch (state) {
      case ("inReview"):
        return (
          <>
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
              account. If you have any questions or need assistance, our <span style={{ color: colors.theme.primary }}>support
              team</span> is here to help.
            </Text>
          </>
        );
      case ("scheduleInspection"):
        return (
          <>
            <Flex direction="row" gap="20px" alignItems="center">
              <Text variant="title" size="lg">
                Schedule Your Site Inspection
              </Text> <Spacer />
              <AlertIcon stroke="black"/>
            </Flex>
            <Text>
              Please select a date from the available options. <br/>Ensure your presence on the chosen date for the inspection.
            </Text>
            <Button w="100%" colorScheme="admin" variant="solid">Select a date</Button>
          </>
        );
      case ("upcomingInspection"):
        return (
          <>
            <Flex direction="row" gap="20px" alignItems="center">
              <Text variant="title" size="lg">
                Upcoming Site Inspection
              </Text> <Spacer />
              <AlertIcon stroke="black"/>
            </Flex>
            <Text>
              Mandatory site inspection scheduled. Please ensure your presence on the specified date for the inspection.
            </Text>
            <Text>
              Date: <span style={{ fontWeight: "bold" }}>17/08/2023</span><br />
              Time: <span style={{ fontWeight: "bold" }}>9:00 - 12:00</span>
            </Text>
            <Flex direction="row" gap="20px" p="10px" color={colors.theme.primary}>
              <PlusIcon stroke={colors.theme.primary}/>
              <Text fontWeight="semibold">Add to calendar</Text>
            </Flex>
            <Text>
              If you want to change or propose other dates, please contact <span style={{ color: colors.theme.primary}}>support</span>.
            </Text>
            <Button w="100%" colorScheme="admin" variant="solid">Select a date</Button>
          </>
        );
      case ("documentsRequired"):
        return (
          <>
            <Flex direction="row" gap="20px" alignItems="center">
            <Text variant="title" size="lg">
              Additional Documents Needed
            </Text> <Spacer />
            <AlertIcon stroke="black"/>
            </Flex>
            <Text>
              Additional documents are required for your application.
            </Text>
            <Text>
              Requested documents:
            </Text>
            <UnorderedList color={colors.theme.primary} paddingX="10px">
              {application?.pendingDocuments.map((document) =>
                <>
                  <ListItem>
                    <Text fontWeight="bold">{document.name}</Text>
                  </ListItem>
                </>
              )}
            </UnorderedList>
            <Button w="100%" colorScheme="admin" variant="solid" onClick={() => navigate(`../../construction-permit/application/${application?.id}/documents`)}>Upload Documents</Button>
          </>
        );
      case ("paymentRequired"):
        return (
          <>
            <Text variant="title" size="lg">
              Payment Required
            </Text>
            <Text>
              To facilitate the processing of your application, please proceed with the payment of the required fee.
              Once payment is complete, your application will be forwarded to stakeholders for clearance.
            </Text>
            <Button w="100%" colorScheme="admin" variant="solid">Payment</Button>
          </>
        );
    }
  }

  useQuery(
    `applications`,
    rpc.getApplications,
    {
      onSuccess: (application) => {
        const currentApplication = application.find((application: Application) => application.id === id);
        setApplication(currentApplication);
      }
    }
  );

  const breadcrumbs: BreadcrumbPaths = [
    ["Housing", null],
    ["Construction Permit", "/housing/construction-permit"],
    ["My Applications", `/housing/construction-permit/my-applications`],
    [
      `Permit application #${id}`,
      `/housing/construction-permit/my-applications/review/${id}`,
    ],
  ];

  return application ? (
    <>
      <Breadcrumbs path={breadcrumbs} />
      <Flex direction="column" gap="20px" mb="20px" flexGrow="1">
        <Heading variant="headline">Construction Permit Application</Heading>
        <Flex alignItems="center" justifyContent="space-between">
          <Text>Application #{id}</Text>
          {}
          <ApplicationStatus status={application.status} />
        </Flex>
          {(application.action)?(
            <>
              <Flex
                direction="column"
                p="20px"
                mr="-20px"
                ml="-20px"
                gap="20px"
                bg={colors.secondary[50]}
              >
                {(application.action)?status(application.action, application):("")}
              </Flex>
            </>
          ):("")}
        <Flex direction="column" gap="20px">
          <Text variant="title" size="lg">
            Application Details
          </Text>
          <Accordion>
            <AccordionItem title="Parcel ID">
              <>{application.parcelID}</>
            </AccordionItem>

            <AccordionItem title="Identification">
              <>
                {application.identification.length > 0 ? (
                  <>
                    <UnorderedList gap="20px" p="10px">
                      {application.identification.map((role) => (
                        <>
                          <ListItem>
                            <b>{role.role}</b>: <br />
                            {role.data.idNumber} ({role.data.name})
                            <br />
                            <br />
                          </ListItem>
                        </>
                      ))}
                    </UnorderedList>
                  </>
                ) : (
                  ""
                )}
              </>
            </AccordionItem>
            <AccordionItem title="Documents">
              {application.documents.length > 0 ? (
                <>
                  <UnorderedList gap="20px" p="10px">
                    {application.documents.map((document) => (
                      <>
                        <ListItem>{document.name}</ListItem>
                      </>
                    ))}
                  </UnorderedList>
                </>
              ) : (
                ""
              )}
            </AccordionItem>
          </Accordion>
        </Flex>
        <Button
          colorScheme="admin"
          mt="auto"
          variant="outline"
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
      </Flex>
    </>
  ) : (
    ""
  );
}
