import DownloadIcon from "@assets/icons/download.svg?react";
import {
  Button,
  Flex,
  Heading,
  Link,
  Text,
  VStack
} from "@chakra-ui/react";
import { Link as RouterLink, useParams } from "react-router-dom";
import { colors } from "../../../../../chakra-overrides/colors";
import Breadcrumbs, {
  BreadcrumbPaths,
} from "../../../../../components/breadcrumbs/Breadcrumbs";

export default function Approved() {
  const { id } = useParams();

  const breadcrumbs: BreadcrumbPaths = [
    ["Housing", null],
    ["Construction Permit", "/housing/construction-permit"],
    ["My Applications", `/housing/construction-permit/my-applications`],
    [
      `#${id}`,
      `/housing/construction-permit/my-applications/review/${id}`,
    ],
  ];
  return (
    <>
      <Breadcrumbs path={breadcrumbs} />

      <Flex
        gap="20px"
        direction="column"
        paddingBottom="20px"
        height="100%"
        flexGrow={1}
      >
        <Heading as="h1" size="md" variant="display">
          Congratulations! <br />
          Your Construction Permit is Approved.
        </Heading>
        <Text>
          Your construction permit application has been successfully reviewed
          and approved. This means you have been granted permission to proceed
          with your construction project as outlined in your application.
        </Text>
        <Button
          variant="link"
          colorScheme="admin"
          justifyContent="start"
          leftIcon={<DownloadIcon />}
        >
          Download your construction permit (.pdf)
        </Button>
        <Text>
          In case of any modifications or changes to the approved plans, please
          seek necessary approvals.
          <br />
          <br />
          You can find your construction permit via{" "}
          <Link
            as={RouterLink}
            to="/login"
            style={{ color: colors.theme.primary }}
          >
            my applications page
          </Link>
          .<br />
          <br />
          For any inquiries or assistance, please reach out to our{" "}
          <span style={{ color: colors.theme.primary }}>support</span> team.
        </Text>
        <Flex  marginTop="auto">
          <VStack w="100%">
            <Button as={RouterLink} to="./../feedback" colorScheme="admin" variant="solid" w="100%">
              Continue
            </Button>
            <Button colorScheme="admin" variant="outline" w="100%">
              Download Construction Permit
            </Button>
          </VStack>
        </Flex>
      </Flex>
    </>
  );
}
