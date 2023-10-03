import { Button, ButtonGroup, Flex, Heading, VStack, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { colors } from "../../chakra-overrides/colors";
import DownloadIcon from "@assets/icons/download.svg?react";

export default function PermitApproved() {
  return (
    <>
      <Flex
        gap="20px"
        margin="0 -20px"
        direction="column"
        paddingTop="40px"
        paddingBottom="20px"
        paddingX="20px"
        height="100%"
        flexGrow={1}
      >
        <Heading as="h1" size="md" variant="display">
        Congratulations! <br />
        Your Construction Permit is Approved.
        </Heading>
        <Text>
        Your construction permit application has been successfully reviewed and approved.
        This means you have been granted permission to proceed with your construction project as outlined in your application.
        </Text>
        <Button variant="link" colorScheme="newAdmin" justifyContent="start" leftIcon={<DownloadIcon />}>
          Download your construction permit (.pdf)
        </Button>
        <Text>
          In case of any modifications or changes to the approved plans, please seek necessary approvals.<br/><br/>
          You can find your construction permit via <Link as={RouterLink} to="/login" style={{color: colors.theme.primary}}>my applications page</Link>.<br/><br/>
          For any inquiries or assistance, please reach out to our <span style={{color: colors.theme.primary}}>support</span> team.
        </Text>
        <ButtonGroup padding="10px" colorScheme="newAdmin" marginTop="auto">
          <VStack w="100%">
            <Button variant="solid" w="100%">
              Continue
            </Button>
            <Button variant="outline" w="100%">
              Download Construction Permit
            </Button>
          </VStack>
        </ButtonGroup>
      </Flex>
    </>
  );
}