import { Spinner, Center } from "native-base";

export function Loading(){
    return(
        <Center bg='gray.900'>
            <Spinner color="yellow.500" size='lg'/>
        </Center>
    )
}