import React from 'react'
import { Box, Button, HStack, Heading, Stack, VStack, Input, Text } from '@chakra-ui/react';
import { AiFillCaretRight, AiFillFacebook, AiFillTwitterCircle, AiFillYoutube, AiOutlineInstagram } from 'react-icons/ai';

const Footer = () => {
    return (
        <Box bgColor={'blackAlpha.900'} w={'full'} h={['fit-content', '30vh']} color={'whiteAlpha.800'}> 
            <Stack direction={['column', 'row']} justifyContent={'center'} alignItems={'center'} h={'full'} rowGap={['12', '3']} p={['6', '0']}>
                <VStack w={'full'}  p={'2'} rowGap={'3'} >
                    <Heading size={'lg'} textTransform={'uppercase'} textAlign={['center', 'left']}>Subscribe to us </Heading>
                    <HStack  w={'80%'} borderBottom={'2px solid white'}>
                        <Input placeholder={'Enter email here...'} outline={'none'}  focusBorderColor="none" border={'none'} size={'30'} p={'2'} />
                        <Button colorScheme={'purple'} variant={'link'} borderRadius={'0 15px 15px 0'} p={'0'} >
                            <AiFillCaretRight size={'20'}  />
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

                    <Heading size={'lg'} textTransform={'uppercase'} >Video Hub</Heading>
                    <Text>All rights reserved</Text>
                </VStack>
                <VStack w={'full'} rowGap={'3'}>
                    <Heading size={'lg'} textTransform={'uppercase'} >Social Media</Heading>
                    <HStack columnGap={'3'}>
                        <Button borderRadius={'full'} variant={"ghost"} colorScheme={'purple'} h={'45'} w={'45'} ><AiFillYoutube size={'20'}></AiFillYoutube></Button>
                        <Button borderRadius={'full'} variant={"ghost"} colorScheme={'purple'} h={'45'} w={'45'}  ><AiFillFacebook size={'20'}></AiFillFacebook></Button>
                        <Button borderRadius={'full'} variant={"ghost"} colorScheme={'purple'} h={'45'} w={'45'}  ><AiFillTwitterCircle size={'20'}></AiFillTwitterCircle></Button>
                        <Button borderRadius={'full'} variant={"ghost"} colorScheme={'purple'} h={'45'} w={'45'}  ><AiOutlineInstagram size={'20'}></AiOutlineInstagram></Button>
                    </HStack>
                </VStack>
            </Stack>
        </Box>
    );
}

export default Footer 