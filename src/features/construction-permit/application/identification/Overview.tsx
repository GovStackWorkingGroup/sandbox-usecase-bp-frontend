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
          <HStack w="100%">
            <dl style={{ width: "50%" }}>
              <Text>E-Mail</Text>
            </dl>
            <dd style={{ width: "50%" }}>
              <Text>{ROLE.PROPERTY_OWNER.toLowerCase()}@email.com</Text>
            </dd>
          </HStack>
          <HStack w="100%">
            <dl style={{ width: "50%" }}>
              <Text>Phone Number</Text>
            </dl>
            <dd style={{ width: "50%" }}>
              <Text>(122) 181 292</Text>
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
          <HStack w="100%">
            <dl style={{ width: "50%" }}>
              <Text>E-Mail</Text>
            </dl>
            <dd style={{ width: "50%" }}>
              <Text>{ROLE.PRINCIPAL_CONTRACTOR.toLowerCase()}@email.com</Text>
            </dd>
          </HStack>
          <HStack w="100%">
            <dl style={{ width: "50%" }}>
              <Text>Phone Number</Text>
            </dl>
            <dd style={{ width: "50%" }}>
              <Text>(422) 182 152</Text>
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
          <HStack w="100%">
            <dl style={{ width: "50%" }}>
              <Text>E-Mail</Text>
            </dl>
            <dd style={{ width: "50%" }}>
              <Text>{ROLE.LEAD_ARCHITECT_OR_ENGINEER.toLowerCase()}@email.com</Text>
            </dd>
          </HStack>
          <HStack w="100%">
            <dl style={{ width: "50%" }}>
              <Text>Phone Number</Text>
            </dl>
            <dd style={{ width: "50%" }}>
              <Text>(512) 212 953</Text>
            </dd>
          </HStack>
        </Stack>
      </Flex>
    </>
  );
}
