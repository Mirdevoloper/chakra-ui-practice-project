import { Box, Button, Container, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import jslogo from './../../../../public/image/javascript2.png'
import clogo from './../../../../public/image/C++.png'
import phplogo from './../../../../public/image/php.jpeg'
const Sectionjslogo = () => {

    return (


        <Container bg={'#B5614E'}>
            <Box >
                <Box textAlign={'center'} >
                    <Heading fontSize={'36px'} fontWeight={'bold'} padding={'30px 0px'}>Course Pricing</Heading>
                </Box>

                <Flex width={'1000px'} margin={'0px auto'} textAlign={'center'}>
                    <Box w='300px' m='12px'>
                        <Flex justifyContent={'center'}>
                            <Image src={jslogo} alt='' w='120px' />
                        </Flex>
                        <Heading m='8px'>JavaScript</Heading>
                        <Text m='16px'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, numquam maxime? Sequi adipisci, at doloribus blanditiis iusto sunt impedit </Text>
                        <Flex justifyContent={'center'}>
                            <Heading fontSize={'24px'}  mr='5px'>$29</Heading>
                            <Text>Per Month</Text>
                        </Flex>
                        <Button  m="12px" bg='#B50D3F' color='#000'>Get Started </Button>
                        <Text fontWeight={'bold'}>Course Outline</Text>
                    </Box>

                    <Box w='300px' m='12px' >
                        <Flex justifyContent={'center'}>
                            <Image src={clogo} alt='' />
                        </Flex>
                        <Heading m='8px'>JavaScript</Heading>
                        <Text m='16px' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, numquam maxime? Sequi adipisci, at doloribus blanditiis iusto sunt impedit </Text>
                        <Flex justifyContent={'center'} >
                            <Heading mr='5px' fontSize={'24px'} >$29</Heading>
                            <Text>Per Month</Text>
                        </Flex>

                        <Button  m="12px" bg='#B50D3F' color='#000'>Get Started </Button>
                        <Text fontWeight={'bold'}>Course Outline</Text>
                    </Box>


                    <Box w='300px' m='12px'>
                        <Flex justifyContent={'center'}>
                            <Image src={phplogo} alt='' />
                        </Flex>
                        <Heading m='8px'>JavaScript</Heading>
                        <Text m='16px'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, numquam maxime? Sequi adipisci, at doloribus blanditiis iusto sunt impedit </Text>
                        <Flex justifyContent={'center'}>
                            <Heading  mr='5px' fontSize={'24px'} >$29</Heading>
                            <Text>Per Month</Text>
                        </Flex>

                        <Button m="12px" bg='#B50D3F' color='#000'>Get Started </Button>
                        <Text fontWeight={'bold'}>Course Outline</Text>
                    </Box>

                </Flex>

            </Box>

        </Container>
    )
}


export default Sectionjslogo