import React from 'react'
import {Link} from "react-router-dom"
import {BiMenuAltLeft} from 'react-icons/bi'
import {Drawer, DrawerBody, DrawerContent, useDisclosure, Button, DrawerOverlay, DrawerCloseButton, DrawerHeader, VStack, HStack} from '@chakra-ui/react'

const Header = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();

    return (
        <div>
            <Button colorScheme={'purple'} onClick={onOpen} pos={"fixed"} top={'4'} left={'4'} w={'10'} h={"10"} p={'0'} borderRadius={'full'}>
                <BiMenuAltLeft size={"20"}/>
            </Button>

            <Drawer isOpen={isOpen} placement='left' onClose={onClose} >
                <DrawerOverlay />
                <DrawerContent >
                    <DrawerCloseButton />
                    <DrawerHeader> VIDEO HUB</DrawerHeader>
                    <DrawerBody>
                        <VStack>

                        <Button colorScheme={"purple"} variant={'ghost'} onClick={onClose}>
                            <Link to={'/'}>Home</Link>
                        </Button>

                        <Button colorScheme={"purple"} variant={'ghost'} onClick={onClose}>
                            <Link to={'/videos'}>Videos</Link>
                        </Button>

                        <Button colorScheme={"purple"} variant={'ghost'} onClick={onClose}>
                            <Link to={'/videos?category=free'}>Free videos</Link>
                        </Button>

                        <Button colorScheme={"purple"} variant={'ghost'} onClick={onClose}>
                            <Link to={'/upload'}>Upload video</Link>
                        </Button>
                        </VStack>

                        <HStack w={'full'} justifyContent={'space-evenly'} pos={'absolute'} left ={'0'} bottom={'10'}>
                        <Button colorScheme={"purple"} variant={'solid'} onClick={onClose}>
                            <Link to={'/login'}>Login</Link>
                        </Button>
                        <Button colorScheme={"purple"} variant={'outline'} onClick={onClose}>
                            <Link to={'/signup'}>Signup</Link>
                        </Button>
                        </HStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </div>
  )
}

export default Header
