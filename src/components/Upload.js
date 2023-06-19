import React from 'react'
import { Container, VStack, Input, HStack, Button } from '@chakra-ui/react'
import { AiOutlineCloudUpload } from 'react-icons/ai'

const Upload = () => {
  return (
    <Container maxW={'container.lg'}h={'100vh'} >
      <VStack justifyContent={'center'} h={'full'}>
        <AiOutlineCloudUpload size={'10vmax'} color={'purple.500'}></AiOutlineCloudUpload>
        <form action={''} >
        <HStack>
            <Input type={'file'} p={'1'}/>
            <Button colorScheme={'purple'} variant={'solid'} type={'submit'}>Upload</Button>
        </HStack>
        </form>

      </VStack>
    </Container>
  )
}

export default Upload
