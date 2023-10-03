import {
  Box,
  useRadio,
  Flex,
  useRadioGroup,
  HStack,
  Text,
  Spacer
} from "@chakra-ui/react";
import { colors } from "../../chakra-overrides/colors";

function RadioCard(props: any) {
  const { getInputProps, getRadioProps } = useRadio(props)

  const input = getInputProps()
  const checkbox = getRadioProps()

  return (
    <Box as='label'>
      <input {...input} />
      <Flex
        {...checkbox}
        minW="3rem"
        minH="3rem"
        margin="10px"
        fontWeight="semibold"
        alignItems="center"
        justifyContent="center"
        borderWidth='1px'
        borderColor={colors.theme.primary}
        textColor={colors.theme.primary}
        borderRadius='md'
        boxShadow='md'
        _checked={{
          bg: colors.theme.primary,
          color: 'white',
          borderColor: colors.theme.primary,
        }}
        p="5px"
      >
        {props.children}
      </Flex>
    </Box>
  )
}

export default function FeedbackRatingRadio () {
  const options = ["1", "2", "3", "4", "5"];
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "feedbackRating"
  });
  
  const group = getRootProps();

  return (
    <Flex direction="column">
      <Flex>
        <HStack {...group} justifyContent="center">
          {options.map((value) => {
            const radio = getRadioProps({ value });
            return (
              <RadioCard key={value} {...radio}>
                {value}
              </RadioCard>
            )
          })}
        </HStack>
      </Flex>
      <Flex direction="row" px="10px">
        <Text color="gray">Not Satisfied</Text><Spacer />
        <Text color="gray">Very Satisfied</Text>
      </Flex>
    </Flex>
  );
}