import { FormControl, HStack, Select, Text } from "@chakra-ui/react";
import { ChangeEvent } from "react";
import ListCard from "../../../../components/list-card/ListCard";
import { ROLE } from "./Identification";

export default function InitialIdentification({
  selectedRole,
  handleRoleChange,
}: {
  selectedRole: ROLE;
  handleRoleChange: (e: ChangeEvent) => void;
}) {
  return (
    <>
      <FormControl gap="10px" display="flex" flexDirection="column">
        <Text variant="title" size="lg">
          Your Role In The Project
        </Text>
        <Select value={selectedRole} onChange={handleRoleChange}>
          <option disabled>Select your role</option>
          <option value={ROLE.PROPERTY_OWNER}>Property Owner</option>
          <option value={ROLE.PRINCIPAL_CONTRACTOR}>
            Principal Contractor
          </option>
          <option value={ROLE.LEAD_ARCHITECT_OR_ENGINEER}>
            Lead Architect or Engineer
          </option>
          <option value={ROLE.OTHER}>Other (Please add explanation)</option>
        </Select>
      </FormControl>
      <Text variant="title" size="lg">
        Your Contact Information
      </Text>
      <Text>
        Please check your information and update your contact details if
        necessary
      </Text>
      <ListCard>
        <HStack>
          <dl style={{ width: "50%" }}>
            <Text size="sm" fontWeight="500">
              Name
            </Text>
          </dl>
          <dd style={{ width: "50%" }}>
            <Text>Lewis Mumford</Text>
          </dd>
        </HStack>
        <HStack>
          <dl style={{ width: "50%" }}>
            <Text size="sm" fontWeight="500">
              ID
            </Text>
          </dl>
          <dd style={{ width: "50%" }}>
            <Text>123456789</Text>
          </dd>
        </HStack>

        <HStack>
          <dl style={{ width: "50%" }}>
            <Text size="sm" fontWeight="500">
              E-Mail
            </Text>
          </dl>
          <dd style={{ width: "50%" }}>
            <Text>lewis.mumford@email.com</Text>
          </dd>
        </HStack>

        <HStack>
          <dl style={{ width: "50%" }}>
            <Text size="sm" fontWeight="500">
              Phone Number
            </Text>
          </dl>
          <dd style={{ width: "50%" }}>
            <Text>(123) 123 123 123</Text>
          </dd>
        </HStack>
      </ListCard>
    </>
  );
}
