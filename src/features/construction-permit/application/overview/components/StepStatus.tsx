import AlertCircle from "@assets/icons/alert-circle.svg?react";
import CheckCircle from "@assets/icons/check-circle-2.svg?react";
import CircleEllipsis from "@assets/icons/circle-ellipsis.svg?react";
import RadioOFF from "@assets/icons/selected-off.svg?react";
import RadioON from "@assets/icons/selected-on.svg?react";
import { Divider, Flex, Link, List, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { colors } from "../../../../../chakra-overrides/colors";
import { Status } from "../../../../../components/status/ApplicationStatus";

interface StepProps {
  id: string,
  activeStep: "parcel" | "identification" | "documents" | "overview",
  status: {
    parcel: Status.NOT_STARTED | Status.IN_PROGRESS | Status.COMPLETED,
    identification: Status.NOT_STARTED | Status.IN_PROGRESS | Status.COMPLETED,
    documents: Status.NOT_STARTED | Status.IN_PROGRESS | Status.COMPLETED,
  }
}

const steps = {
  parcel: {
    step: "parcel",
    title: "Parcel ID"
  },
  identification: {
    step: "identification",
    title: "Identification"
  },
  documents: {
    step: "documents",
    title: "Documents"
  },

}

const statusConfig = {
  [Status.COMPLETED]: {
    icon: <CheckCircle width="22px" fill={colors.status.green} stroke="white"/>,
    title: "COMPLETED",
    color: colors.status.green,
  },
  [Status.NOT_STARTED]: {
    icon: <AlertCircle width="22px" fill={colors.status.grey} stroke="white"/>,
    title: "NOT STARTED",
    color: colors.status.grey,
  },
  [Status.IN_PROGRESS]: {
    icon: <CircleEllipsis width="22px" fill={colors.status.blue} stroke="white"/>,
    title: "IN PROGRESS",
    color: colors.status.blue,
  }
}

export default function StepStatus(
  {
    id,
    activeStep,
    status
  }:
  StepProps,
) {
  return (
    <List h="100px">
      {
      Object.entries(status).map((step) => (
        <Flex direction="column" gap="10px" pt="10px">
          <Flex direction="row" gap="10px" alignItems="center">
            {activeStep == step[0]?<RadioON style={{width: "16px"}}/>:<RadioOFF style={{width: "16px"}}/>}
              <Link
                as={RouterLink}
                to={`../${id}/${step[0]}`}
                color={colors.theme.primary} fontWeight="semibold">{
                (step[0] == "parcel" ||
                step[0] == "identification" ||
                step[0] == "documents")?
              steps[step[0]].title:""}
              </Link>
          </Flex>
          <Flex ml="-2px" direction="row" alignItems="center" display={{base: "none", md: "flex"}}>
            {statusConfig[step[1]].icon}
            <Text
              size="sm"
              px="5px"
              color={statusConfig[step[1]].color}
              fontWeight="semibold"
            >
              {statusConfig[step[1]].title}
            </Text>
          </Flex>
          <Divider />
        </Flex>
      ))
    }
    </List>
  );
}
