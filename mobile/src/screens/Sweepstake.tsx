import { Icon, VStack } from "native-base";
import { Octicons } from '@expo/vector-icons'
import { Button } from "../components/Button";
import { Header } from "../components/Header";

export function Sweepstake(){
  return(
    <VStack flex={1} bgColor="gray.900">
      <Header title="My sweepstakes" />
      <VStack mt={6} mx={5} borderBottomWidth={1} borderBottomColor="gray.600" pb={4} mb={4}>
          <Button 
          title="Search sweepstake for code"
          leftIcon={<Icon as={Octicons} name="search" color="black" size="md"/>}
          />
      </VStack>

    </VStack>
    )
}