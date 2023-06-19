import React from 'react'
import { Container, Heading, VStack, Input, Button, Text, Stack, useColorModeValue } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Login = () => {
  const stackBgColor = useColorModeValue('purple.50', "gray.600")
  return (
    <Container maxW={'container.lg'} h={"100vh"}>
        <Stack w={'full'} h={'full'} alignItems={'center'} justifyContent={'center'}> 
        <VStack justifyContent={'center'} alignItems={'stretch'} h={['fit-content', '80%']} w={['95%', '50%']} mx={'auto'} spacing={"10"} py={['8', '0']} borderRadius={'16px'} bgColor={stackBgColor} boxShadow={'lg'}>
            <Heading size={['md', 'lg']} textAlign={"center"}>Welcome back !</Heading>
            <form action={""}>
                <VStack alignItems={'stretch'} w={"80%"} mx={'auto'} >
                    <Input type={"email"} placeholder={'Email '} focusBorderColor='purple.500' border={'1px solid #805ad5'} required></Input>
                    <Input type={"password"} placeholder={'Password'} focusBorderColor='purple.500' border={'1px solid #805ad5'} required></Input>
                    <Button variant={'link'} colorScheme='purple' alignSelf={'flex-end'}><Link to='/forgetpassword'>Forget password ?</Link></Button>
                    <Button variant={'solid'} colorScheme='purple' type={"submit"} mt={'4'}>Log in</Button>
                    <Text color={'purple.500'} alignSelf={'flex-end'}>New user ? <Button variant={'link'} colorScheme='purple' ><Link to='/signup'>signup</Link></Button></Text>
                </VStack>
            </form>
        </VStack>
        </Stack>
    </Container>
  )
}

export default Login
