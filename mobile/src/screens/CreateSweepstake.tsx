import { Heading, Text, VStack } from "native-base";
import { Header } from "../components/Header";
import Logo from'../assets/logo.svg'
import { Input } from "../components/Input";
import { Button } from "../components/Button";


export function CreateSweepstake(){
  return(
    <VStack flex={1} bgColor="gray.900">
      <Header
        title="Create a new Sweepstake" />
        <VStack mt={8} mx={5} alignItems='center'>
          <Logo />

          <Heading fontFamily="heading" color="white" fontSize="xl" my={8} textAlign="center">
            Create your own world cup sweepstake and share it with your friends!
          </Heading>
          <Input 
            mb={2}
            placeholder="What is your sweepstake name?"
          />
          <Button 
          title="Create Sweepstake"
          />

          <Text color="gray.200" fontSize="sm" textAlign="center" px={10} mt={4}>
            After creating your sweepstake, you will receive a unique code that you can use to invite others.
          </Text>

        </VStack>

    </VStack>
  )
}