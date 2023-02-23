import * as React from "react"
import { Flex, Image, Container, Text, Button, HStack } from "@chakra-ui/react" 

const Projetos = () => {

    return (
        <Flex w="100vw" mt="11.25rem">
            <Container  maxW="90rem" margin="auto" padding="2.5 16">
            <Flex flexDir="column" align="center" justify="center">
                    <Text fontWeight="700" fontSize="5xl" color="white">PROJETOS</Text>
                    <Flex w="100%" mt="20" align="center" justify="space-between">
                        <Flex w="30rem" h="23.75rem" justify="space-evenly" align="center" flexDir="column">
                            <Image boxShadow="130px"  src="./ícone_onibus.svg" alt="onibus"/>
                            <Text textTransform="uppercase" align="center" maxW="18rem" color="white" fontWeight="700" fontSize="2xl">excursões para festivais tecnológicos</Text>
                        </Flex>
                        <Flex w="30rem" h="23.75rem" justify="space-evenly" align="center" flexDir="column">
                            <Image boxShadow="130px" src="./ícone_beca.svg" alt="beca"/>
                            <Text textTransform="uppercase" align="center" maxW="18rem" color="white" fontWeight="700" fontSize="2xl">MINICURSOS EXTRACURRICULARES</Text>
                        </Flex>
                        <Flex w="30rem" h="23.75rem" justify="space-evenly" align="center" flexDir="column">
                            <Image boxShadow="130px"  src="./ícone_festas.svg" alt="festas"/>
                            <Text textTransform="uppercase" align="center" maxW="15rem" color="white" fontWeight="700" fontSize="2xl">Festas e integrações</Text>
                        </Flex>
                    </Flex>
                    <Flex w="100%" mt="20" align="center" justify="space-between">
                    <Flex w="30rem" h="23.75rem" justify="space-evenly" align="center" flexDir="column">
                            <Image boxShadow="130px"  src="./controle.svg" alt="controle"/>
                            <Text textTransform="uppercase" align="center" maxW="18rem" color="white" fontWeight="700" fontSize="2xl">COMPETIÇÃO DE GAMES E HACKATON</Text>
                        </Flex>
                        <Flex w="30rem" h="23.75rem" justify="space-evenly" align="center" flexDir="column">
                            <Image boxShadow="130px" src="./banco.svg" alt="banco"/>
                            <Text textTransform="uppercase" align="center" maxW="18rem" color="white" fontWeight="700" fontSize="2xl">RECEPÇÃO DE CALOUROS</Text>
                        </Flex>
                        <Flex w="30rem" h="23.75rem" justify="space-evenly" align="center" flexDir="column">
                            <Image boxShadow="130px"  src="./ícone_treinamento.svg" alt="treinamento"/>
                            <Text textTransform="uppercase" align="center" maxW="15rem" color="white" fontWeight="700" fontSize="2xl">TREINAMENTO PARA COMPETIÇÕES UNIVERSITÁRIAS</Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Container>
        </Flex>
    )
}

export default Projetos