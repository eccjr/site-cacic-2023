import * as React from "react"
import { Flex, Image, Container, Text } from "@chakra-ui/react" 

const Festas = () => {

    return (
        <Flex id="festas" w="100vw" mt="11.25rem">
            <Container  maxW="90rem" margin="auto" padding="2.5 16">
            <Flex flexDir="column" align="center" justify="center">
                <Text fontWeight="700" fontSize="5xl" color="white">FESTAS</Text>
                <Flex w="100%" mt="20" align="center" justify="space-between">
                    <Flex w="25rem" h="37.5rem" justify="space-evenly" align="center" flexDir="column">
                        <Image w="25rem" h="auto" src="./festas/img_computaria.png" alt="imagem_festa_1" />
                        <Text textTransform="uppercase" align="center" color="white" fontWeight="400" fontSize="lg">COMPUTARIA, 2022</Text>
                    </Flex>
                    <Flex w="25rem" h="37.5rem" justify="space-evenly" align="center" flexDir="column">
                        <Image w="25rem" h="auto" src="./festas/img_trickortrad.png" alt="imagem_festa_2" />
                        <Text textTransform="uppercase" align="center" color="white" fontWeight="400" fontSize="lg">TRICK OR TRAD, 2022</Text>
                    </Flex>
                    <Flex w="25rem" h="37.5rem" justify="space-evenly" align="center" flexDir="column">
                        <Image w="25rem" h="auto" src="./festas/img_chernobyte.png" alt="imagem_festa_3" />
                        <Text textTransform="uppercase" align="center" color="white" fontWeight="400" fontSize="lg">CHERNOBYTE, 2022</Text>
                    </Flex>
                </Flex>
            </Flex>
            </Container>
        </Flex>
    )
}

export default Festas