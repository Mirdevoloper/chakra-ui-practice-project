import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { FaLaptopCode } from "react-icons/fa";


const Section = () => {


    return (

        <Box bg={'#008080'} h='90vh'>
            <Flex m='0 auto' w='1000px' justifyContent={'space-around'} pt='100px'  >
                <Box  color={'#Feart'} textAlign={'center'} padding={'20px 25px'} w='300px' borderRadius={'10px'} _hover={{bg:"#DE7D47"}}>
                    <Flex justifyContent={'center'} fontSize={'50px'} mb={'10px'}>
                        <FaLaptopCode />
                    </Flex>
                    <Heading mb='12px' fontSize={'22px'}>Learning Practice Code</Heading>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis tenetur nobis voluptate minus, recusandae delectus similique placeat quae deserunt saepe magnam totam vero repellat, eligendi nostrum praesentium tempora nisi. Soluta.</Text>
                </Box>

                <Box padding={'22px 25px'} textAlign={'center'} w='300px'  borderRadius={'10px'} color='#fff' _hover={{boxShadow: 'md' }}>
                    <Flex justifyContent={'center'} fontSize={'50px'} mb={'10px'}>
                        <FaLaptopCode />
                    </Flex>
                    <Heading mb='12px' fontSize={'22px'}>Learning Practice Code</Heading>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis tenetur nobis voluptate minus, recusandae delectus similique placeat quae deserunt saepe magnam totam vero repellat, eligendi nostrum praesentium tempora nisi. Soluta.</Text>
                </Box>

                <Box  padding={'20px 25px'} textAlign={'center'} w='300px' borderRadius={'10px'}   _hover={{boxShadow: 'md' }}>
                    <Flex justifyContent={'center'} fontSize={'50px'} mb={'10px'}>
                        <FaLaptopCode />
                    </Flex>
                    <Heading mb='12px' fontSize={'22px'}>Learning Practice Code</Heading>
                    <Text >Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis tenetur nobis voluptate minus, recusandae delectus similique placeat quae deserunt saepe magnam totam vero repellat, eligendi nostrum praesentium tempora nisi. Soluta.</Text>
                </Box>
            </Flex>
        </Box>
    )
}

export default Section