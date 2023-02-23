import * as React from "react"
import { Flex } from "@chakra-ui/react" 
import { theme } from './theme'
import { ChakraProvider } from '@chakra-ui/react'
import "./main.scss"
import Helmet from "react-helmet"
import Header from "../components/Header"
import Inicio from "../components/Inicio"
import Sobre from "../components/Sobre"
import Projetos from "../components/Projetos"

const IndexPage = () => {

  return (
    <ChakraProvider theme={theme}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>CACIC</title>
        <link rel="icon" type="image/x-icon" href="./logo.svg"></link>
        <meta name="description" content="CACIC | Associação estudantil sem fins lucrativos" />
      </Helmet>

      <Flex
        align="center" 
        justify="center"
        fontFamily="Roboto"
        background="bg_color"
        flexDirection="column"
        backgroundImage="radial-gradient(20% 20% at 13% 25%, rgba(145, 92, 243, 0.33) 0%, rgba(145, 92, 243, 0) 100%), radial-gradient(30% 30% at 94% 60%, rgba(145, 92, 243, 0.33) 0%, rgba(145, 92, 243, 0) 100%)"
        overflow="hidden"
        zIndex="50"
      >
        <Header/>
        <Inicio />
        <Sobre />
        <Projetos />

      </Flex>
    </ChakraProvider>
  )
}

export default IndexPage