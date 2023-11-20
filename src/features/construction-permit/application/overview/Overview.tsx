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
import { useContext, useState } from "react";
import { useQuery } from "react-query";
import { Link as RouterLink, useNavigate, useParams } from "react-router-dom";
import { colors } from "../../../../chakra-overrides/colors";
import { Status } from "../../../../components/status/ApplicationStatus";
import { RPCContext } from "../../../../rpc/rpc";
import { Application } from "../../../../rpc/types";
import Action from "./components/Action";

export default function Overview() {
  const { id } = useParams();
  const rpc = useContext(RPCContext);
  const navigate = useNavigate();

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
  });

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
      const th = applications.find((app) => app.id == application.id);
      if (th) {
        if (th.action == "documentsRequired") application.action = "inReview";
        rpc.setData(
          "applications",
          JSON.stringify([
            ...applications.filter((appl) => appl.id != th.id),
            application,
          ]),
        );
      } else {
        rpc.setData(
          "applications",
          JSON.stringify([...applications, application]),
        );
      }
    } else {
      rpc.setData("applications", JSON.stringify([application]));
    }
    navigate("../../construction-permit/my-applications");
  };

  const handleDelete = () => {
    localStorage.removeItem("application");
    navigate("../../construction-permit");
  };

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
          status={
            application.parcelID === "" ? Status.NOT_STARTED : Status.COMPLETED
          }
          action={
            <Link
              as={RouterLink}
              to="parcel"
              variant="underline"
              color={colors.theme.primary}
            >
              {application.parcelID === "" ? "Add Parcel ID" : "Edit Parcel ID"}
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
          status={
            application.identification.length == 0
              ? Status.NOT_STARTED
              : Status.COMPLETED
          }
          action={
            <Link
              as={RouterLink}
              to="identification"
              variant="underline"
              color={colors.theme.primary}
            >
              {application.identification.length == 0
                ? "Add contact details"
                : "Edit contact details"}
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
          status={
            application.action === "documentsRequired" &&
            application.pendingDocuments.length > 0
              ? Status.ACTION_NEEDED
              : application.status === Status.DRAFT
              ? Status.NOT_STARTED
              : Status.COMPLETED
          }
          action={
            <Link
              as={RouterLink}
              to="documents"
              variant="underline"
              color={colors.theme.primary}
            >
              {application.documents.length <
              application.pendingDocuments.length
                ? "Upload documents"
                : ""}
            </Link>
          }
        >
          <Text>
            Uploaded documents should be digitally signed by each person that is
            identified during the second step - identification.
          </Text>
          <UnorderedList>
            {application.pendingDocuments.map((document) => (
              <ListItem key={document.name}>{document.name}</ListItem>
            ))}
          </UnorderedList>
        </Action>
        <Text variant="label">
          The payment fee will be calculated after reviewing the application.
        </Text>
      </Flex>
      <Flex marginTop="auto" mb="20px">
        <ButtonGroup flexDirection="column" w="100%" gap="10px">
          <Button colorScheme="admin" onClick={() => handleCreate()}>
            Apply
          </Button>
          <Button as={RouterLink} to="/" variant="outline" colorScheme="admin">
            Back to Home
          </Button>
          <Button
            onClick={() => handleDelete()}
            variant="plain"
            color={colors.theme.info}
          >
            Delete Application
          </Button>
        </ButtonGroup>
      </Flex>
    </Flex>
  );
}
