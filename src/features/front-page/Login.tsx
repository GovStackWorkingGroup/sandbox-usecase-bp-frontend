// import { ReactComponent as UserIcon } from "@assets/icons/user.svg";
// import { ReactComponent as LockIcon } from "@assets/icons/lock.svg";
// import { ReactComponent as PasswordHidden } from "@assets/icons/eye-off.svg";
// import { ReactComponent as PasswordShown } from "@assets/icons/eye-on.svg";
import { LockIcon, StarIcon, SunIcon } from "@chakra-ui/icons";
import { Button, ButtonGroup, Flex, FormControl, FormLabel, Heading, Input, InputGroup, InputLeftElement, InputRightElement, Link, Select, VStack, Text } from "@chakra-ui/react";

export default function Login() {
  return (
    <>
      <Flex
        gap="20px"
        margin="0 -20px"
        direction="column"
        paddingTop="40px"
        paddingBottom="20px"
        paddingX="20px"
      >
        <Heading as="h1" size="lg" variant="display">
          Log In to e-Gov Portal
        </Heading>
        <FormControl>
          <FormLabel >Please choose a method</FormLabel>
          <Select border="1px">
            <option selected value='option3'>e-Gov Password</option>
          </Select>
        </FormControl>

        <Flex direction="column" gap="20px">
        <Text>Secure authentication for e-gov services</Text>
          <FormControl>
            <FormLabel >ID Number</FormLabel>
            <InputGroup>
              <InputLeftElement>
              <StarIcon />
                {/* <UserIcon/> */}
              </InputLeftElement>
              <Input type='text' placeholder="ID Number"/>
            </InputGroup>
          </FormControl>

          <FormControl>
            <FormLabel >e-Gov Password</FormLabel>
            <InputGroup>
              <InputLeftElement>
              <LockIcon/>
                {/* <LockIcon/> */}
              </InputLeftElement>
              <Input type='password' placeholder="Password"/>
              <InputRightElement>
              <SunIcon />
                {/* <LockIcon/> */}
              </InputRightElement>
            </InputGroup>
            <Link float="right" fontWeight="semibold">
                Forgot Password?
              </Link>
          </FormControl>
        </Flex>
        
        <ButtonGroup padding="10px" colorScheme="newAdmin">
          <VStack w="100%">
            <Button variant="solid" w="100%">
              Enter
            </Button>
            <Button variant="outline" w="100%">
              Cancel
            </Button>
          </VStack>
        </ButtonGroup>
      </Flex>
    </>
  );
}
