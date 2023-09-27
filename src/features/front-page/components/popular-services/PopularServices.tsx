import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Flex,
  Heading,
  Link,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { colors } from "../../../../chakra-overrides/colors";

const popularServices = [
  ["Construction Permit", "/housing/construction-permit"],
  ["Visa application hub", null],
  ["Social welfare programs", null],
  ["Registration of residence", null],
  ["Income tax returns", null],
];

export default function PopularServices() {
  return (
    <Flex direction="column" gap="10px" padding="10px 0">
      <Heading variant="headline">Popular Services</Heading>
      <List color={colors.theme.primary}>
        {popularServices.map(([name, pathname]) => (
          <ListItem key={name} display="flex" alignItems={"center"}>
            <ListIcon as={ArrowForwardIcon} />
            <Link as={RouterLink} to={pathname || "/"}>
              <Text>{name}</Text>
            </Link>
          </ListItem>
        ))}
      </List>
    </Flex>
  );
}
