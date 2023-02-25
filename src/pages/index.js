import * as React from "react"
import { Flex } from "@chakra-ui/react" 
import { theme } from "../styles/theme"
import { ChakraProvider } from '@chakra-ui/react'

import Helmet from "react-helmet"
import { Header } from "../components/Header"
import Inicio from "../components/Inicio"
import Sobre from "../components/Sobre"
import Projetos from "../components/Projetos"
import Festas from "../components/Festas"
import Equipe from "../components/Equipe"
import Footer from "../components/Footer"

import "./main.scss"

const IndexPage = () => {

  return (
    <ChakraProvider theme={theme}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>CACIC | INÍCIO</title>
        <link rel="icon" type="image/x-icon" href="./logo2_com_fundo.png"></link>
        <meta name="description" content="CACIC | Associação estudantil sem fins lucrativos" />
      </Helmet>
      <Flex
        align="center" 
        justify="center"
        fontFamily="Roboto"
        background="bg_color"
        flexDirection="column"
        backgroundImage={
          [
            "radial-gradient(14rem 14rem at 4% 0.5%, rgba(145, 92, 243, 0.33) 0%, rgba(145, 92, 243, 0) 100%), radial-gradient(20rem 20rem at 100% 31%, rgba(145, 92, 243, 0.09) 0%, rgba(145, 92, 243, 0) 100%), radial-gradient(12rem 12rem at -10% 40%, rgba(145, 92, 243, 0.20) 0%, rgba(145, 92, 243, 0) 100%), radial-gradient(11rem 11rem at 100% 55%, rgba(145, 92, 243, 0.22) 0%, rgba(145, 92, 243, 0) 100%), radial-gradient(15rem 15rem at 0% 87%, rgba(145, 92, 243, 0.13) 0%, rgba(145, 92, 243, 0) 100%)",
            "radial-gradient(25% 9% at 13% 5%, rgba(145, 92, 243, 0.33) 0%, rgba(145, 92, 243, 0) 100%), radial-gradient(25% 10% at 94% 20%, rgba(145, 92, 243, 0.33) 0%, rgba(145, 92, 243, 0) 100%), radial-gradient(20% 8% at 0% 40%, rgba(145, 92, 243, 0.17) 0%, rgba(145, 92, 243, 0) 100%), radial-gradient(25% 10% at 95% 60%, rgba(145, 92, 243, 0.33) 0%, rgba(145, 92, 243, 0) 100%), radial-gradient(20% 8% at 2% 85%, rgba(145, 92, 243, 0.33) 0%, rgba(145, 92, 243, 0) 100%)"
          ]
        }
        overflow="hidden"
        zIndex="50"
      >
        <Header/>
        <Inicio />
        <Sobre />
        <Projetos />
        <Festas />
        <Equipe />
        <Footer />
      </Flex>
    </ChakraProvider>
  )
}

export default IndexPage