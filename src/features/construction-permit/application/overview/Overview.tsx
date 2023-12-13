import DownloadIcon from "@assets/icons/download.svg?react";
import {
  Button,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Link,
  ListItem,
  Spacer,
  Stack,
  StackDivider,
  Text,
  UnorderedList,
  useMediaQuery
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link as RouterLink, useNavigate, useParams } from "react-router-dom";
import { colors } from "../../../../chakra-overrides/colors";
import { Status } from "../../../../components/status/ApplicationStatus";
import { RPCContext } from "../../../../rpc/rpc";
import { Application } from "../../../../rpc/types";
import { RoleFormData } from "../identification/RoleForm";
import Action from "./components/Action";
import StepStatus from "./components/StepStatus";

export default function Overview() {
  const { id } = useParams();
  const rpc = useContext(RPCContext);
  const navigate = useNavigate();
  const [enabled, setEnabled] = useState(false);
  const [identificationDone, setIdentificationDone] = useState(false);
  const [idInProgress, setIdInProgress] = useState(false);

  const documentsRequired = [
    {
      name: "Block/Site Plan",
      extensions: ".dwg, .dxf, .dgn, .rfa or .pln",
    },
    {
      name: "Detailed Plans Scale 1:50",
      extensions: ".dwg, .dxf, .dgn, .rfa or .pln",
    },
    {
      name: "Estimate time and cost of the projects",
      extensions: ".pdf",
    },
    {
      name: "Property Title",
      extensions: ".pdf, jpeg",
    },
  ];

  const [application, setApplication] = useState<Application>({
    id: `${id}`,
    status: Status.DRAFT,
    action: "",
    parcelID: "",
    identification: [],
    documents: [],
    pendingDocuments: documentsRequired,
    inspectionDate: ""
  });

  const [isMobile] = useMediaQuery('(max-width: 768px)');


  const { data: applications } = useQuery(`applications`, rpc.getApplications, {
    onSuccess: (applications) => {
      const existingApplication = applications?.find(
        (application) => application.id === id,
      );
      const storageApplication = localStorage.getItem("application");

      if (
        (existingApplication && !storageApplication) ||
        (existingApplication &&
          storageApplication &&
          JSON.parse(storageApplication).id !== existingApplication?.id)
      ) {
        localStorage.setItem(
          "application",
          JSON.stringify(existingApplication),
        );
        setApplication(existingApplication);
      } else if (
        (!existingApplication &&
          storageApplication &&
          JSON.parse(storageApplication).id !== id) ||
        (!existingApplication && !storageApplication)
      ) {
        localStorage.setItem("application", JSON.stringify(application));
        setApplication(application);
      } else {
        if (storageApplication) setApplication(JSON.parse(storageApplication));
      }
    },
  });

  const handleCreate = () => {
    if (applications) {
        application.action = "inReview";
        application.status = Status.IN_REVIEW;
        rpc.setData(
          "applications",
          JSON.stringify([
            ...applications.filter((appl) => appl.id != application.id),
            application,
          ]),
        );
    } else {
      rpc.setData("applications", JSON.stringify([application]));
    }
    navigate("../../construction-permit/my-applications");
  };

  const handleDelete = () => {
    if (applications) {
      rpc.setData("applications", JSON.stringify(applications.filter((app) => app.id !== application.id)))
      .then(() => {
        localStorage.removeItem("application");
        navigate("../../construction-permit/my-applications");
      });
    }
  }

  const saveDraft = () => {
    if (applications) {
      const th = applications.find((app) => app.id == application.id);
      if (th) {
        rpc.setData("applications", JSON.stringify([...applications.filter((appl) => appl.id != th.id), application]));
      } else {
        rpc.setData("applications", JSON.stringify([...applications, application]));
      }
    }
  }

  useEffect(() => {
    const parcelDone= application.parcelID.length != 0;
    const undoneID = application.identification.length > 0 && application.identification.length < 4;
    setIdInProgress(undoneID);
    setIdentificationDone(application.identification.length == 4);
    const documentsDone = application.pendingDocuments.length == 0;
    setEnabled(parcelDone && identificationDone && documentsDone);
  });

  return (
    <Flex mb="30px" gap="20px" direction="column" flexGrow={1}>
      <Grid
        gap="30px"
        templateAreas={{
          base: `"heading" "actions"`,
          md: `"heading actions"`,
        }}
      >
        <GridItem area="heading"
          gap="10px"
          flexDirection="column"
          display="flex">
          <Flex>
            <Text variant="title" size="md" mt="5px">
              Application Overview{" "}
              <span style={{ color: colors.secondary[600] }}>#{id}</span>
            </Text>
          </Flex>
          <Flex
            direction="column"
            alignSelf="bottom"
            display={{base: "none", md: "flex"}}>
            <StepStatus
              id={application.id}
              activeStep="overview"
              status={
                {
                  parcel: application.parcelID === "" ? Status.NOT_STARTED : Status.COMPLETED,
                  identification:
                    identificationDone?Status.COMPLETED:(idInProgress?Status.IN_PROGRESS:Status.NOT_STARTED),
                  documents: (
                    application.action === "documentsRequired" &&
                    application.pendingDocuments.length > 0
                      ? Status.IN_PROGRESS
                      : (application.documents.length == 0)
                      ? Status.NOT_STARTED
                      : (application.documents.length > 0 && application.pendingDocuments.length > 0)?Status.IN_PROGRESS:Status.COMPLETED)
                }
              }
            />
          </Flex>
        </GridItem>
        <GridItem
          area="actions" gap="20px" display="flex" flexDirection="column"  mb="30px">
          <Heading size="md" variant="title">
            Construction Permit Application
          </Heading>
          <Text>
            For a successful application, please ensure all required documents and
            information are provided accurately for the construction permit.
          </Text>
          <Action
            title="Parcel ID"
            showStatus = {isMobile}
            status={ application.parcelID === "" ? Status.NOT_STARTED : Status.COMPLETED }
            action={
              <Link
                as={RouterLink}
                to="parcel"
                textDecoration="underline"
                color={colors.theme.primary}
              >
                {application.parcelID === "" ? "Add Parcel ID" : "Edit Parcel ID"}
              </Link>
            }
          >
          <>
            <Text>
              Provide the Parcel ID of the construction site in your application.
            </Text>
            {application.parcelID.length != 0 && (
              <Flex
              backgroundColor={colors.secondary[50]}
              direction="column"
              gap="20px"
              p="20px"
              borderRadius="16px"
            >
                <Stack divider={<StackDivider />} spacing="10px">
                  <HStack w="100%">
                    <dl style={{ width: "50%" }}>
                      <Text fontWeight="semibold">Parcel ID:</Text>
                    </dl>
                    <dd style={{ width: "50%" }}>
                      <Text>{application.parcelID}</Text>
                    </dd>
                  </HStack>
                  <HStack w="100%">
                    <dl style={{ width: "50%" }}>
                      <Text fontWeight="semibold">Coordinates:</Text>
                    </dl>
                    <dd style={{ width: "50%" }}>
                      <Text>
                        40° 7′ 24″ North<br />
                        82° 54′ 48″ West
                        </Text>
                    </dd>
                  </HStack>
                  <HStack w="100%">
                    <dl style={{ width: "50%" }}>
                      <Text fontWeight="semibold">The Total Area (m²):</Text>
                    </dl>
                    <dd style={{ width: "50%" }}>
                      <Text>2784</Text>
                    </dd>
                  </HStack>
                  <HStack w="100%">
                    <dl style={{ width: "50%" }}>
                      <Text fontWeight="semibold">Floor Area Ratio (FAR):</Text>
                    </dl>
                    <dd style={{ width: "50%" }}>
                      <Text>1.5</Text>
                    </dd>
                  </HStack>
                  <HStack w="100%">
                    <dl style={{ width: "50%" }}>
                      <Text fontWeight="semibold">Land-use Function:</Text>
                    </dl>
                    <dd style={{ width: "50%" }}>
                      <Text>Commercial + Residential</Text>
                    </dd>
                  </HStack>
                  <HStack w="100%">
                    <dl style={{ width: "50%" }}>
                      <Text fontWeight="semibold">Restrictions:</Text>
                    </dl>
                    <dd style={{ width: "50%" }}>
                      <Text>
                        Building Height<br/>
                        Regulations Report<br/>
                        2025 Master Plan of Digital Island
                      </Text>
                    </dd>
                  </HStack>

                </Stack>
              </Flex >
            )}
          </>
          </Action>
          <Divider />
          <Action
            title="Identification"
            showStatus = {isMobile}
            status= { identificationDone?Status.COMPLETED:(idInProgress?Status.IN_PROGRESS:Status.NOT_STARTED) }
            action={
              <Link
                as={RouterLink}
                to="identification"
                textDecoration="underline"
                color={colors.theme.primary}
              >
                {identificationDone?"Edit contact details":"Add contact details"}
              </Link>
            }
          >
          <>
            <Text>
              Provide the contact information for the owner, contractor, and lead
              architect or engineer.
            </Text>
            {application.identification.length != 0 && (
              <Flex
                backgroundColor={colors.secondary[50]}
                direction="column"
                gap="20px"
                p="20px"
                borderRadius="16px"
              >
                {application.identification.map((role) => (
                  (role.data.name != null) && (
                  <Stack divider={<StackDivider />} spacing="10px">
                    <Flex direction="row">
                      <Text variant="title" size="lg">
                        {RoleFormData(role.role).role}
                      </Text>
                    </Flex>
                    <HStack w="100%">
                      <dl style={{ width: "50%" }}>
                        <Text fontWeight="semibold">Name</Text>
                      </dl>
                      <dd style={{ width: "50%" }}>
                        <Text>{role.data.name}</Text>
                      </dd>
                    </HStack>
                    <HStack w="100%">
                      <dl style={{ width: "50%" }}>
                        <Text fontWeight="semibold">ID</Text>
                      </dl>
                      <dd style={{ width: "50%" }}>
                        <Text>{role.data.idNumber}</Text>
                      </dd>
                    </HStack>
                    <HStack w="100%">
                      <dl style={{ width: "50%" }}>
                        <Text fontWeight="semibold">E-Mail</Text>
                      </dl>
                      <dd style={{ width: "50%" }}>
                        <Text>{role.role.toLowerCase()}@email.com</Text>
                      </dd>
                    </HStack>
                    <HStack w="100%">
                      <dl style={{ width: "50%" }}>
                        <Text fontWeight="semibold">Phone Number</Text>
                      </dl>
                      <dd style={{ width: "50%" }}>
                        <Text>(132) 135 102</Text>
                      </dd>
                    </HStack>
                  </Stack>
                  )
                ))}
              </Flex>
            )}
          </>
          </Action>
          <Divider />
          <Action
            title="Documents"
            showStatus = {isMobile}
            status = {
              application.action === "documentsRequired" &&
              application.pendingDocuments.length > 0
              ? Status.ACTION_NEEDED
              : (application.documents.length == 0)
              ? Status.NOT_STARTED
              : (application.documents.length > 0 && application.pendingDocuments.length > 0)?Status.IN_PROGRESS:Status.COMPLETED
            }
            action={
              <Link
                as={RouterLink}
                to="documents"
                textDecoration="underline"
                color={colors.theme.primary}
              >
                Upload documents
              </Link>
            }>
            <Text>
              Uploaded documents should be digitally signed by each person that is
              identified during the second step - identification.
            </Text>
            <>
              <UnorderedList paddingStart="10px">
                    <ListItem key="Block/Site Plan">Block/Site Plan</ListItem>
                    <ListItem key="Detailed Plans Scale">Detailed Plans Scale 1:50 </ListItem>
                    <ListItem key="Estimate time and cost of projects">Estimate time and cost of projects</ListItem>
                    <ListItem key="Property Title">Property Title</ListItem>
              </UnorderedList>
              {application.documents.length > 0 && (
                <Flex
                  mt="20px"
                  backgroundColor={colors.secondary[50]}
                  direction="column"
                  gap="20px"
                  p="20px"
                  borderRadius="16px"
                >
                  <Stack divider={<StackDivider />} spacing="10px">
                    <Text variant="title" size="lg">
                      Uploaded documents
                    </Text>
                    {application.documents.map((document) => (
                        <HStack w="100%">
                        <dl style={{ width: "50%" }}>
                          <Text>{document.name}</Text>
                        </dl><Spacer />
                          <Flex direction="row" gap="15px" marginStart="auto">
                            <DownloadIcon onClick={undefined} />
                          </Flex>
                      </HStack>
                      ))}
                  </Stack>
                </Flex>
              )}
            </>
          </Action>
          <Text variant="label">
            The payment fee will be calculated after reviewing the application.
          </Text>
          <Flex marginTop="auto"
            mb="20px"
            gap="20px"
            direction={{base: "column", md: "row"}}>
            <Grid
              autoColumns="30%"
              gap="20px"
              width="100%"
              templateColumns="auto"
              templateAreas={{
                xs: `"a" "b" "c"`,
                sm: `"a" "b" "c"`,
                md: `"c b a"`,
            }}>
              <Button gridArea="a" width="100%" disabled={!enabled} colorScheme={enabled?"admin":"disabled"} onClick={() => enabled?handleCreate():""}>
                Apply
              </Button>
              <Button gridArea="b" width="100%" onClick={() => saveDraft()}as={RouterLink} to="/" variant="outline" colorScheme="admin">
                Back to Home
              </Button>
              <Button gridArea="c" width="100%" onClick={() => handleDelete()} variant="plain" color={colors.theme.info}>
                Delete Application
              </Button>
            </Grid>
          </Flex>
        </GridItem>
      </Grid>
    </Flex>
  );
}
