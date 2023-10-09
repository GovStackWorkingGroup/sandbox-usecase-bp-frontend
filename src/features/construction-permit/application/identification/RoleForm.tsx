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
      <Text>{role}</Text>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input value={name ?? ""} onChange={(e) => setName(e.target.value)} />
      </FormControl>
      <FormControl>
        <FormLabel>ID NUMBER</FormLabel>
        <Input value={id ?? ""} onChange={(e) => setId(e.target.value)} />
      </FormControl>
    </>
  );
}
