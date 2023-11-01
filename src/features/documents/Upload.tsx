import DownloadIcon from "@assets/icons/download.svg?react";
import DeleteIcon from "@assets/icons/trash.svg?react";
import UploadIcon from "@assets/icons/upload.svg?react";
import {
  Button,
  ButtonGroup,
  CircularProgress,
  Flex,
  Heading,
  Input,
  Link,
  ListItem,
  Text,
  UnorderedList,
  VStack
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useQuery } from "react-query";
import { Link as RouterLink, useParams } from "react-router-dom";
import { colors } from "../../chakra-overrides/colors";
import { RPCContext } from "../../rpc/rpc";
import { Application } from "../../rpc/types";

export default function FileUpload() {
  const { id } = useParams();
  const rpc = useContext(RPCContext);

  const [additionalDocumentsRequired, setAdditionalDocumentsRequired] = useState<{name: string, extensions: string}[]>([]);

  useQuery(
    `applications`,
    rpc.getApplications,
    {
      onSuccess: (application) => {
        const currentApplication = application.find((application: Application) => application.id === id);
       if (currentApplication) setAdditionalDocumentsRequired(currentApplication.pendingDocuments);
      }
    }
  );

  const [documents, setDocuments] =
  useState<{
    name: string,
    progress: number,
    url: string
  }[]>([]);

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

  return (
    <>
      <Flex direction="column" flexGrow={1}>
        <Flex direction="column" gap="20px">
          <Heading variant="headline">Upload Documents</Heading>
          <Text >
            Please upload the following documents:
            </Text>
            {
              (additionalDocumentsRequired && additionalDocumentsRequired.length > 0)?(
                <>
                  <UnorderedList px="10px">
                    {
                    additionalDocumentsRequired.map((document) =>
                      <ListItem>
                        {document.name} ({document.extensions})
                      </ListItem>
                      )
                    }
                  </UnorderedList>
                </>
              ):(
                <>
                  <UnorderedList px="10px">
                    <ListItem>
                      Block/Site Plan (.dwg, .dxf, .dgn, .rfa or .pln)
                    </ListItem>
                    <ListItem>
                      Detailed Plans Scale 1:50 (.dwg, .dxf, .dgn, .rfa or .pln)
                    </ListItem>
                    <ListItem>
                      Estimate time and cost of the projects (.pdf)
                    </ListItem>
                    <ListItem>
                      Property Title (.pdf or .jpeg)
                    </ListItem>
                  </UnorderedList>
                </>
              )
            }
            <Text>
            Uploaded documents should be <Link as={RouterLink} to="" style={{color: colors.theme.primary}}>digitally signed</Link> collectively by each person provided during the identification.
          </Text>
        </Flex><br />
        <Flex>
          <Input
            type="file"
            id="fileUpload"
            display="none"
            // accept='.pdf .jpg'
            onChange={handleChange} />
          <Flex
            direction="row"
            gap="30px"
            padding="25px"
            alignContent="center"
            justifyContent="center"
            border="2px dashed grey"
            w="100%"
            borderRadius="10px"
            onClick={() => document.getElementById("fileUpload")?.click()}>
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
            (documents.length > 0)?(documents.map(document =>
              <>
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
                          <DeleteIcon onClick={undefined} />
                        </Flex>
                      </>
                    )
                  }
                </Flex>
              </>
            )):(
              <Text>There are no documents</Text>
            )
          }
        </Flex>
        <ButtonGroup padding="10px" colorScheme="admin" marginTop="auto">
          <VStack w="100%">
            {
              (additionalDocumentsRequired && additionalDocumentsRequired.length > 0)?(
                <>
                  <Button as={RouterLink} to="./sent" variant="solid" w="100%">
                    Save
                  </Button>
                  <Button as={RouterLink} to="" variant="outline" w="100%">
                    Back
                  </Button>
                </>
              ):(
                <>
                  <Button as={RouterLink} to="./" variant="solid" w="100%">
                    Continue
                  </Button>
                  <Button as={RouterLink} to="./" variant="outline" w="100%">
                    Save for later
                  </Button>
                </>
              )
            }
          </VStack>
        </ButtonGroup>
      </Flex>
    </>
  );
}
