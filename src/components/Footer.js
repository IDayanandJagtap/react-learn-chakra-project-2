import React from 'react'
import { Box, Button, HStack, Heading, Stack, VStack, Input, Text } from '@chakra-ui/react';
import { AiFillCaretRight, AiFillFacebook, AiFillTwitterCircle, AiFillYoutube, AiOutlineInstagram } from 'react-icons/ai';

const Footer = () => {
    return (
        <Box bgColor={'blackAlpha.900'} w={'full'} h={['fit-content', '30vh']} color={'whiteAlpha.800'}> 
            <Stack direction={['column', 'row']} justifyContent={'center'} alignItems={'center'} h={'full'} rowGap={['12', '3']} p={['6', '0']}>
                <VStack w={'full'}  p={'2'} rowGap={'3'} >
                    <Heading  textTransform={'uppercase'} textAlign={['center', 'left']}>Subscribe to us </Heading>
                    <HStack  w={'80%'}>
                        <Input placeholder={'Enter email here...'} outline={'none'}  focusBorderColor="none" border={'none'} size={'30'} p={'2'} borderBottom={'2px solid white'}/>
                        <Button colorScheme={'purple'} varient={'ghost'} borderRadius={'0 20px 20px 0'}  >
                            <AiFillCaretRight size={'30'}  />
                        </Button>
                    </HStack>
                </VStack>
                <VStack w={['95%', 'full']} 
                    borderLeft={['none', '1px solid #f7f7f7']}
                    borderRight={['none', '1px solid #f7f7f7']} 
                    borderTop={['1px solid #f7f7f7', 'none']} 
                    borderBottom={['1px solid #f7f7f7', 'none']}
                    py={['10', '0']} 
                    h={'70%'} 
                    justifyContent={'center'} rowGap={'3'}>

                    <Heading textTransform={'uppercase'} >Video Hub</Heading>
                    <Text>All rights reserved</Text>
                </VStack>
                <VStack w={'full'} rowGap={'3'}>
                    <Heading textTransform={'uppercase'} >Social Media</Heading>
                    <HStack columnGap={'3'}>
                        <Button borderRadius={'full'} colorScheme={'purple'} h={'50'} w={'50'} ><AiFillYoutube size={'20'}></AiFillYoutube></Button>
                        <Button borderRadius={'full'} colorScheme={'purple'} h={'50'} w={'50'} ><AiFillFacebook size={'20'}></AiFillFacebook></Button>
                        <Button borderRadius={'full'} colorScheme={'purple'} h={'50'} w={'50'} ><AiFillTwitterCircle size={'20'}></AiFillTwitterCircle></Button>
                        <Button borderRadius={'full'} colorScheme={'purple'} h={'50'} w={'50'} ><AiOutlineInstagram size={'20'}></AiOutlineInstagram></Button>
                    </HStack>
                </VStack>
            </Stack>
        </Box>
    );
}

export default Footer 