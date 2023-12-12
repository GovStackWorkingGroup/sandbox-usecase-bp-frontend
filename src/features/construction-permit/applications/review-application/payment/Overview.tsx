import CreditCard from "@assets/icons/credit-card.svg?react";
import DigitalWallet from "@assets/icons/digital-wallet.svg?react";
import MobilePayment from "@assets/icons/mobile-payment.svg?react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { Link as RouterLink, useParams } from "react-router-dom";
import { colors } from "../../../../../chakra-overrides/colors";

export default function PaymentOverview() {
  const { id } = useParams();
  return (
    <>
      <Heading variant="headline">Payment</Heading>
      <Text>Application #{id}</Text>
      <Text>
        This fee covers the processing and administrative costs associated with
        your construction permit application.
      </Text>
      <Text>Please review the details below:</Text>
      <Flex
        p="10px"
        flexDirection="column"
        backgroundColor={colors.secondary[50]}
      >
        <Flex
          p="10px 20px"
          justifyContent="space-between"
          borderBottom="1px dashed #000"
        >
          <Text>Site visit</Text>
          <Text>240 €</Text>
        </Flex>
        <Flex
          p="10px 20px"
          borderBottom="1px dashed #000"
          justifyContent="space-between"
        >
          <Text>Validation of Certificates</Text>
          <Text>120 €</Text>
        </Flex>
        <Flex p="10px 20px" justifyContent="space-between">
          <Text>Creation of records for requested construction permit</Text>
          <Text>120 €</Text>
        </Flex>
        <Flex
          borderTop="1px solid #000"
          p="10px 20px"
          justifyContent="space-between"
        >
          <Text>Total</Text> <Text>480 €</Text>
        </Flex>
      </Flex>
      <Text variant="title">Payment Options</Text>
      <Text>Please select a payment option to proceed</Text>
      <Text variant="label" color={colors.secondary[700]} size="sm">
        Online Payment Methods
      </Text>
      <Flex flexDirection="column">
        <Button
          height="auto"
          p="10px"
          borderRadius="0"
          textAlign="left"
          backgroundColor={colors.secondary[0]}
          gap="10px"
          as={RouterLink}
          to="bank-payment"
        >
          <CreditCard stroke={colors.secondary[1000]} />
          <Flex w="100%" alignItems="center">
            <Box>
              <Text>Debit/Credit Card</Text>
              <Text whiteSpace="break-spaces">Enter your bank details for payment.</Text>
            </Box>
            <ChevronRightIcon marginLeft="auto" viewBox="24px 24px" />
          </Flex>
        </Button>
        <Button
          height="auto"
          p="10px"
          borderRadius="0"
          textAlign="left"
          backgroundColor={colors.secondary[0]}
          gap="10px"
        >
          <MobilePayment stroke={colors.secondary[1000]} />

          <Flex w="100%" alignItems="center">
            <Box>
              <Text>Mobile Money</Text>
              <Text whiteSpace="break-spaces">Enter your mobile money details for payment.</Text>
            </Box>
            <ChevronRightIcon marginLeft="auto" viewBox="24px 24px" />
          </Flex>
        </Button>
        <Button
          height="auto"
          p="10px"
          borderRadius="0"
          textAlign="left"
          backgroundColor={colors.secondary[0]}
          gap="10px"
        >
          <DigitalWallet stroke={colors.secondary[1000]} />

          <Flex w="100%" alignItems="center">
            <Box>
              <Text>Digital Wallet</Text>
              <Text whiteSpace="break-spaces">Enter your digital wallet details for payment.</Text>
            </Box>
            <ChevronRightIcon marginLeft="auto" viewBox="24px 24px" />
          </Flex>
        </Button>
      </Flex>
      <Text variant="label" color={colors.secondary[700]} size="sm">
        Bank Transfer Payment
      </Text>
      <Text>
        For bank transfer payments, use the following account details:
      </Text>
      <UnorderedList>
        <ListItem>Bank Name: D.I. </ListItem>
        <ListItem>
          Bank Account Holder: Digital Island City Planning Department
        </ListItem>
        <ListItem>Account Number: DI123456789123456</ListItem>
        <ListItem>Reference: [Application Number]</ListItem>
      </UnorderedList>
      <Text>Please use your application number as the payment reference.</Text>
      <Text>Once you've made the payment, allow some processing time.</Text>
      <Button colorScheme="admin" mt="20px" variant="outline">
        Back
      </Button>
    </>
  );
}
