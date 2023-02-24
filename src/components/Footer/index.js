import * as React from "react"
import { Flex, Container, Button, Image, VStack, Text } from "@chakra-ui/react" 

const Footer = () => {

    return (
        <Flex w="100vw" mt="52" borderTop="0.25rem solid #915CF3">
            <Container maxW={["22rem","90rem"]} margin="auto" padding="2.5 16">
                <Flex padding="4.375rem 0 3.125rem 0" justify="space-between" align="center" flexDir={["column", "row"]}>
                    <Flex align="center" justify="space-between" flexDir={["column", "row"]}>
                        <Image boxSize="7.5rem" src="./logo.svg" alt="cacic_logo" />
                        <VStack ml={["0","3.125rem"]} gap={["1rem", "0"]}>
                            <Flex w="15rem" align="center" mt={["4rem","0"]}>
                                <Image src="./arrouba.svg" alt="arrouba"/>
                                <Text ml="0.625rem" color="white" fontWeight="700" fontSize="xl">cacic.ibilce@unesp.br</Text>
                            </Flex>
                            <a target="_black" href="https://www.instagram.com/cacic_ibilce/">
                                <Flex w="15rem" align="center">
                                    <Image src="./instagram.svg" alt="instagram"/>
                                    <Text ml="0.625rem" color="white" fontWeight="700" fontSize="xl">@cacic_ibilce</Text>
                                </Flex>
                            </a>
                            <a target="_black" href="https://www.facebook.com/compibilcecacic">
                                <Flex w="15rem" align="center" >
                                    <Image src="./facebook.svg" alt="facebook"/>
                                    <Text ml="0.625rem" color="white" fontWeight="700" fontSize="xl">/compibilcecacic</Text>
                                </Flex>
                            </a>
                        </VStack>
                    </Flex>

                    <a href="https://api.whatsapp.com/send/?phone=556291306563&text&type=phone_number&app_absent=0" target="_blank"><Button mt={["4rem","0"]} size="lg" colorScheme="purple">FAÇA PARTE</Button></a>
                </Flex>
            </Container>
        </Flex>
    )
}

export default Footer