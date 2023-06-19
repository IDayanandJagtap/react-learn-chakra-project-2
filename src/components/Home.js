import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"
import img5 from "../assets/5.png"

const headingOptions = {
    pos: 'absolute',
    top: '50%', 
    left: '50%', 
    transform : 'translate(-50%, -50%)',
    textTransform : 'uppercase', 
    p: '4', 
    size: '4xl'
} 

const Home = () => {
  return (
    <Box >
      <MyCarousel />

      <Container maxW={'container.xl'}  minH={'100vh'} >
        <Heading borderBottom={'3px solid black'} w={'fit-content'} p={'2'} m={'auto'} marginTop={'6'}>Services</Heading>

        <Stack alignItems={'center'} direction={['column', 'row']} justifyContent={'center'}  p={'4'} h={['fit-content', '80vh']}>
            <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'}/>
            <Text letterSpacing={"widest"} lineHeight={'190%'} textAlign={['center', 'right']}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi nulla porro itaque maxime corrupti magnam cum quis perspiciatis, officiis cumque sequi fugiat aperiam soluta? Praesentium deserunt aliquid, quis placeat dolorum vitae iste. Suscipit, laudantium culpa minima eos exercitationem eaque in nam, dolorum eum inventore corrupti. Numquam suscipit eveniet recusandae accusantium perspiciatis delectus at eligendi laboriosam repudiandae nam, fugiat molestiae enim odio ipsam ratione nulla? Et totam at soluta necessitatibus rem inventore dignissimos nulla nisi asperiores. Incidunt maiores ratione ipsam, obcaecati alias corporis perferendis! Error tempore velit, saepe et quis exercitationem obcaecati modi quos aperiam quia provident fugit ad impedit amet!
            </Text>
        </Stack>
      </Container>
    </Box>
  )
}

const MyCarousel = () => (
    <Carousel autoPlay infiniteLoop interval={'1000'}  showArrows={false} showThumbs={false} showStatus={false} >
        <Box w={'full'} h={'100vh'} >
            <Image src={img1} w={'full'} h={'full'}/>
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>Watch the Future</Heading>
        </Box>
        <Box w={'full'} h={'100vh'} >
            <Image src={img2} w={'full'} h={'full'}/>
            <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>Future is gaming</Heading>
        </Box>
        <Box w={'full'} h={'100vh'} >
            <Image src={img3} w={'full'} h={'full'}/>
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>Gaming console</Heading>
        </Box>
        <Box w={'full'} h={'100vh'} >
            <Image src={img4} w={'full'} h={'full'}/>
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>Night life is cool</Heading>
        </Box>
    </Carousel>
)

export default Home
