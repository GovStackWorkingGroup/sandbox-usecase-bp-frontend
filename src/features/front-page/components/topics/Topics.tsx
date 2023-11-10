import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { colors } from "../../../../chakra-overrides/colors";

export const topics = [
  {
    url: "/healthcare",
    title: "Healthcare",
    description:
      "Access quality healthcare services and resources to support your well-being and that of your loved ones.",
  },
  {
    url: "/housing/construction-permit",
    title: "Housing",
    description:
      "Access government services for housing solutions, construction permits, regulations, and more, tailored to meet your needs.",
  },
  {
    url: "/benefits-and-social-services",
    title: "Benefits and Social Services",
    description:
      "Explore a range of social services and benefits designed to enhance your quality of life and provide essential support.",
  },
  {
    url: "/identity-and-family",
    title: "Identity and Family",
    description:
      "Manage your identity documents, family records, and important documents through secure and convenient online services.",
  },
  {
    url: "/business-and-labour",
    title: "Business and Labor",
    description:
      "Navigate the world of business and employment with tools and resources tailored to entrepreneurs, workers, and employers.",
  },
  {
    url: "/travel-and-transformation",
    title: "Travel and Transformation",
    description:
      "Navigate change with our government services, covering travel, relocations, transformations and visa assistance.",
  },
  {
    url: "/money-and-property",
    title: "Money and Property",
    description:
      "Manage your financial matters and property assets effectively using our digital tools and information.",
  },
  {
    url: "/crime-justice-and-law",
    title: "Crime, Justice and Law",
    description:
      "Access legal services, information on rights and responsibilities, and participate in the justice system of Digital Island.",
  },
];

export default function Topics() {
  return (
    <Flex direction="column" padding="10px 0" gap="20px">
      <Heading variant="headline">Topics</Heading>
      {topics.map((topic) => (
        <Link
          key={topic.title}
          borderLeft={`2px solid ${colors.secondary[800]} `}
          _hover={{
            textDecoration: "none",
            borderColor: colors.theme.primary,
            backgroundColor: colors.secondary[50],
          }}
          padding="8px 10px"
          display="flex"
          alignItems="center"
          gap="8px"
          justifyContent={"space-between"}
          // as={RouterLink}
          // to={topic.url}
        >
          <Flex>
            <Box>
              <Text variant="title" size="md">
                {topic.title}
              </Text>
              <Text variant="body" size="xs">
                {topic.description}
              </Text>
            </Box>
          </Flex>
          <ChevronRightIcon w="24px" h="24px" />
        </Link>
      ))}
    </Flex>
  );
}
