import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box, Flex, IconButton, Image, Link, Text } from "@chakra-ui/react";
import { useState } from "react";
import { colors } from "../../chakra-overrides/colors";
import Sidebar from "../sidebar/Sidebar";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Flex
      p="12px 20px"
      h="60px"
      backgroundColor={colors.secondary[0]}
      borderBottom={`1px solid ${colors.theme.dark}`}
      position="sticky"
      top="0"
      zIndex="99999"
      justifyContent="space-between"
    >
      <Flex gap="12px" alignItems="center">
        <Image h="32px" w="32px" src="./govstack-logo.svg" />
        <Box>
          <Text variant="caps" size="sm">
            DIGITAL ISLAND
          </Text>
          <Text size="xs">E-GOV PORTAL</Text>
        </Box>
      </Flex>
      <Flex alignItems="center" gap="20px">
        <Link href="/login">
          <Text size="sm" fontWeight={600}>
            Log In
          </Text>
        </Link>
        <IconButton
          backgroundColor="transparent"
          onClick={() => setIsOpen(!isOpen)}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open menu'"
        />
      </Flex>
      {isOpen && <Sidebar />}
    </Flex>
  );
}
