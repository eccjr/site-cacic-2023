import * as React from "react"
import { Flex } from "@chakra-ui/react" 
import { theme } from './theme'
import { ChakraProvider } from '@chakra-ui/react'
import Helmet from "react-helmet";
import Header from "../components/Header"

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
      >
        <Header/>
        <Inicio />

      </Flex>
    </ChakraProvider>
  )
}

export default IndexPage