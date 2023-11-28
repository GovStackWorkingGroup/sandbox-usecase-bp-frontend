import EyeOff from "@assets/icons/eye-off.svg?react";
import EyeOn from "@assets/icons/eye-on.svg?react";
import LockIcon from "@assets/icons/lock.svg?react";
import UserIcon from "@assets/icons/user.svg?react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
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
  Text,
  VStack,
  useDisclosure
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthentication } from "../../utilities/useAuthentication";

export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const {login} = useAuthentication();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  const handleTogglePassword = () => {
    setShowPassword((showPassword) => !showPassword);
  };

  const handleLogin = () => {
    if (isOpen) onClose()
    else onOpen();
    
  }

   return (
    <Flex
      gap="20px"
      direction="column"
      paddingTop="40px"
      paddingBottom="20px"
      maxWidth="32rem"
      margin="0 auto"
    >
      <AlertDialog
        motionPreset='slideInBottom'
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />
        <AlertDialogContent width="80%" background={"white"}>
          <AlertDialogHeader>Another device in use</AlertDialogHeader>
          <AlertDialogBody>
            Signing in will remove an active session from another device. <br/>
            <b>You will lose all unsaved progress!</b><br/><br/> 
            Do you still want to sign in?
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='admin' ml={3} onClick={() => handleLogin()}>
              Sign in
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

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
              <Input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="ID Number" />
            </InputGroup>
          </FormControl>

          <FormControl>
            <FormLabel>e-Gov Password</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <LockIcon />
              </InputLeftElement>
              <Input
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
        <ButtonGroup padding="10px" colorScheme="admin">
          <VStack w="100%">
            <Button onClick={() => login(username, password)} variant="solid" w="100%">
              Log in
            </Button>
            <Button onClick={() => navigate(-1)} variant="outline" w="100%">
              Cancel
            </Button>
          </VStack>
        </ButtonGroup>
      </Flex>
    </Flex>
  );
}
