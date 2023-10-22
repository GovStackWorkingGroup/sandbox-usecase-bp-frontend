import {
  Button,
  ButtonGroup,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import ListCard from "../../../../components/list-card/ListCard";

export default function Parcel() {
  const [mapOpened, setMapOpened] = useState(false);

  return (
    <>
      <Flex mb="30px" gap="20px" direction="column">
        <Heading size="md" variant="title">
          Parcel ID
        </Heading>
        <Text>Please enter the Parcel ID of proposed work site.</Text>
        <Text size="sm">
          Your Parcel ID can be found on property title, site plan, land
          cadastre or you can select via using the map.
        </Text>
        <Flex direction="column" gap="10px">
          <FormControl>
            <FormLabel>Parcel ID</FormLabel>
            <Input placeholder="What is the Parcel ID?" />
          </FormControl>
          <Button
            onClick={() => setMapOpened(true)}
            variant="outline"
            colorScheme="admin"
          >
            Select from the map
          </Button>
        </Flex>
        <ListCard>
          <Text variant="title" size="lg">
            Parcel Information
          </Text>
          <HStack w="100%">
            <dl style={{ width: "50%" }}>
              <Text>Parcel ID Number:</Text>
            </dl>
            <dd style={{ width: "50%" }}>
              <Text>AB-1234</Text>
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
      </Flex>
      <Flex marginTop="auto" mb="20px">
        <ButtonGroup flexDirection="column" w="100%" gap="10px">
          <Button colorScheme="admin" as={RouterLink} to="./../">
            Continue
          </Button>
          <Button variant="outline" colorScheme="admin">
            Save for later
          </Button>
        </ButtonGroup>
      </Flex>
    </>
  );
}
