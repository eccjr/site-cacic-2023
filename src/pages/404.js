import * as React from "react"
import Helmet from "react-helmet"
import { theme } from "../styles/theme"
import { ChakraProvider, Flex, Text } from '@chakra-ui/react'
import { Link } from "gatsby"


const NotFoundPage = () => {
  return (
    <ChakraProvider theme={theme}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>CACIC | NOT FOUND</title>
        <link rel="icon" type="image/x-icon" href="./logo2_com_fundo.png"></link>
        <meta name="description" content="CACIC | Associação estudantil sem fins lucrativos" />
      </Helmet>

      <Flex 
        align="center" 
        justify="center"
        fontFamily="Roboto"
        background="bg_color"
        flexDirection="column"
        w="100vw"
        h="100vh"
      >
        <Text fontSize="5xl" color="white">Página não encontrada</Text>
        <Text fontSize="2xl" color="white" >Voltar para o <Link href="/"><a style={{color: "#915CF3",fontWeight: "bold",letterSpacing: "0.1rem", textDecoration: "underline"}}>ÍNICIO</a></Link></Text>
      </Flex>
    </ChakraProvider>
  )
}

export default NotFoundPage
