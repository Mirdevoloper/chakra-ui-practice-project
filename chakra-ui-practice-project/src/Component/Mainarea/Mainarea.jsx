import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { FcHome } from "react-icons/fc";
import { FaLaptopCode } from "react-icons/fa";
const Mainarea = () => {



    return (
        <Box>
            <Box bgImage="url('public/image/bgimg.jpeg')" bgPosition="center"
                bgRepeat="no-repeat"
                bgSize="cover"
                height="90vh"
              
            >
                <Box textAlign={'center'} pt='100px'>

                    <Text  color={'#F87C63'} fontWeight={'bold'} fontSize={'24px'}>You Can Learn Codeing</Text>
                    <Heading width={'500px'} bg={'#402222'} m="auto" p='20px 20px' mt={'50px '} color={'#C2533D'} fontWeight={'bold'} fontSize={'36px'} lineHeight={'1.5'} borderRadius={'10px'}>Welcome to Kodezen Website</Heading>
                    <Text mt={'25px '} color={'#F87C63'} fontWeight={'bold'}>With a lote of Our  product </Text>

                    <Flex justifyContent={'center'} gap={'30px'} mt='30px' fontSize={'40px'} >
                       <FcHome />
                       <FaLaptopCode />

                    </Flex>
                    <Button borderRadius={'10px'} bg='#7D4B4B' mt='30px'_hover={{bg:'#000'}}>Purchase our Courses</Button>

                </Box>
            </Box>
        </Box>
    )
}

export default Mainarea