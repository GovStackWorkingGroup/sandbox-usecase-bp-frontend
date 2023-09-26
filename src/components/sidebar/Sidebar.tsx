import { ChevronRightIcon, MoonIcon } from "@chakra-ui/icons";
import {
  Box,
  Divider,
  Fade,
  Flex,
  Link,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { colors } from "../../chakra-overrides/colors";
import { topics } from "../../features/front-page/components/topics/Topics";
import Search from "../search/Search";

export default function Sidebar() {
  return (
    <Flex
      backgroundColor={colors.secondary[0]}
      position="absolute"
      right="0"
      top="100%"
      padding="10px 20px 30px 20px"
      direction="column"
      width="100%"
    >
      <Fade in={true}>
        <Flex mb="20px" gap="20px">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 8L11 14"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4 14L10 8L12 5"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2 5H14"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7 2H8"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M22 22L17 12L12 22"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14 18H20"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <Text color={colors.theme.primary} variant="title" size="sm">
            Eng
          </Text>
          <Text variant="title" size="sm">
            De
          </Text>
          <Text variant="title" size="sm">
            Fr
          </Text>
          <Text variant="title" size="sm">
            Est
          </Text>
        </Flex>
        <Box mb="20px">
          <Search colorScheme="black" />
        </Box>
        <Flex direction="column" gap="10px">
          <Text variant="title" size="sm" color={colors.secondary[900]}>
            Self Service
          </Text>
          <List as="nav" ml="-20px" mr="-20px">
            <ListItem>
              <Link
                display="flex"
                alignItems="center"
                gap="20px"
                padding="10px 20px"
                w="100%"
              >
                <MoonIcon />
                <Text variant="title" size="sm">
                  Home
                </Text>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                display="flex"
                alignItems="center"
                gap="20px"
                padding="10px 20px"
                w="100%"
              >
                <MoonIcon />
                <Text variant="title" size="sm">
                  Accessibility Settings
                </Text>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                display="flex"
                alignItems="center"
                gap="20px"
                padding="10px 20px"
                w="100%"
              >
                <MoonIcon />
                <Text variant="title" size="sm">
                  Settings
                </Text>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                display="flex"
                alignItems="center"
                gap="20px"
                padding="10px 20px"
                w="100%"
              >
                <MoonIcon />
                <Text variant="title" size="sm">
                  Help
                </Text>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                display="flex"
                alignItems="center"
                gap="20px"
                padding="10px 20px"
                w="100%"
              >
                <MoonIcon />
                <Text variant="title" size="sm">
                  Log In
                </Text>
              </Link>
            </ListItem>
          </List>
        </Flex>
        <Divider w="auto" mr="-20px" ml="-20px" mt="10px" mb="20px" />
        <Flex direction="column" gap="20px">
          <Text variant="title" size="sm" color={colors.secondary[900]}>
            Topics
          </Text>
          <List display="flex" flexDir="column">
            {topics.map((topic) => {
              return (
                <ListItem key={topic.title}>
                  <Link
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    padding="10px 20px"
                    _hover={{
                      backgroundColor: colors.secondary[50],
                    }}
                  >
                    <Text variant="label" size="sm">
                      {topic.title}
                    </Text>
                    <ChevronRightIcon />
                  </Link>
                </ListItem>
              );
            })}
          </List>
        </Flex>
      </Fade>
    </Flex>
  );
}
