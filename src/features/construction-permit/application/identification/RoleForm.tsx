import { FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import { ROLE } from "./Identification";

export default function RoleForm({
  role,
  name,
  id,
  setName,
  setId,
}: {
  role: ROLE;
  name: string | null;
  id: string | null;
  setName: Dispatch<SetStateAction<string>>;
  setId: Dispatch<SetStateAction<string>>;
}) {

  return (
    <>
      <Text fontWeight='bold'>{RoleFormData(role)?.role}</Text>
      <Text>Please provide the {RoleFormData(role)?.description} following information.</Text>
      <FormControl>
        <FormLabel>{RoleFormData(role)?.name}</FormLabel>
        <Input value={name ?? ""} onChange={(e) => setName(e.target.value)} />
      </FormControl>
      <FormControl>
        <FormLabel>{RoleFormData(role)?.id}</FormLabel>
        <Input value={id ?? ""} onChange={(e) => setId(e.target.value)} />
      </FormControl>
    </>
  );
}

export function RoleFormData(role: ROLE) {
  switch (role) {
    case ROLE.PROPERTY_OWNER:
      return {
        role: "Property Owner",
        description: "property owner's",
        name: "Property Owner's Name",
        id: "Property Owner's ID"
      }
    case ROLE.LEAD_ARCHITECT_OR_ENGINEER:
      return {
        role: "Lead Architect / Engineer",
        description: "lead architect's or engineer's",
        name: "Architect/Engineer’s Full Name",
        id: "Architect/Engineer’s ID"
      }
    case ROLE.PRINCIPAL_CONTRACTOR:
      return {
        role: "Principal Contractor",
        description: "principal contractor's",
        name: "Contractor's Name",
        id: "Contractor’s ID"
      }
    case ROLE.OTHER:
      return {
        role: "Other",
        description: "other person's",
        name: "Name",
        id: "ID"
      }
  }
}
