import {
  Button,
  Flex,
  Heading,
  Link,
  Text,
  VStack
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { colors } from "../../chakra-overrides/colors";
import Accordion from "../../components/accordion/Accordion";
import AccordionItem from "../../components/accordion/AccordionItem";

export default function FilesSent() {
  return (
    <Flex direction="column" flexGrow={1}>
      <Flex direction="column" gap="20px">
        <Heading variant="headline">Documents Submitted Successfully</Heading>
        <Text >
        The requested documents have been successfully submitted and are now being reviewed by our team.
        </Text>
        <Text fontWeight="bold">
        Next Steps
        </Text>
        <Accordion allowMultiple allowToggle>
          <AccordionItem title="1. Application Review">
            <>
              <Text>
                Our team will carefully review the submitted information and documents to ensure they meet the necessary requirements and comply with regulations.<br /><br />
                You can track down your applications via <Link as={RouterLink} to="/housing/construction-permit/my-applications" textColor={colors.theme.primary}>My Construction Permit Applications</Link> page.<br /><br />
                The processing time may vary depending on the complexity of your project and the volume of applications. You will receive notifications regarding the progress of your application.
              </Text>
            </>
          </AccordionItem>
          <AccordionItem title="(Optional) Additional Requests / Site Inspection">
            <>
              <Text>
              We may need more information from you. You will receive E-Mail notifications at key milestones of the application process,
              including approval, field visit requests, requests for additional information, or any other updates.
              </Text>
            </>
          </AccordionItem>
          <AccordionItem title="2. Required Fee">
            <>
              <Text>
                Once your application is reviewed, the system will automatically calculate the required permit fee based on your project details. You will be notified to make the payment through our secure payment gateway.
              </Text><br/>
              <Text fontWeight="bold">Estimated Fee: €120.20 - €1,301.50</ Text><br/>
              <Link as={RouterLink} to="/" textColor={colors.theme.primary}>
                How is the required fee calculated?
              </Link>
            </>
          </AccordionItem>
          <AccordionItem title="3. Final Outcome">
            <>
              <Text>
              Once the review process is complete, you will be notified of the final outcome of your application.
              </Text>
            </>
          </AccordionItem>
        </Accordion>
      </Flex>
      <Flex padding="10px" marginTop="auto">
        <VStack w="100%">
          <Button as={RouterLink} to="/" colorScheme="admin" variant="solid" w="100%">
            Home
          </Button>
          <Button as={RouterLink} to="/housing/construction-permit/my-applications"  colorScheme="admin" variant="outline" w="100%">
            My Applications
          </Button>
        </VStack>
      </Flex>
    </Flex>
  );
}
