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
          w="auto"
          aspectRatio="1/1"
          h="100%"
          colorScheme={colorScheme}
          icon={<SearchIcon />}
          aria-label="search"
        />
      </InputRightElement>
    </InputGroup>
  );
}
