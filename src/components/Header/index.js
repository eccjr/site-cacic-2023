import * as React from "react"
import { Flex, Image, Container, HStack, Link } from "@chakra-ui/react" 

const Header = () => {
    const [whereIam, setWhereIam] = React.useState('about');

    return (
        <Container maxW="99.25rem" margin="auto" padding="0.625rem 4rem">
            <Flex
                align="center" 
                justify="space-between"
                mt="2.5rem"
            >
                <Image boxSize='60px' src="logo.svg" alt='logo'/>
                <HStack gap="4.0625rem">
                    <Link onClick={() => setWhereIam('about')} color={whereIam === "about" ? 'roxo' : 'branco_escuro'} href="#">Sobre o Ca</Link>
                    <Link onClick={() => setWhereIam('projetos')} color={whereIam === "projetos" ? 'roxo' : 'branco_escuro'} href="#">Projetos</Link>
                    <Link onClick={() => setWhereIam('festas')} color={whereIam === "festas" ? 'roxo' : 'branco_escuro'} href="#">Festas</Link>
                    <Link onClick={() => setWhereIam('equipe')} color={whereIam === "equipe" ? 'roxo' : 'branco_escuro'} href="#">Equipe</Link>
                    <Link onClick={() => setWhereIam('parte')} color={whereIam === "parte" ? 'roxo' : 'branco_escuro'} href="#">Faça Parte</Link>
                </HStack>
            </Flex>
        </Container>
    )
}

export default Header