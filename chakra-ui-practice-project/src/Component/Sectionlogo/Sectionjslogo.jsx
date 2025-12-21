import { Box, Button, Container, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import jslogo from './../../../public/image/javascript2.png'

import phplogo from './../../../public/image/php.jpeg'
import clogo from './../../../public/image/php.jpeg'

const Sectionjslogo = () => {

    return (


        <Container  padding={'100px 0px'} >

            <Box >

                <Box textAlign={{base:'center' , md:'auto', lg:'auto'}} ml={{base: '50px'}} >
                    <Heading fontSize={'56px'} fontWeight={'bold'} padding={'50px 0px'}>Course Pricing</Heading>
                </Box>

                <Flex  flexDirection={{base:'column', md:'row', lg:'row'}}  ml={{base: '150px'}}>
                    
                    <Box textAlign={{base:'center' , md:'auto'}} w='300px' m='12px' boxShadow={'2xl'} >
                        <Flex justifyContent={'center'}>
                            <Image src={jslogo} alt='' w='120px' />
                        </Flex>
                        <Heading m='8px'>JavaScript</Heading>
                        <Text m='16px'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, numquam maxime? Sequi adipisci, at doloribus blanditiis iusto sunt impedit </Text>
                        <Flex justifyContent={'center'}>
                            <Heading fontSize={'24px'} mr='5px'>$29</Heading>
                            <Text>Per Month</Text>
                        </Flex>
                        <Button m="12px" bg='#B50D3F' color='#000'>Get Started </Button>
                        <Text fontWeight={'bold'} mb={'12px'}>Course Outline</Text>
                    </Box>

                    <Box textAlign={{base:'center' , md:'auto'}} w='300px' m='12px' boxShadow={'2xl'} >
                        <Flex justifyContent={'center'}>
                            <Image src={clogo} alt='' />
                        </Flex>
                        <Heading m='8px'>JavaScript</Heading>
                        <Text m='16px' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, numquam maxime? Sequi adipisci, at doloribus blanditiis iusto sunt impedit </Text>
                        <Flex justifyContent={'center'} >
                            <Heading mr='5px' fontSize={'24px'} >$29</Heading>
                            <Text>Per Month</Text>
                        </Flex>

                        <Button m="12px" bg='#B50D3F' color='#000'>Get Started </Button>
                        <Text fontWeight={'bold'} mb={'12px'}>Course Outline</Text>
                    </Box>


                    <Box textAlign={{base:'center' , md:'auto'}} w='300px' m='12px' boxShadow={'2xl'} >
                        <Flex justifyContent={'center'}>
                            <Image src={phplogo} alt='' />
                        </Flex>
                        <Heading m='8px'>JavaScript</Heading>
                        <Text m='16px'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, numquam maxime? Sequi adipisci, at doloribus blanditiis iusto sunt impedit </Text>
                        <Flex justifyContent={'center'}>
                            <Heading mr='5px' fontSize={'24px'} >$29</Heading>
                            <Text>Per Month</Text>
                        </Flex>

                        <Button m="12px" bg='#B50D3F' color='#000'>Get Started </Button>
                        <Text fontWeight={'bold'} mb={'12px'}>Course Outline</Text>
                    </Box>

                </Flex>

            </Box>



        </Container>
    )
}


export default Sectionjslogo
