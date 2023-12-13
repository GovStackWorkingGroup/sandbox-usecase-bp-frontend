import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  HStack,
  Input,
  Text,
  VStack
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { colors } from "../../../../chakra-overrides/colors";
import ListCard from "../../../../components/list-card/ListCard";
import { Status } from "../../../../components/status/ApplicationStatus";
import { Application } from "../../../../rpc/types";
import StepStatus from "../overview/components/StepStatus";

export default function Parcel() {
  const { id } = useParams();
  const [mapOpened, setMapOpened] = useState(false);
  const [parcelId, setParcelId] = useState("");
  const [identificationDone, setIdentificationDone] = useState(false);
  const [idInProgress, setIdInProgress] = useState(false);
  const [application, setApplication] = useState<Application>({
    id: `${id}`,
    status: Status.DRAFT,
    parcelID: "",
    action: "inReview",
    identification: [],
    documents: [],
    pendingDocuments: [],
    inspectionDate: ""
  });
  const navigate = useNavigate();

  const storageApplication = localStorage.getItem("application");

  useEffect(() => {
    if (storageApplication) {
      const application = JSON.parse(storageApplication) as Application;
      setParcelId(application.parcelID);
      setApplication(application);
      const undoneID = application.identification.length > 0 && application.identification.length < 4;
      setIdInProgress(undoneID);
      setIdentificationDone(application.identification.length == 4);
    } else {
      navigate("../../construction-permit");
    }
  }, []);

const handleContinue = () => {
  if (application) application.parcelID = parcelId;
    setApplication(application);
    localStorage.setItem("application", JSON.stringify(application));

    if (application.identification.length < 1) navigate(`../${id}/identification`)
    else if(application.pendingDocuments.length > 0) navigate(`../${id}/documents`);
    else navigate(`../${id}`);
  }


const handleSave = () => {
  if (application) application.parcelID = parcelId;
    setApplication(application);
    localStorage.setItem("application", JSON.stringify(application));
    navigate(`../${id}`);
  }

  return (
    <>
      <Flex mb="30px" gap="20px" direction="column">
        <Grid
            gap="20px"
            templateAreas={{
              xs: `"heading" "parcel"`,
              sm: `"heading" "parcel"`,
              md: `"heading parcel"`,
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
                activeStep="parcel"
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
          <GridItem area="parcel" display="flex" flexDirection="column" gap="20px">
            <Heading size="md" variant="title">
              Parcel ID
            </Heading>
            <Text>Please enter the Parcel ID of proposed work site.</Text>
            <Text size="sm">
              Your Parcel ID can be found on property title, site plan, land
              cadastre or you can select via using the map.
            </Text>
            <Flex direction="column" gap="10px">
              <FormLabel>Parcel ID</FormLabel>
              <Flex gap="10px" direction={{base:"column", md: "row"}}>
                <FormControl width={{base: "100%", md:"70%"}}>
                  <Input
                  maxLength={7}
                  defaultValue={parcelId}
                  onChange={(e) => setParcelId(e.target.value)}
                  placeholder="What is the Parcel ID? (7-Digit Parcel ID)" />
                </FormControl>
                <Button 
                width={{base: "100%", md:"30%"}}
                  onClick={() => setMapOpened(true)}
                  variant="outline"
                  colorScheme="admin"
                >
                  Select from the map
                </Button>
              </Flex>
            </Flex>
            {
              (parcelId.length != 7) ? (
                <Flex
                  direction="column"
                  borderRadius="16px"
                  backgroundColor={colors.theme.light}
                  p="10px"
                >
                  <VStack spacing="10px" alignItems="left">
                    <Text variant="title" size="lg">
                      Parcel Information
                    </Text>
                    <Text>
                      Please enter the Parcel ID to see the parcel information.
                    </Text>
                  </VStack>
                </Flex>
              ) : (
                <>
                  <ListCard>
                    <Text variant="title" size="lg">
                      Parcel Information
                    </Text>
                    <HStack w="100%">
                      <dl style={{ width: "50%" }}>
                        <Text>Parcel ID Number:</Text>
                      </dl>
                      <dd style={{ width: "50%" }}>
                        <Text>{parcelId}</Text>
                      </dd>
                    </HStack>
                    <HStack w="100%">
                      <dl style={{ width: "50%" }}>
                        <Text>Coordinates</Text>
                      </dl>
                      <dd style={{ width: "50%" }}>
                        <Text>40° 7' 24″ North</Text>
                        <Text>82° 54' 48″ West</Text>
                      </dd>
                    </HStack>
                    <HStack w="100%">
                      <dl style={{ width: "50%" }}>
                        <Text>The Total Area (sq.m):</Text>
                      </dl>
                      <dd style={{ width: "50%" }}>
                        <Text>2784</Text>
                      </dd>
                    </HStack>
                    <HStack w="100%">
                      <dl style={{ width: "50%" }}>
                        <Text>Floor Area Ratio (FAR)</Text>
                      </dl>
                      <dd style={{ width: "50%" }}>
                        <Text>1.5</Text>
                      </dd>
                    </HStack>
                    <HStack w="100%">
                      <dl style={{ width: "50%" }}>
                        <Text>Land-use Function:</Text>
                      </dl>
                      <dd style={{ width: "50%" }}>
                        <Text>Commercial + Residential</Text>
                      </dd>
                    </HStack>
                    <HStack w="100%">
                      <dl style={{ width: "50%" }}>
                        <Text>Restrictions:</Text>
                      </dl>
                      <dd style={{ width: "50%" }}>
                        <Text>Building Height</Text>
                        <Text>Regulations Report</Text>
                        <Text>2025 Master Plan of Digital Island</Text>
                      </dd>
                    </HStack>
                  </ListCard>
                </>
              )
            }
            <Grid
                gap="10px"
                w="100%"
                gridAutoColumns={{base:"100%", md: "50%"}}
                templateAreas={{
                  base: `"a" "b"`,
                  md: `"b a"`
              }}>
              <Button gridArea="a" width="100%" colorScheme={(parcelId.length == 7)?"admin":"disabled"} disabled={(parcelId.length != 7)} onClick={() => (parcelId.length == 7)?handleContinue():""}>
                Continue
              </Button>
              <Button gridArea="b" width="100%" onClick={() => handleSave()} variant="outline" colorScheme="admin">
                Save for later
              </Button>
            </Grid>
          </GridItem>
        </Grid>
      </Flex>
    </>
  );
}
