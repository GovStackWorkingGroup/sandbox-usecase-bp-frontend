import {
  Box,
  Button,
  Flex,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { colors } from "../../chakra-overrides/colors";
import Accordion from "../../components/accordion/Accordion";
import AccordionItem from "../../components/accordion/AccordionItem";
import Breadcrumbs, {
  BreadcrumbPaths,
} from "../../components/breadcrumbs/Breadcrumbs";

export default function ConstructionPermit() {
  const breadcrumbs: BreadcrumbPaths = [
    ["Housing", null],
    ["Construction Permit", "/housing/construction-permit"],
  ];
  return (
    <Flex direction="column" flexGrow={1}>
      <Breadcrumbs path={breadcrumbs} />
      <Flex direction="column" gap="20px">
        <Heading variant="headline">Construction Permit</Heading>
        <Text>
          In compliance with building codes, Digital Island's Construction
          Permit Service provides a streamlined process for obtaining permits
          for your construction, renovation, or demolition projects. Submit
          applications securely online, ensuring a seamless experience backed by
          our commitment to regulatory adherence.
        </Text>
        <Accordion allowMultiple allowToggle>
          <AccordionItem title="Required Documents">
            <>
              <Text>
                To initiate the application process for your construction
                permit, please ensure you have the following required documents
                ready for submission:
              </Text>
              <UnorderedList>
                <ListItem>
                  <Text>Parcel ID number</Text>
                </ListItem>
                <ListItem>
                  <Text>
                    Identification of the property owner, principal contractor
                    and lead architect/engineer
                  </Text>
                </ListItem>
                <ListItem>
                  <Text>
                    Block/Site Plan (Document format can be .dwg, .dxf, .dgn,
                    .rfa or .pln)
                  </Text>
                </ListItem>
                <ListItem>
                  <Text>
                    Detailed Plans Scale 1:50 (Document format can be .dwg,
                    .dxf, .dgn, .rfa or .pln)
                  </Text>
                </ListItem>
                <ListItem>
                  <Text>Estimate time and cost of the projects</Text>
                </ListItem>
                <ListItem>
                  <Text>Property Title</Text>
                </ListItem>
              </UnorderedList>
            </>
          </AccordionItem>
          <AccordionItem title="Required Fees">
            <></>
          </AccordionItem>
          <AccordionItem title="Alternative Access and Support">
            <></>
          </AccordionItem>
          <AccordionItem title="Similar Services">
            <></>
          </AccordionItem>
        </Accordion>
      </Flex>
      <Flex
        mt="auto"
        background={colors.secondary[50]}
        mr="-20px"
        ml="-20px"
        p="20px"
        gap="20px"
        direction="column"
      >
        <Box>
          <Heading variant="title" size="sm" as="h3">
            Apply Online
          </Heading>
          <Text size="sm">Log in to access the service.</Text>
        </Box>
        <Button colorScheme="admin">Log In</Button>
      </Flex>
    </Flex>
  );
}
