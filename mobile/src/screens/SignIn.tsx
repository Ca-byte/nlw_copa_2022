import { Center, Icon, Text } from "native-base";
import { Button } from "../components/Button";
import { Fontisto } from '@expo/vector-icons'
import { useAuth } from "../hooks/useAuth";
import Logo from '../assets/logo.svg'


export function SignIn(){
  const { signIn, user} = useAuth()

  console.log(user)
    return(
      <Center flex={1} bgColor="gray.900">
        <Logo />
        <Button 
          type='SECONDARY'
          title="SignIn with Google"
          leftIcon={<Icon as={Fontisto} name="google" color="white" size="md"/>}
          mt={12}
          onPress={signIn}
          />
          <Text
            color="white" textAlign="center" mt={4}
          >
           We do not use any information other than {'\n'} your email to create your account.
          </Text>
      </Center>
    )
}