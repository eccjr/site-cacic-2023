import React, { useEffect, useState } from "react"
import { Flex, Image, Container, HStack, VStack, Button, useBreakpointValue } from "@chakra-ui/react" 
import { Link as Scroll } from "react-scroll"
import * as styles from "./linknav.module.scss"

export const ScrollLink = (props) => {
    return (
      <Scroll
        to={props.to}
        offset={props.offset}
        smooth={true}
        duration={700}
        activeClass={styles.active}
        spy={true}
      >
        {props.children}
      </Scroll>
    );
};

const Menu = ({openModal,setOpenModal}) => {

    return (
        <Flex
            zIndex="9999"
            position="fixed"
            backgroundColor="bg_color"
            flex="column"
            align="start !important"
            w="100vw"
            h="100vh"
            top="0"
            left="0"
        >
            <Container maxW={["22rem","90rem"]}  padding="2.5 16" style={{ userSelect: "none" }}>
                <Flex align="start" justify="end" padding="1.875rem 0 1.875rem 0">
                    <Image onClick={setOpenModal} boxSize="3rem" src="./closeModal.svg" alt="Fechar menu"/>
                </Flex>
 
                <Flex align="center" justify="center">
                    <VStack gap="10" style={{ userSelect: "none", outline: 'none' }} className={styles.texts} mt="20">
                        <ScrollLink to="sobre" offset={-200} >
                            <a onClick={() => setOpenModal(!openModal)}>Sobre o Ca</a>
                        </ScrollLink>
                        <ScrollLink  to="projetos" offset={-200} >
                            <a onClick={() => setOpenModal(!openModal)}>Projetos</a>
                        </ScrollLink>
                        <ScrollLink  to="festas" offset={-200} >
                            <a onClick={() => setOpenModal(!openModal)}>Festas</a>
                        </ScrollLink>
                        <ScrollLink to="equipe" offset={-200} >
                            <a onClick={() => setOpenModal(!openModal)}>Equipe</a>
                        </ScrollLink>
                            
                        <a onClick={() => setOpenModal(!openModal)} href="https://api.whatsapp.com/send/?phone=556291306563&text&type=phone_number&app_absent=0" target="_blank"><Button colorScheme="purple" variant='outline'>Faça Parte</Button></a>
                    </VStack>
                </Flex>
            </Container>
            
        </Flex>
    );
}


export const Header = () => {
    const [scrollPosition, setScrollPosition] = useState(0)
    const [menu,setMenu] = useState(false)
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    const handleOpenModalMenu = () => {
        setMenu(!menu)
    }
    

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
        <Flex w="100vw" position="fixed" top="0" left="0" background={scrollPosition >= 40 ? "bg_color" : "transparent" }zIndex="1000">
            <Container maxW={["22rem","90rem"]} margin="auto" padding="2.5 16">
                {isWideVersion ? 
                (   
                    <Flex   
                        align="center" 
                        justify="space-between"
                        padding="2.5"
                    >
                        <Image boxSize='16' src="logo.svg" alt='logo'/>
                        <HStack gap="16" style={{ userSelect: "none" }} className={styles.texts}>
                            <ScrollLink to="sobre" offset={-200} >
                                Sobre o Ca
                            </ScrollLink>
                            <ScrollLink to="projetos" offset={-200} >
                                Projetos
                            </ScrollLink>
                            <ScrollLink to="festas" offset={-200} >
                                Festas
                            </ScrollLink>
                            <ScrollLink to="equipe" offset={-200} >
                                Equipe
                            </ScrollLink>
                            
                            <a href="https://api.whatsapp.com/send/?phone=556291306563&text&type=phone_number&app_absent=0" target="_blank"><Button colorScheme="purple" variant='outline'>Faça Parte</Button></a>
                        </HStack>
                    </Flex> 
                ): (
                    <Flex   
                        align="center" 
                        justify="space-between"
                        padding="1.875rem 0 1.875rem  0"
                    >
                        <Image boxSize='3.75rem' src="./logo.svg" alt='logo'/>
                        
                        <Image onClick={handleOpenModalMenu} mt="-10px"  boxSize='3rem' src="./openModal.svg" alt='Menu' />
                    </Flex> 
                )}
            </Container>
        </Flex>
        { menu ? <Menu openModal={menu} setOpenModal={handleOpenModalMenu} /> : "" }
        </>
    )
}
