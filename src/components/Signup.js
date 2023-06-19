import React from 'react'
import { Container, Heading, VStack, Input, Button, Text, Stack, useColorModeValue, Avatar } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Signup = () => {
  const stackBgColor = useColorModeValue('purple.50', "gray.600")
  return (
    <Container maxW={'container.lg'} h={"100vh"}>
        <Stack w={'full'} h={'full'} alignItems={'center'} justifyContent={'center'}> 
        <VStack justifyContent={'center'} alignItems={'stretch'} h={'fit-content'} w={['95%', '50%']} mx={'auto'} spacing={"10"} py={'8'} borderRadius={'16px'} bgColor={stackBgColor} boxShadow={'lg'}>
            <Heading size={['md', 'lg']} textAlign={"center"}>VIDEO HUB</Heading>
            <Avatar alignSelf={'center'} boxSize={'32'}/>
            <form action={""}>
                <VStack alignItems={'stretch'} w={"80%"} mx={'auto'} >
                    <Input type={"text"} placeholder={'Name '} focusBorderColor='purple.500' border={'1px solid #805ad5'}  required></Input>
                    <Input type={"email"} placeholder={'Email '} focusBorderColor='purple.500' border={'1px solid #805ad5'} my={'3'} required></Input>
                    <Input type={"password"} placeholder={'Password'} focusBorderColor='purple.500' border={'1px solid #805ad5'} required></Input>
                    <Input type={"password"} placeholder={'Confirm password'} focusBorderColor='purple.500' border={'1px solid #805ad5'} required></Input>
                    <Button variant={'solid'} colorScheme='purple' type={"submit"} mt={'4'}>Sign Up</Button>
                    <Text color={'purple.500'} alignSelf={'flex-end'}>Already have an account ? <Button variant={'link'} colorScheme='purple' ><Link to='/login'>Log In</Link></Button></Text>
                </VStack>
            </form>
        </VStack>
        </Stack>
    </Container>
  )
}


export default Signup
