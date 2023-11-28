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
import { Application } from "../../../../rpc/types";

const breadcrumbs: BreadcrumbPaths = [
  ["Construction Permit", "/housing/construction-permit"],
  [`My Applications`, `/housing/construction-permit/my-applications`],
];

export default function ApplicationList() {
  const rpc = useContext(RPCContext);

  const { data: data } = useQuery(`applications`, rpc.getApplications);

  if (data) {
    const completed = data.filter(
      (application: Application) =>
        application.status === Status.APPROVED ||
        application.status === Status.COMPLETED ||
        application.status === Status.REJECTED,
    );
    const inProgress = data.filter(
      (application: Application) =>
        application.status !== Status.APPROVED &&
        application.status !== Status.COMPLETED &&
        application.status !== Status.REJECTED,
    );
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
            {data && (
              <Table mr="-20px" ml="-24px">
                <Thead>
                  <Tr>
                    <Th>Application ID</Th>
                    <Th>Status</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {inProgress.map((application: any) => (
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
                              to={(application.status !== Status.DRAFT)?(`./review/${application.id}`):(`../construction-permit/application/${application.id}`)}
                            >
                              {application.id}
                            </Link>
                          </Text>
                        </Flex>
                      </Td>
                      <Td w="50%">
                        <ApplicationStatus
                          status={application.status as Status}
                        />
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            )}
            <Text size="sm" variant="label" fontWeight="500">
              <Link
                to={`./../application/${
                  Math.floor(Math.random() * (999999 - 100000)) + 100000
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
                {completed.map((application: any) => (
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
                            to={`./review/${application.id}/approved`}
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
          </Flex>
          <Button mt="auto" variant="outline" colorScheme="admin" as={RouterLink} to="../construction-permit">
            Back
          </Button>
        </Flex>
      </>
    );
  }
}
