import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  Link,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { colors } from "../../../../chakra-overrides/colors";

const announcements = [
  {
    title: "Emergency Contact Numbers Updated",
    date: "15.05.2023",
  },
  {
    title: "New Tax Filing Deadline: August 15",
    date: "11.05.2023",
  },
  {
    title: "Online Utility Bill Payments Active",
    date: "05.05.2023",
  },
  {
    title: "Community Cleanup Event: Join Us",
    date: "02.05.2023",
  },
  {
    title: "Elderly Care Survey - Participate Now",
    date: "26.04.2023",
  },
];

export default function Announcements() {
  return (
    <Flex padding="10px 0" gap="10px" direction="column">
      <Heading variant="headline">Announcements</Heading>
      <List
        color={colors.theme.dark}
        display="flex"
        flexDirection="column"
        gap="10px"
      >
        {announcements.map((announcement) => (
          <ListItem key={announcement.title} display="flex" alignItems="center">
            <ListIcon as={ArrowForwardIcon} />
            <Link>
              <Box>
                <Text variant="label" size="sm">
                  {announcement.title}
                </Text>
                <Text size="xs">{announcement.date}</Text>
              </Box>
            </Link>
          </ListItem>
        ))}
      </List>
      <Link textDecor="underline">
        <Text size="xxs">Previous announcements</Text>
      </Link>
    </Flex>
  );
}
