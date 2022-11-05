import { Heading, VStack, Icon } from "native-base";
import { Octicons } from '@expo/vector-icons'
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { Button } from "../components/Button";



export function FindSweepstake(){
  return(
    <VStack flex={1} bgColor="gray.900">
      <Header
        title="Search for code" />
        <VStack mt={8} mx={5} alignItems='center'>
          <Heading fontFamily="heading" color="white" fontSize="xl" mb={8} textAlign="center">
            Find a pool using your unique code.
          </Heading>
          <Input 
            mb={2}
            placeholder="What is your sweepstake code?"
          />
          <Button 
            title="Search Sweepstake"
            leftIcon={<Icon as={Octicons} name="search" color="black" size="md"/>}
          />

        </VStack>

    </VStack>
  )
}