import * as React from "react"
import { Flex, Image, Container, Text } from "@chakra-ui/react" 

const Projetos = () => {

    return (
        <Flex id="projetos" w="100vw" mt="11.25rem">
            <Container  maxW={["22rem","90rem"]} margin="auto" padding="2.5 16">
            <Flex flexDir="column" align="center" justify="center">
                <Text fontWeight="700" fontSize={["4xl","5xl"]} letterSpacing={["0.2rem",""]} color="white">PROJETOS</Text>
                <Flex w="100%" mt="20" align="center" justify="space-between" flexDir={["column","column","column","row"]}>
                    <Flex w="30rem" h="23.75rem" justify="space-evenly" align="center" flexDir="column">
                        <Image boxShadow="8.125rem"  src="./ícone_onibus.svg" alt="onibus" loading="lazy"/>
                        <Text textTransform="uppercase" align="center" maxW="18rem" color="white" fontWeight="700" fontSize={["xl","2xl"]}>excursões para festivais tecnológicos</Text>
                    </Flex>
                    <Flex w="30rem" h="23.75rem" justify="space-evenly" align="center" flexDir="column">
                        <Image boxShadow="8.125rem" src="./ícone_beca.svg" alt="beca" loading="lazy"/>
                        <Text textTransform="uppercase" align="center" maxW="18rem" color="white" fontWeight="700" fontSize={["xl","2xl"]}>MINICURSOS EXTRACURRICULARES</Text>
                    </Flex>
                    <Flex w="30rem" h="23.75rem" justify="space-evenly" align="center" flexDir="column">
                        <Image boxShadow="8.125rem"  src="./ícone_festas.svg" alt="festas" loading="lazy"/>
                        <Text textTransform="uppercase" align="center" maxW="15rem" color="white" fontWeight="700" fontSize={["xl","2xl"]}>Festas e integrações</Text>
                    </Flex>
                </Flex>
                <Flex w="100%" mt="20" align="center" justify="space-between" flexDir={["column","column","column","row"]}>
                    <Flex w="30rem" h="23.75rem" justify="space-evenly" align="center" flexDir="column">
                            <Image boxShadow="8.125rem"  src="./controle.svg" alt="controle"/>
                            <Text textTransform="uppercase" align="center" maxW="18rem" color="white" fontWeight="700" fontSize={["xl","2xl"]}>COMPETIÇÃO DE GAMES E HACKATON</Text>
                        </Flex>
                        <Flex w="30rem" h="23.75rem" justify="space-evenly" align="center" flexDir="column">
                            <Image boxShadow="8.125rem" src="./banco.svg" alt="banco"/>
                            <Text textTransform="uppercase" align="center" maxW="18rem" color="white" fontWeight="700" fontSize={["xl","2xl"]}>RECEPÇÃO DE CALOUROS</Text>
                        </Flex>
                        <Flex w="30rem" h="23.75rem" justify="space-evenly" align="center" flexDir="column">
                            <Image boxShadow="8.125rem"  src="./ícone_treinamento.svg" alt="treinamento"/>
                            <Text textTransform="uppercase" align="center" maxW="15rem" color="white" fontWeight="700" fontSize={["xl","2xl"]}>TREINAMENTO PARA COMPETIÇÕES UNIVERSITÁRIAS</Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Container>
        </Flex>
    )
}

export default Projetos