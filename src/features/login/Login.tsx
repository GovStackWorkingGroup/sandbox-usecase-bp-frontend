import EyeOff from "@assets/icons/eye-off.svg?react";
import EyeOn from "@assets/icons/eye-on.svg?react";
import LockIcon from "@assets/icons/lock.svg?react";
import UserIcon from "@assets/icons/user.svg?react";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  Text,
  VStack
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthentication } from "../../utilities/useAuthentication";

export default function Login() {
  const {login} = useAuthentication();
  const navigate = useNavigate();
  const referrer = new URLSearchParams(window.location.search).get("referrer");
  const [username, setUsername] = useState<string>("user1");
  const [password, setPassword] = useState<string>("password");
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((showPassword) => !showPassword);
  };

  return (
    <Flex
      gap="20px"
      direction="column"
      paddingTop="40px"
      paddingBottom="20px"
      maxWidth="32rem"
      margin="0 auto"
    >
      <Heading as="h1" variant="headline">
        Log In to e-Gov Portal
      </Heading>
      <Flex direction="column" gap="10px">
        <Text size="md">Secure authentication for e-gov services</Text>
        <Flex direction="column" gap="10px">
          <FormControl>
            <FormLabel>ID Number</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <UserIcon />
              </InputLeftElement>
              <Input defaultValue="user1" onChange={(e) => setUsername(e.target.value)} type="text" placeholder="ID Number" />
            </InputGroup>
          </FormControl>

          <FormControl>
            <FormLabel>e-Gov Password</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <LockIcon />
              </InputLeftElement>
              <Input
                defaultValue="password"
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
              />
              <InputRightElement
                cursor="pointer"
                onClick={handleTogglePassword}
              >
                {showPassword ? <EyeOn /> : <EyeOff />}
              </InputRightElement>
            </InputGroup>
            <Link mt="4px" float="right">
              <Text variant="label" size="sm">
                Forgot Password?
              </Text>
            </Link>
          </FormControl>
        </Flex>
        <Flex padding="10px" >
          <VStack w="100%">
            <Button
              onClick={() => login(username, password, referrer)} colorScheme="admin" variant="solid" w="100%">
              Log in
            </Button>
            <Button onClick={() => navigate(-1)} colorScheme="admin" variant="outline" w="100%">
              Cancel
            </Button>
          </VStack>
        </Flex>
      </Flex>
    </Flex>
  );
}
