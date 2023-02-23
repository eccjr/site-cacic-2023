import * as React from "react"
import { Flex, Container, Button, Image, VStack, Text } from "@chakra-ui/react" 

const Footer = () => {

    return (
        <Flex w="100vw" mt="52" borderTop="0.25rem solid #915CF3">
            <Container maxW="90rem" margin="auto" padding="2.5 16">
                <Flex padding="4.375rem 0 3.125rem 0" justify="space-between" align="center">
                    <Flex align="center" justify="space-between">
                        <Image boxSize="7.5rem" src="./logo.svg" alt="cacic_logo" />
                        <VStack ml="3.125rem">
                            <Flex w="15rem" align="center">
                                <Image src="./arrouba.svg" alt="arrouba"/>
                                <Text ml="0.625rem" color="white" fontWeight="700" fontSize="xl">cacic.ibilce@unesp.br</Text>
                            </Flex>
                            <Flex w="15rem" align="center">
                                <Image src="./instagram.svg" alt="instagram"/>
                                <Text ml="0.625rem" color="white" fontWeight="700" fontSize="xl">@cacic_ibilce</Text>
                            </Flex>
                            <Flex w="15rem" align="center" >
                                <Image src="./facebook.svg" alt="facebook"/>
                                <Text ml="0.625rem" color="white" fontWeight="700" fontSize="xl">/compibilcecacic</Text>
                            </Flex>
                        </VStack>
                    </Flex>

                    <Button size="lg" colorScheme="purple">FAÇA PARTE</Button>
                </Flex>
            </Container>
        </Flex>
    )
}

export default Footer