import * as React from "react"
import { Flex, Image, Container, HStack, Link } from "@chakra-ui/react" 

const Header = () => {
    const [whereIam, setWhereIam] = React.useState('about');

    return (
        <Flex w="100vw" position="fixed" top="0" left="0" background="bg_color" zIndex="1000">
            <Container  maxW="90rem" margin="auto" padding="2.5 16">
                <Flex   
                    align="center" 
                    justify="space-between"
                    padding="2.5"
                >
                    <Image boxSize='16' src="logo.svg" alt='logo'/>
                    <HStack gap="16">
                        <Link onClick={() => setWhereIam('about')} color={whereIam === "about" ? 'roxo' : 'branco_escuro'} href="#">Sobre o Ca</Link>
                        <Link onClick={() => setWhereIam('projetos')} color={whereIam === "projetos" ? 'roxo' : 'branco_escuro'} href="#">Projetos</Link>
                        <Link onClick={() => setWhereIam('festas')} color={whereIam === "festas" ? 'roxo' : 'branco_escuro'} href="#">Festas</Link>
                        <Link onClick={() => setWhereIam('equipe')} color={whereIam === "equipe" ? 'roxo' : 'branco_escuro'} href="#">Equipe</Link>
                        <Link onClick={() => setWhereIam('parte')} color={whereIam === "parte" ? 'roxo' : 'branco_escuro'} href="#">Faça Parte</Link>
                    </HStack>
                </Flex>
            </Container>
        </Flex>
    )
}

export default Header