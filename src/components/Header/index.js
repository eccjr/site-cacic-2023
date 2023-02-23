import React, { useEffect, useState } from "react"
import { Flex, Image, Container, HStack, Text, Button } from "@chakra-ui/react" 
import { Link as Scroll } from "react-scroll"
import * as styles from "./linknav.module.scss"

const ScrollLink = (props) => {

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

const Header = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
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
        <Flex w="100vw" position="fixed" top="0" left="0" background={scrollPosition >= 40 ? "bg_color" : "transparent" }zIndex="1000">
            <Container maxW="90rem" margin="auto" padding="2.5 16">
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
            </Container>
        </Flex>
    )
}

export default Header