import * as React from "react"
import { Flex, Image, Container, Text, Button } from "@chakra-ui/react" 

const Inicio = () => {

    return (
        <Flex w="100vw">
        <Container  
            maxW="75rem" 
            margin="auto" 
            padding="2.5 16" 
            backgroundImage="url('./detalhe_bolinhas.svg')"
            backgroundRepeat="no-repeat"
            backgroundPosition="left bottom"
        >
            <Flex mt="40" align="center" justify="space-between">
                <Flex h="37.5rem" align="start" justify="start" flexDirection="column">
                    <Text color="branco_escuro" fontWeight="600" fontSize="2xl" mt="16">Centro Acadêmico da Computação</Text>
                    <Text textShadow="0 0.3125rem 0.25rem #340C7D" mt="3" fontWeight="600" fontSize="3xl" color="branco_escuro">CHAPA <span style={{color: '#915CF3'}}>LOVELACE</span></Text>
                    <Button mt="10">Saber mais</Button>
                </Flex>
                <Flex align="center" justify="right">
                    <Image boxSize="37.5rem" borderRadius="50%"  src="./image_1.png" alt="Love Lance"/>
                </Flex>
            </Flex>
        </Container>
        </Flex>
    )
}

export default Inicio