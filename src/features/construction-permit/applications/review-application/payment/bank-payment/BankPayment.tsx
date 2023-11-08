import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useQuery } from "react-query";
import { Link as RouterLink, useParams } from "react-router-dom";
import { Status } from "../../../../../../components/status/ApplicationStatus";
import { RPCContext } from "../../../../../../rpc/rpc";
import { Application } from "../../../../../../rpc/types";
import OngoingPayment from "../components/OngoingPayment";
import PaymentSuccessful from "../components/PaymentSuccessful";
export default function BankPayment() {
  const { id } = useParams();
  const rpc = useContext(RPCContext);

  const [ongoingPayment, setOngoingPayment] = useState(false);
  const [successfulPayment, setSuccessfulPayment] = useState(false);

  const {data: applications } = useQuery(
    `applications`,
    rpc.getApplications
    );

  const handlePayment = () => {
    setOngoingPayment(true);
    setTimeout(() => {
        const currentApplication = applications?.find((application) => application.id === id) as Application;
        if (applications && currentApplication) {
          currentApplication.action="inReview";
          currentApplication.status=Status.IN_REVIEW;
          rpc.setData("applications", JSON.stringify([...applications.filter((application) => application.id != id), currentApplication]));
        }
      setSuccessfulPayment(true);
    }, 4000);
  };
  if (successfulPayment) {
    return <PaymentSuccessful />;
  }
  if (ongoingPayment) {
    return <OngoingPayment />;
  }

  return (
    <>
      <Heading variant="headline">Payment</Heading>
      <Text>Application #{id}</Text>
      <Flex flexDirection="column" gap="20px">
        <Flex maxWidth="400px" justifyContent="space-between" mb="10px">
          <Text>Fee Amount:</Text>
          <Text size="lg" variant="title">
            480 €
          </Text>
        </Flex>
        <Box>
          <Text>Name on Card</Text>
          <Input placeholder="Full Name" />
        </Box>
        <Box>
          <Text>Card Number</Text>
          <Input placeholder="xxxx xxxx xxxx xxxx" />
        </Box>
        <Flex gap="20px">
          <Box w="100%">
            <Text>Valid Thru</Text>
            <Input placeholder="MM / YY" />
          </Box>
          <Box w="100%">
            <Text>CVV</Text>
            <Input placeholder="xxx" />
          </Box>
        </Flex>
      </Flex>
      <ButtonGroup mt="auto" gap="10px" orientation="vertical">
        <Button colorScheme="admin" onClick={() => handlePayment()}>
          Pay Now
        </Button>
        <Button as={RouterLink} to="../" colorScheme="admin" variant="outline">
          Cancel
        </Button>
      </ButtonGroup>
    </>
  );
}
