import * as React from "react"
import { Flex, Image, Container, Text } from "@chakra-ui/react" 
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/autoplay"
import "./swiperNavigationCustom.css"

const jsonData = require("./equipe.json")

const Equipe = () => {

    return (
        <Flex id="equipe" w="100vw" mt="11.25rem">
            <Container  maxW={["22rem","90rem"]} margin="auto" padding="2.5 16" style={{ userSelect: "none" }}>
            <Flex flexDir="column" align="center" justify="center">
                <Text fontWeight="700" fontSize={["4xl","5xl"]} letterSpacing={["0.2rem",""]} color="white">EQUIPE</Text>
                <Flex w="100%" mt="20" align="center" justify="center">

                    <Swiper
                        modules={[Navigation]}
                        navigation={true}
                        slidesPerView={1}
                        spaceBetween={10}
                        rewind={true}
                        
                        breakpoints={{
                            320: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                            },
                            480: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                            },
                            640: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                            },
                            980: {
                            slidesPerView: 5,
                            spaceBetween: 20,
                            },
                        }}
                    >
                        {jsonData.equipe.map((e, index) => (
                            <SwiperSlide key={index}>
                                <Image src={`./equipe/${e}`}  alt={`image_${e}`} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </Flex>
            </Flex>
            </Container>
        </Flex>
    )
}

export default Equipe