import DownloadIcon from "@assets/icons/download.svg?react";
import DeleteIcon from "@assets/icons/trash.svg?react";
import UploadIcon from "@assets/icons/upload.svg?react";
import {
  Button,
  ButtonGroup,
  CircularProgress,
  Flex,
  Heading,
  Link,
  ListItem,
  Text,
  UnorderedList,
  VStack
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { useQuery } from "react-query";
import { Link as RouterLink, useNavigate, useParams } from "react-router-dom";
import { colors } from "../../chakra-overrides/colors";
import { Status } from "../../components/status/ApplicationStatus";
import { RPCContext } from "../../rpc/rpc";
import { Application } from "../../rpc/types";

export default function FileUpload() {
  const { id } = useParams();
  const rpc = useContext(RPCContext);
  const navigate = useNavigate();

  const [application, setApplication] = useState<Application>({
    id: `${id}`,
    status: Status.DRAFT,
    action: "inReview",
    parcelID: "",
    identification: [],
    documents: [],
    pendingDocuments: []
  });

  const [documents, setDocuments] =
  useState<{
    name: string,
    progress: number,
    url: string
  }[]>([]);

  const { data: applications } = useQuery(
    `applications`,
    rpc.getApplications,
    {
      onSuccess: (applications) => {
        const onGoingApplication = applications.find((application: Application) => application.id === id);
        if (onGoingApplication) {
          localStorage.setItem("application", JSON.stringify(onGoingApplication));
          setApplication(onGoingApplication);
        } else if (localStorage.getItem("application")) {
          const application = localStorage.getItem("application");
          if (application && JSON.parse(application).id == id) {
            const app = JSON.parse(application) as Application;
            setApplication(app);
          } else {
            localStorage.setItem("application", JSON.stringify(application));
          }
        } else {
          navigate("../../construction-permit");
        }
      }
    }
  );

  function mockUpload() {
    if (documents.length < application.pendingDocuments.length) {
      let uploadedDocs: {name: string, progress: number, url: string}[] = [];
      application.pendingDocuments.forEach((document) => {
        uploadedDocs.push({name: document.name, progress: 100, url: ""});
      });
      setDocuments(uploadedDocs);
    } else {
      alert("All required documents are uploaded!");
    }
  }

  function handleChange(event: any) {
    const prevDoc = documents.find(document => document.progress < 100);
    if (prevDoc) prevDoc.progress = prevDoc.progress + 50;

    const documentName = event.target.files[0].name;
    const doc = documents.find(document => document.name == documentName);
    if (!doc) {
      setDocuments(
      [
        ...documents,
        {
          name: documentName,
          progress: 50,
          url: ""
        }
      ]);
    }
  }

  const handleSave = () => {
    application.documents = documents;
    application.pendingDocuments = [];
    localStorage.setItem("application", JSON.stringify(application));
    navigate(`../../construction-permit/application/${id}`);
  }

  const handleRemove = (event: any) => {
    setDocuments(documents.filter((document) => document.name != event.name));
  }

  const handleUpload = () => {
    if (documents.length >= application.pendingDocuments.length) {
      if (application.pendingDocuments.length != 0) {
        application.status = Status.IN_REVIEW;
        application.documents = documents;
        application.pendingDocuments = [];
      }

      if (application.action == "documentsRequired") {
        if (applications) {
          application.action = "inReview";
          rpc.setData(
            "applications",
            JSON.stringify([
              ...applications.filter((appl) => appl.id != application.id),
              application,
            ]),
          );
        return navigate('./sent');
        }
      }

      application.action = "inReview";
      localStorage.setItem("application", JSON.stringify(application));

      if (application.identification.length < 1) navigate(`../${id}/identification`);
      else if (application.parcelID.length < 1) navigate(`../${id}/parcel`);
      else navigate(`../${id}`);
    } else {
      alert("Upload all required documents");
    }
  }

  return (
    <>
      <Flex direction="column" flexGrow={1}>
        <Flex direction="column" gap="20px">
          <Heading variant="headline">Upload Documents</Heading>
          <Text >
            Please upload the following documents:
            </Text>
              <>
                <UnorderedList px="10px">
                  {
                  application.pendingDocuments.map((document, index) =>
                    <ListItem key={index}>
                      {document.name} ({document.extensions})
                    </ListItem>
                    )
                  }
                </UnorderedList>
              </>
            <Text>
            Uploaded documents should be <Link as={RouterLink} to="" style={{color: colors.theme.primary}}>digitally signed</Link> collectively by each person provided during the identification.
          </Text>
        </Flex><br />
        <Flex>
          {/* <Input
            type="file"
            id="fileUpload"
            display="none"
            // accept='.pdf .jpg'
            onChange={handleChange} /> */}
          <Flex
            direction="row"
            gap="30px"
            padding="25px"
            alignContent="center"
            justifyContent="center"
            border="2px dashed grey"
            w="100%"
            borderRadius="10px"
            onClick={() => mockUpload()}>
            {/* onClick={() => document.getElementById("fileUpload")?.click()}> */}
            <UploadIcon stroke="grey" height="2rem" width="2rem" />
            <Text color="grey" size="lg" alignSelf="center">Select a file to upload</Text>
          </Flex>
        </Flex><br />
        <Flex
          borderRadius="10px"
          padding="10px"
          background={colors.theme.light}
          direction="column">
          <Text fontWeight="semibold">
            Uploaded Documents
          </Text><br />
          {
            (documents.length > 0)?(documents.map((document, index) =>
              <React.Fragment key={index}>
                <Flex direction="row" padding="0.3rem" flexGrow={1}>
                  <Text maxW="20rem" alignSelf="center">{document.name}</Text>
                  {
                    (document.progress < 100)?(
                      <>
                        <Flex direction="row" gap="15px" flexGrow={1}>
                          <Text px="10px" color="lightgray">(Uploading ...)</Text>
                          <CircularProgress
                            marginStart="auto"
                            size="1.3rem"
                            value={document.progress}
                            color={colors.theme.primary} />
                        </Flex>
                      </>
                    ):(
                      <>
                        <Flex direction="row" gap="15px" marginStart="auto">
                          <DownloadIcon onClick={undefined} />
                          <DeleteIcon onClick={() => handleRemove(document)} />
                        </Flex>
                      </>
                    )
                  }
                </Flex>
              </React.Fragment>
            )):(
              <Text>There are no documents</Text>
            )
          }
        </Flex>
        <ButtonGroup padding="10px" colorScheme="admin" marginTop="auto">
          <VStack w="100%">
            <Button onClick={() => handleUpload()} variant="solid" w="100%">
            {(application.action != "documentsRequired")?("Save"):("Continue")}
            </Button>
            <Button onClick={() =>  handleSave()} variant="outline" w="100%">
            {(application.action == "documentsRequred")?("Back"):("Save for later")}
            </Button>
          </VStack>
        </ButtonGroup>
      </Flex>
    </>
  );
}
