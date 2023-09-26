import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Flex,
  Heading,
  Link,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { colors } from "../../../../chakra-overrides/colors";

const popularServices = [
  "Construction Permit",
  "Visa application hub",
  "Social welfare programs",
  "Registration of residence",
  "Income tax returns",
];

export default function PopularServices() {
  return (
    <Flex direction="column" gap="10px" padding="10px 0">
      <Heading variant="headline">Popular Services</Heading>
      <List color={colors.theme.primary}>
        {popularServices.map((service) => (
          <ListItem key={service}>
            <ListIcon as={ArrowForwardIcon} />
            <Link>{service}</Link>
          </ListItem>
        ))}
      </List>
    </Flex>
  );
}