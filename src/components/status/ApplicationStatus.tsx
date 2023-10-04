import { Flex, Text } from "@chakra-ui/react";
import { colors } from "../../chakra-overrides/colors";

import AlertCircle from "@assets/icons/alert-circle.svg?react";
import CheckCircle from "@assets/icons/check-circle-2.svg?react";
import CircleEllipsis from "@assets/icons/circle-ellipsis.svg?react";
import PauseCircle from "@assets/icons/pause-circle.svg?react";
import XCircle from "@assets/icons/x-circle.svg?react";

export enum Status {
  COMPLETED = "COMPLETED",
  NOT_STARTED = "NOT STARTED",
  IN_PROGRESS = "IN PROGRESS",
  REJECTED = "REJECTED",
  IN_REVIEW = "IN REVIEW",
  ACTION_NEEDED = "ACTION NEEDED",
  DRAFT = "DRAFT",
  APPROVED = "APPROVED",
}

  const statusConfig = {
  [Status.COMPLETED]: {
    icon: <CheckCircle fill={colors.status.green} />,
    title: "COMPLETED",
    color: colors.status.green
  },
  [Status.NOT_STARTED]: {
    icon: <AlertCircle fill={colors.status.grey} />,
    title: "NOT STARTED",
    color: colors.status.grey
  },
  [Status.IN_PROGRESS]: {
    icon: <CircleEllipsis fill={colors.status.blue} />,
    title: "IN PROGRESS",
    color: colors.status.blue
  },
  [Status.REJECTED]: {
    icon: <XCircle fill={colors.status.red} />,
    title: "REJECTED",
    color: colors.status.red
    },
    [Status.IN_REVIEW]: {
    icon: <CircleEllipsis fill={colors.status.yellow} />,
    title: "IN REVIEW",
    color: colors.status.yellow
  },
  [Status.ACTION_NEEDED]: {
    icon: <AlertCircle fill={colors.status.red} />,
    title: "ACTION NEEDED",
    color: colors.status.red
  },
  [Status.DRAFT]: {
    icon: <PauseCircle fill={colors.status.grey} />,
    title: "DRAFT",
    color: colors.status.grey
  },
  [Status.APPROVED]: {
    icon: <CheckCircle fill={colors.status.green} />,
    title: "APPROVED",
    color: colors.status.green
  }
}

interface ApplicationStatusProps {
  status: Status
}

export default function ApplicationStatus(
  {status}: ApplicationStatusProps
  ) {
  return (
    <>
    <Flex direction="row" p="5px">
      {statusConfig[status].icon}
      <Text px="5px" color={statusConfig[status].color} fontWeight="semibold">{statusConfig[status].title}</Text>
    </Flex>
    </>
  )
}