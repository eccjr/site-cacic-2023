import * as React from "react"
import { ScrollLink } from "../Header/index"
import { Flex, Image, Container, Text, Button, useBreakpointValue } from "@chakra-ui/react" 

const Inicio = () => {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    return (
        <Flex w="100vw">
        <Container  
            maxW={["20rem","75rem"]} 
            margin="auto" 
            padding="2.5 16" 
            backgroundImage="url('./detalhe_bolinhas.svg')"
            backgroundRepeat="no-repeat"
            backgroundSize={["7.5rem auto","12.5rem auto"]}
            backgroundPosition={["0% 90%","left bottom"]}
            style={{ userSelect: "none" }}
        >
            <Flex mt={["32","40"]} align="center" justify="space-between" flexDir={["column","column","column","row"]}>
                <Flex w={["100vw","70vw","50vw","24vw"]} h={["10rem","37.5rem"]} align={["center","start"]} justify={["center","start"]} flexDirection="column">
                    <Text color="branco_escuro" fontWeight="600" fontSize={["xl","2xl"]} mt="16">Centro Acadêmico da Computação</Text>
                    <Text textShadow="0 0.3125rem 0.25rem #340C7D" mt="3" fontWeight="600" fontSize={["3xl","5xl"]} color="branco_escuro">CHAPA <span style={{color: '#915CF3'}}>LOVELACE</span></Text>
                    {isWideVersion ? <ScrollLink to="sobre" offset={-200} >
                        <Button mt="10">Saber mais</Button>
                    </ScrollLink> : ""}
                </Flex>
                <Flex mt={["3.75rem","2rem","0","0"]} align="center" justify={[ "center","right"]} >
                    <Image boxSize={["17.5rem","22rem","30rem","37.5rem"]} borderRadius="50%"  src="./image_1.png" alt="Love Lance"/>
                </Flex>
                {isWideVersion ? "" : <ScrollLink to="sobre" offset={-200} >
                        <Button mt={["16","16","16","10"]}>Saber mais</Button>
                    </ScrollLink>}
            </Flex>
        </Container>
        </Flex>
    )
}

export default Inicio