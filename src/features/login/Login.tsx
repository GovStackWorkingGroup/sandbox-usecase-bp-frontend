import EyeOn from "@assets/icons/eye-on.svg?react";
import EyeOff from "@assets/icons/eye-off.svg?react";
import LockIcon from "@assets/icons/lock.svg?react";
import UserIcon from "@assets/icons/user.svg?react";
import {
  Button,
  ButtonGroup,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(showPassword => !showPassword);
  }

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
        <Heading as="h1" variant="headline">
          Log In to e-Gov Portal
        </Heading>
        <FormControl>
          <FormLabel>Please choose a method</FormLabel>
          <Select defaultValue="option3" border="1px">
            <option value="option3">e-Gov Password</option>
          </Select>
        </FormControl>

        <Text size="md">Secure authentication for e-gov services</Text>
        <Flex direction="column" gap="10px">
          <FormControl>
            <FormLabel>ID Number</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <UserIcon />
              </InputLeftElement>
              <Input type="text" placeholder="ID Number" />
            </InputGroup>
          </FormControl>

          <FormControl>
            <FormLabel>e-Gov Password</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <LockIcon />
              </InputLeftElement>
              <Input type={showPassword?"text":"password"} placeholder="Password" />
              <InputRightElement onClick={handleTogglePassword}>
                {showPassword ? <EyeOn/> : <EyeOff/>}
              </InputRightElement>
            </InputGroup>
            <Link mt="4px" float="right">
              <Text variant="label" size="sm">
                Forgot Password?
              </Text>
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
