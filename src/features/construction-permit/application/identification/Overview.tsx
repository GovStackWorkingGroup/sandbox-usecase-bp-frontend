import EditIcon from "@assets/icons/edit.svg?react";
import { Flex, HStack, Spacer, Stack, StackDivider, Text } from "@chakra-ui/react";
import { colors } from "../../../../chakra-overrides/colors";
import { ROLE, RoleData } from "./Identification";

export default function Overview({ state }: { state: Record<ROLE, RoleData> }) {
  const editRole = () => {}
  return (
    <>
      <Text>Please review the contact information</Text>
      <Flex
        backgroundColor={colors.secondary[50]}
        direction="column"
        gap="20px"
        p="10px"
        borderRadius="16px"
      >
        <Stack divider={<StackDivider />} spacing="10px">
          <Flex direction="row">
            <Text variant="title" size="lg">
              Property Owner
            </Text>
            <Spacer />
            <Flex gap="10px" onClick={() => editRole()}>
              <Text color={colors.theme.primary} fontWeight="semibold">Edit</Text>
              <EditIcon stroke={colors.theme.primary}/>
            </Flex>
          </Flex>
          <HStack w="100%">
            <dl style={{ width: "50%" }}>
              <Text>Name</Text>
            </dl>
            <dd style={{ width: "50%" }}>
              <Text>{state[ROLE.PROPERTY_OWNER].name}</Text>
            </dd>
          </HStack>
          <HStack w="100%">
            <dl style={{ width: "50%" }}>
              <Text>ID</Text>
            </dl>
            <dd style={{ width: "50%" }}>
              <Text>{state[ROLE.PROPERTY_OWNER].idNumber}</Text>
            </dd>
          </HStack>
        </Stack>
        <Stack divider={<StackDivider />} spacing="10px">
        <Flex direction="row" onClick={() => editRole()}>
            <Text variant="title" size="lg">
              Principal Contractor
            </Text>
            <Spacer />
            <Flex gap="10px">
              <Text color={colors.theme.primary} fontWeight="semibold">Edit</Text>
              <EditIcon stroke={colors.theme.primary}/>
            </Flex>
          </Flex>
          <HStack w="100%">
            <dl style={{ width: "50%" }}>
              <Text>Name</Text>
            </dl>
            <dd style={{ width: "50%" }}>
              <Text>{state[ROLE.PRINCIPAL_CONTRACTOR].name}</Text>
            </dd>
          </HStack>
          <HStack w="100%">
            <dl style={{ width: "50%" }}>
              <Text>ID</Text>
            </dl>
            <dd style={{ width: "50%" }}>
              <Text>{state[ROLE.PRINCIPAL_CONTRACTOR].idNumber}</Text>
            </dd>
          </HStack>
        </Stack>
        <Stack divider={<StackDivider />} spacing="10px">
          <Flex direction="row">
            <Text variant="title" size="lg">
              Lead Architect / Engineer
            </Text>
            <Spacer />
            <Flex gap="10px" onClick={() => editRole()}>
              <Text color={colors.theme.primary} fontWeight="semibold">Edit</Text>
              <EditIcon stroke={colors.theme.primary}/>
            </Flex>
          </Flex>
          <HStack w="100%">
            <dl style={{ width: "50%" }}>
              <Text>Name</Text>
            </dl>
            <dd style={{ width: "50%" }}>
              <Text>{state[ROLE.LEAD_ARCHITECT_OR_ENGINEER].name}</Text>
            </dd>
          </HStack>
          <HStack w="100%">
            <dl style={{ width: "50%" }}>
              <Text>ID</Text>
            </dl>
            <dd style={{ width: "50%" }}>
              <Text>{state[ROLE.LEAD_ARCHITECT_OR_ENGINEER].idNumber}</Text>
            </dd>
          </HStack>
        </Stack>
      </Flex>
    </>
  );
}
