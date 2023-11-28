import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { useQuery } from "react-query";
import { Link as RouterLink } from "react-router-dom";
import { colors } from "../../chakra-overrides/colors";
import Accordion from "../../components/accordion/Accordion";
import AccordionItem from "../../components/accordion/AccordionItem";
import Breadcrumbs, {
  BreadcrumbPaths,
} from "../../components/breadcrumbs/Breadcrumbs";
import Protected from "../../components/protected/Protected";
import { RPCContext } from "../../rpc/rpc";

export default function ConstructionPermit() {
  const breadcrumbs: BreadcrumbPaths = [
    ["Housing", null],
    ["Construction Permit", "/housing/construction-permit"],
  ];

  const rpc = useContext(RPCContext);

  const { data: activity } = useQuery(`recent-activity`, rpc.getRecentActivity);
  useEffect(() => {
    if (activity) {
      if (activity.findIndex((activity) => activity.name == `Construction Permit`) != 0) {
        rpc.setRecentActivity(JSON.stringify([...activity.slice(-5).filter((activity) => activity.name != `Construction Permit`), {name: `Construction Permit`, path: `./housing/construction-permit`}]));
      }
    }
  }, []);
  return (
    <Flex direction="column" flexGrow={1}>
      <Breadcrumbs path={breadcrumbs} />
      <Flex direction="column" gap="20px" mb="20px">
        <Heading variant="headline">Construction Permit</Heading>
        <Text>
          In compliance with building codes, Digital Island's Construction
          Permit Service provides a streamlined process for obtaining permits
          for your construction, renovation, or demolition projects. Submit
          applications securely online, ensuring a seamless experience backed by
          our commitment to regulatory adherence.
        </Text>
        <Accordion>
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
            <>
              <Text>
                Upon successful scrutiny of your application, the system will
                automatically calculate the required permit fee based on the
                specifics of your construction project.
              </Text>
              <Text>
                <strong>Estimated Fee: €120.20 - €1,301.50</strong>
              </Text>
              <Link href="#">How payment fee is calculated?</Link>
            </>
          </AccordionItem>
          <AccordionItem title="Alternative Access and Support">
            <>
              <Text>
                If it is not possible to use the e-Gov service or submit the
                documents in a digital medium, the application can be done via
                the city planning department.
              </Text>
              <Text>
                Additionally, please feel free to use the provided contact
                information for any questions or inquiries you may have.
              </Text>

              <Text>Service Providers:</Text>
              <Text>
                <strong>City Planning Department</strong>
              </Text>
              <UnorderedList>
                <ListItem>
                  <Text>Address: 456 Park Avenue, Metropolisville</Text>
                </ListItem>
                <ListItem>
                  <Text>Phone: (555) 987-6543</Text>
                </ListItem>
                <ListItem>
                  <Text>E-mail: planningdept@metropolisville.gov</Text>
                </ListItem>
                <ListItem>
                  <Text>Website URL: www.metropolisville.gov/planning</Text>
                </ListItem>
                <ListItem>
                  <Text>
                    Service Area: East Metropolisville, West Metropolisville,
                    and Green Meadows
                  </Text>
                </ListItem>
              </UnorderedList>
              <Text>
                <strong>City Planning Department</strong>
              </Text>
              <UnorderedList>
                <ListItem>
                  <Text>Address: 456 Park Avenue, Metropolisville</Text>
                </ListItem>
                <ListItem>
                  <Text>Phone: (555) 987-6543</Text>
                </ListItem>
                <ListItem>
                  <Text>E-mail: planningdept@metropolisville.gov</Text>
                </ListItem>
                <ListItem>
                  <Text>Website URL: www.metropolisville.gov/planning</Text>
                </ListItem>
                <ListItem>
                  <Text>
                    Service Area: East Metropolisville, West Metropolisville,
                    and Green Meadows
                  </Text>
                </ListItem>
              </UnorderedList>
              <Text>
                <strong>City Planning Department</strong>
              </Text>
              <UnorderedList>
                <ListItem>
                  <Text>Address: 456 Park Avenue, Metropolisville</Text>
                </ListItem>
                <ListItem>
                  <Text>Phone: (555) 987-6543</Text>
                </ListItem>
                <ListItem>
                  <Text>E-mail: planningdept@metropolisville.gov</Text>
                </ListItem>
                <ListItem>
                  <Text>Website URL: www.metropolisville.gov/planning</Text>
                </ListItem>
                <ListItem>
                  <Text>
                    Service Area: East Metropolisville, West Metropolisville,
                    and Green Meadows
                  </Text>
                </ListItem>
              </UnorderedList>
            </>
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
        <Protected
          authorized={
            <>
              <Box>
                <Heading variant="title" size="sm" as="h3">
                  Apply Online
                </Heading>
              </Box>
              <Button
                as={RouterLink}
                to={`application/${
                  Math.floor(Math.random() * (999999 - 100000)) + 100000
                }`}
                colorScheme="admin"
              >
                Create Application
              </Button>
              <Button
                variant="outline"
                as={RouterLink}
                to="my-applications"
                colorScheme="admin"
              >
                My Applications
              </Button>
            </>
          }
          unauthorized={
            <>
              <Box>
                <Heading variant="title" size="sm" as="h3">
                  Apply Online
                </Heading>
                <Text size="sm">Log in to access the service.</Text>
              </Box>
              <Button as={RouterLink} to="/login" colorScheme="admin">
                Log In
              </Button>
            </>
          }
        ></Protected>
      </Flex>
    </Flex>
  );
}
