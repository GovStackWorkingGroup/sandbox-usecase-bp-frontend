import {
  Button,
  Flex,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
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

export default function ReviewApplication() {
  const { id } = useParams();
  const rpc = useContext(RPCContext);
  const navigate = useNavigate();
  const [application, setApplication] = useState<Application>();

  useQuery(`applications`, rpc.getApplications, {
    onSuccess: (application) => {
      const currentApplication = application.find(
        (application: Application) => application.id === id,
      );
      setApplication(currentApplication);
    },
  });

  console.log(application);

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
          <ApplicationStatus status={application.status} />
        </Flex>
        <ApplicationAction action={application.action} id={application.id} />
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

            {application.pendingDocuments.length > 0 ? (
              <>
                <AccordionItem title="Pending documents">
                  <UnorderedList gap="20px" p="10px">
                    {application.pendingDocuments.map((document) => (
                      <>
                        <ListItem>
                          {document.name} ( {document.extensions} )
                        </ListItem>
                      </>
                    ))}
                  </UnorderedList>
                  <Button
                    onClick={() =>
                      navigate(
                        `../../construction-permit/application/${application.id}/documents`,
                      )
                    }
                  >
                    Upload Documents
                  </Button>
                </AccordionItem>
              </>
            ) : (
              ""
            )}
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
