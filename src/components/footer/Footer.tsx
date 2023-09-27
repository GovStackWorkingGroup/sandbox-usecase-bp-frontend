import { Divider, Flex, Image, Link, Text } from "@chakra-ui/react";
import { colors } from "../../chakra-overrides/colors";

export default function Footer() {
  return (
    <Flex
      borderTop={`1px solid ${colors.secondary[700]}`}
      backgroundColor={`${colors.secondary[50]}`}
      padding="10px 20px"
      gap="10px"
      mt="20px"
      direction="column"
    >
      <Flex
        flexWrap="wrap"
        alignItems="center"
        gap="10px"
        justifyContent="space-between"
      >
        <Flex alignItems="center" gap="10px">
          <Image w="24px" h="24px" src="./govstack-logo.svg" />
          <Text size="xs">© Digital Island 2023</Text>
        </Flex>
        <Flex gap="10px" alignItems="center">
          <Link>
            <Image h="16px" w="16px" src="./icons/facebook.svg" />
          </Link>
          <Link>
            <Image h="16px" w="16px" src="./icons/x.svg" />
          </Link>
          <Link>
            <Image h="16px" w="16px" src="./icons/instagram.svg" />
          </Link>
          <Link>
            <Image h="16px" w="16px" src="./icons/youtube.svg" />
          </Link>
          <Link>
            <Image h="16px" w="16px" src="./icons/github.svg" />
          </Link>
        </Flex>
      </Flex>
      <Flex gap="10px" flexWrap="wrap" alignItems="center">
        <Text as={Link} size="xs">
          Contact Us
        </Text>
        <Divider
          h="16px"
          w="1px"
          borderColor={colors.theme.dark}
          orientation="vertical"
        />
        <Text as={Link} size="xs">
          Give Feedback
        </Text>
        <Divider
          h="16px"
          w="1px"
          borderColor={colors.theme.dark}
          orientation="vertical"
        />
        <Text as={Link} size="xs">
          Data Protection
        </Text>
      </Flex>
    </Flex>
  );
}
