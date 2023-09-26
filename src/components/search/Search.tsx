import { SearchIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

interface SearchProps {
  colorScheme: "admin" | "black";
}

export default function Search({ colorScheme }: SearchProps) {
  return (
    <InputGroup>
      <Input placeholder="Search Services" />
      <InputRightElement>
        <IconButton
          w="40px"
          h="40px"
          colorScheme={colorScheme}
          icon={<SearchIcon />}
          aria-label="search"
        />
      </InputRightElement>
    </InputGroup>
  );
}
