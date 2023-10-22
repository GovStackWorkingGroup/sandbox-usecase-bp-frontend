import { ArrowRightIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Heading,
  Link,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useContext } from "react";
import { useQuery } from "react-query";
import { Link as RouterLink } from "react-router-dom";
import { colors } from "../../../../chakra-overrides/colors";
import Breadcrumbs, {
  BreadcrumbPaths,
} from "../../../../components/breadcrumbs/Breadcrumbs";
import ApplicationStatus, {
  Status,
} from "../../../../components/status/ApplicationStatus";
import { RPCContext } from "../../../../rpc/rpc";

const breadcrumbs: BreadcrumbPaths = [
  ["Construction Permit", "/housing/construction-permit"],
  [`My Applications`, `/housing/construction-permit/my-applications`],
];

const completedApplications = [
  {
    id: "000326",
    status: Status.APPROVED,
  },
  {
    id: "007266",
    status: Status.APPROVED,
  },
  {
    id: "000983",
    status: Status.REJECTED,
  },
  {
    id: "003324",
    status: Status.REJECTED,
  },
];

export default function ApplicationList() {
  const rpc = useContext(RPCContext);
  const { data: ongoingApplications } = useQuery(
    `ongoingApplications`,
    rpc.getCandidateList,
  );

  console.log(ongoingApplications);

  return (
    <>
      <Breadcrumbs path={breadcrumbs} />
      <Flex direction="column" gap="20px" mb="20px" flexGrow="1">
        <Heading variant="headline">My Applications</Heading>
        <Text>
          Here you can easily check the details and progress of all your
          submitted construction permit applications.
        </Text>
        <Flex direction="column" gap="10px">
          <Text variant="title" size="lg">
            Ongoing Applications
          </Text>
          {ongoingApplications && (
            <Table mr="-20px" ml="-24px">
              <Thead>
                <Tr>
                  <Th>Application ID</Th>
                  <Th>Status</Th>
                </Tr>
              </Thead>
              <Tbody>
                {ongoingApplications?.map((application) => (
                  <Tr key={application.id}>
                    <Td w="50%">
                      <Flex alignItems="center" gap="8px">
                        <ArrowRightIcon
                          color={colors.theme.primary}
                          boxSize="10px"
                        />
                        <Text color={colors.theme.primary} variant="label">
                          <Link
                            as={RouterLink}
                            to={`./review/${application.id}`}
                          >
                            {application.id}
                          </Link>
                        </Text>
                      </Flex>
                    </Td>
                    <Td w="50%">
                      <ApplicationStatus status={application.status} />
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          )}
          <Text size="sm" variant="label" fontWeight="500">
            <Link
              to={`./../application/${
                Math.floor(Math.random() * (9999999 - 100000)) + 100000
              }`}
              as={RouterLink}
              color={colors.theme.primary}
              textDecoration="underline"
            >
              Start a new application
            </Link>
          </Text>
        </Flex>
        <Flex direction="column" gap="10px">
          <Text variant="title" size="lg">
            Completed Applications
          </Text>
          <Table mr="-20px" ml="-24px">
            <Thead>
              <Tr>
                <Th>Application ID</Th>
                <Th>Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              {completedApplications.map((application) => (
                <Tr key={application.id}>
                  <Td w="50%">
                    <Flex alignItems="center" gap="8px">
                      <ArrowRightIcon
                        color={colors.theme.primary}
                        boxSize="10px"
                      />
                      <Text color={colors.theme.primary} variant="label">
                        <Link as={RouterLink} to={`./review/${application.id}`}>
                          {application.id}
                        </Link>
                      </Text>
                    </Flex>
                  </Td>
                  <Td w="50%">
                    <ApplicationStatus status={application.status} />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Flex>
        <Button mt="auto" variant="outline" colorScheme="admin">
          Back
        </Button>
      </Flex>
    </>
  );
}
