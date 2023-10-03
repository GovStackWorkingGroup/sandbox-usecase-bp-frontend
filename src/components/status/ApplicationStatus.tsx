import { Flex, Text } from "@chakra-ui/react";
import { colors } from "../../chakra-overrides/colors";

import CheckCircle from "@assets/icons/check-circle-2.svg?react";
import AlertCircle from "@assets/icons/alert-circle.svg?react";
import CircleEllipsis from "@assets/icons/circle-ellipsis.svg?react";
import XCircle from "@assets/icons/x-circle.svg?react";
import PauseCircle from "@assets/icons/pause-circle.svg?react";

enum ApplicationStatus {
  "completed" = "COMPLETED",
  "not_started" = "NOT STARTED", 
  "in_progress" = "IN PROGRESS", 
  "rejected" = "REJECTED", 
  "in_review" = "IN REVIEW", 
  "action_needed" = "ACTION NEEDED", 
  "draft" = "DRAFT", 
  "approved" = "APPROVED", 
}

export function ApplicationCompleted () {
  return (
    <Flex direction="row" p="5px">
      <CheckCircle fill={colors.status.green}/>
      <Text px="5px" color={colors.status.green} fontWeight="semibold">{ApplicationStatus.completed}</Text>
    </Flex>
  )
}

export function ApplicationNotStarted () {
  return (
    <Flex direction="row" p="5px">
      <AlertCircle fill={colors.status.grey}/>
      <Text px="5px" color={colors.status.grey} fontWeight="semibold">{ApplicationStatus.not_started}</Text>
    </Flex>
  )
}

export function ApplicationInProgress () {
  return (
      <Flex direction="row" p="5px">
        <CircleEllipsis fill={colors.status.blue}/>
        <Text px="5px" color={colors.status.blue} fontWeight="semibold">{ApplicationStatus.in_progress}</Text>
      </Flex>
  )
}

export function ApplicationRejected () {
  return (
    <Flex direction="row" p="5px">
      <XCircle fill={colors.status.red}/>
      <Text px="5px" color={colors.status.red} fontWeight="semibold">{ApplicationStatus.rejected}</Text>
    </Flex>
  )
}

export function ApplicationInReview () {
  return (
    <Flex direction="row" p="5px">
      <CircleEllipsis fill={colors.status.yellow}/>
      <Text px="5px" color={colors.status.yellow} fontWeight="semibold">{ApplicationStatus.in_review}</Text>
  </Flex>
  )
}

export function ApplicationActionNeeded () {
  return (
    <Flex direction="row" p="5px">
      <AlertCircle fill={colors.status.red}/>
      <Text px="5px" color={colors.status.red} fontWeight="semibold">{ApplicationStatus.action_needed}</Text>
  </Flex>
  )
}

export function ApplicationDraft () {
  return (
    <Flex direction="row" p="5px">
      <PauseCircle fill={colors.status.grey}/>
      <Text px="5px" color={colors.status.grey} fontWeight="semibold">{ApplicationStatus.draft}</Text>
    </Flex>
  )
}

export function ApplicationApproved () {
  return (
    <Flex direction="row" p="5px">
      <CheckCircle fill={colors.status.green}/>
      <Text px="5px" color={colors.status.green} fontWeight="semibold">{ApplicationStatus.approved}</Text>
    </Flex>
  )
}