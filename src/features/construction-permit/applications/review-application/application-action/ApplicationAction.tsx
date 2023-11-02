import { Button, Flex, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { colors } from "../../../../../chakra-overrides/colors";

export default function ApplicationAction({
  action,
  id,
}: {
  action: "paymentRequired" | string;
  id: string;
}) {
  switch (action) {
    case "paymentRequired":
      return (
        <>
          <Flex
            direction="column"
            p="20px"
            mr="-20px"
            ml="-20px"
            gap="20px"
            bg={colors.secondary[50]}
          >
            <Text variant="title" size="lg">
              Payment Required
            </Text>
            <Text>
              To facilitate the processing of your application, please proceed
              with the payment of the required fee. Once payment is complete,
              your application will be forwarded to stakeholders for clearance.
            </Text>
            <Button colorScheme="admin" as={RouterLink} to={`payment`}>
              Payment
            </Button>
          </Flex>
        </>
      );

    default:
      return (
        <>
          <Flex
            direction="column"
            p="20px"
            mr="-20px"
            ml="-20px"
            gap="20px"
            bg={colors.secondary[50]}
          >
            <Text variant="title" size="lg">
              Application Under Review
            </Text>
            <Text>
              Your construction permit application is currently under review by
              our team. We're diligently assessing your submission to ensure
              compliance with all necessary regulations.
            </Text>
            <Text>
              You will receive updates on the progress via E-Mail and within
              your account. If you have any questions or need assistance, our
              support team is here to help.
            </Text>
          </Flex>
        </>
      );
  }
}
