import * as React from "react"
import { Flex, Image, Container, Text } from "@chakra-ui/react" 

const Sobre = () => {

    return (
        <Flex w="100vw" mt="11.25rem">
            <Container  maxW="90rem" margin="auto" padding="2.5 16">
                <Flex flexDir="column" align="center" justify="center">
                    <Text fontWeight="700" fontSize="5xl" color="white">SOBRE O CA</Text>
                    <Flex w="100%" mt="20" align="center" justify="space-between">
                        <Flex w="25rem" h="31.25rem" background="cinza.35" flexDir="column" align="start" justify="space-evenly">
                            <Image src="./icone_quem_somos.svg" alt="pessoas" />
                            <Text fontWeight="600" fontSize="2xl" color="white">QUEM SOMOS</Text>
                            <Text fontWeight="400" fontSize="2xl" color="white">Somos uma associação estudantil sem fins lucrativos do curso de Ciência da Computação UNESP de São José do Rio Preto.</Text>
                        </Flex>
                        <Flex w="25rem" h="31.25rem" background="cinza.35" flexDir="column" align="start" justify="space-evenly">
                            <Image src="./icone_tarefas.svg" alt="tarefas" />
                            <Text fontWeight="600" fontSize="2xl" color="white">O QUE FAZEMOS</Text>
                            <Text fontWeight="400" fontSize="2xl" color="white">Somos responsáveis por promover atividades políticas, culturais, sociais e científicas.</Text>
                        </Flex>
                        <Flex w="25rem" h="31.25rem" background="cinza.35" flexDir="column" align="start" justify="space-evenly">
                            <Image src="./icone_objetivo.svg" alt="objetivos" />
                            <Text fontWeight="600" fontSize="2xl" color="white">NOSSO OBJETIVO</Text>
                            <Text fontWeight="400" fontSize="2xl" color="white">Nosso objetivo é representar os estudantes do curso dentro e fora da universidade.</Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Container>
        </Flex>
    )
}

export default Sobre