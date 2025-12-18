import { Box, Center, Container, Grid, Heading, Text, Flex } from '@chakra-ui/react'
import React from 'react'
import { FaShekelSign } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";

const ThirdSection = () => {
    
    return (
        <Container>
            <Box textAlign={{ base: 'center', md: 'center', }}>

                <Box  ml={{ base: '20px', md: '30px', lg: '40px' }} mb={{ base: '14px', md: '16px' }}>
                    <Text fontSize={'18px'} >We Provide Only Quality</Text>
                    <Heading fontSize={'30px'} letterSpacing={'2px'} > Our Primary Service</Heading>
                </Box>

                <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap="4" width={'1000px'} margin={'0px auto'} padding={'20px 0px'}>
                    <Flex alignItems="center" direction="column" bg='#008080' padding={'30px 15px'} borderRadius={'5px'} textAlign={'center'}>
                        <Box fontSize={'30px'} mb='12px '>< FaShekelSign /></Box>
                        <Heading m='15px 0px ' color='#FFFFFF'>Visual Composer</Heading>
                        <Text color='#FFFFFF' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, nam pariatur voluptate nisi impedit facilis aliquid suscipit, </Text>
                    </Flex>

                    <Flex alignItems="center" direction="column" bg='#008080' padding={'30px 15px'} borderRadius={'5px'} textAlign={'center'}>
                        <Box fontSize={'30px'} mb='12px '>< FaShekelSign /></Box>
                        <Heading m='15px 0px' color='#800000'>Visual Composer</Heading>
                        <Text color='#800000' fontWeight={'bold'}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, nam pariatur voluptate nisi impedit facilis aliquid suscipit, </Text>
                    </Flex>

                    <Flex alignItems={'center'} flexDirection={'column'} textAlign={'center'} bg='#008080' borderRadius={'5px'} padding={'30px 15px'}>
                        <Box fontSize={'30px'} mb='12px '>< FaShekelSign /></Box>
                        <Heading m='15px 0px '>Visual Composer</Heading>
                        <Text color='#800000' fontWeight={'bold'}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, nam pariatur voluptate nisi impedit facilis aliquid suscipit, </Text>
                    </Flex>

                    <Flex alignItems={'center'} flexDirection={'column'} textAlign={'center'} bg='#008080' borderRadius={'5px'} padding={'30px 15px'}>
                        <Box fontSize={'30px'} mb='12px '> <IoSettingsSharp /> </Box>
                        <Heading m='15px 0px '>Visual Composer</Heading>
                        <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, nam pariatur voluptate nisi impedit facilis aliquid suscipit, </Text>
                    </Flex>

                    <Flex alignItems={'center'} flexDirection={'column'} textAlign={'center'} bg='#008080' borderRadius={'5px'} padding={'30px 15px'}>
                        <Box fontSize={'30px'} mb='12px '> <FaShekelSign /> </Box>
                        <Heading m='15px 0px '>Visual Composer</Heading>
                        <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, nam pariatur voluptate nisi impedit facilis aliquid suscipit, </Text>
                    </Flex>

                    <Flex alignItems={'center'} flexDirection={'column'} textAlign={'center'} bg='#008080' borderRadius={'5px'} padding={'30px 15px'}>
                        <Box fontSize={'30px'} mb='12px '> <IoSettingsSharp /> </Box>
                        <Heading m='15px 0px '>Visual Composer</Heading>
                        <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, nam pariatur voluptate nisi impedit facilis aliquid suscipit, </Text>
                    </Flex>

                </Grid>
            </Box>





        </Container>
    )
}

export default ThirdSection