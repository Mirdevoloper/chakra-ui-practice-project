import { Box, Container, Flex, Grid, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { TiStar } from "react-icons/ti";
import manimg from './../../../public/image/manimg.jpeg'

const Testimonial = () => {

    return (

        <Container  bg='#3A4742' padding={'80px 0px'}  w='100%'  >


            <Box width={'1000px'} m='0px auto' >

                <Box ml={{base:'20px', md:'', lg:''}} textAlign={{base:'center', md:'', lg:''}} fontWeight={'bold'} color='#fff' m='18px 0px'>
                    <Heading fontSize={'3xl'} m='8px 0px' > Testimonials</Heading>
                    <Text color='#fff' letterSpacing={'0.5em'} >Happy Costumers</Text>
                </Box>

                <Grid  templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(2, 1fr)' }} ml={{base:'200px', md:'', lg:''}}>
                    <Box color='#fff' w='330px'  boxShadow={'md'}  p='12px 0px'>
                        <Flex m='16px 0px' justifyContent={'center'} >
                            <Image src={manimg} alt='' w='150px' h='150px' borderRadius={'50%'} />
                        </Flex>

                        <Box textAlign={'center'}>
                            <Flex justifyContent={'center'}  >
                                <Heading fontWeight={'bold'} fontSize={'22px'}>John Doe</Heading>
                                <Text>- Google Inc</Text>
                            </Flex>
                            <Text m='16px  0px'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, facilis perspiciatis, eaque accusantium </Text>
                            <Flex justifyContent={'center'} >
                                <TiStar /><TiStar /><TiStar /><TiStar /> <TiStar />

                            </Flex>
                        </Box>

                    </Box>

                    <Box color='#fff' w='330px' boxShadow={'md'}  p='12px 0px'> 

                        <Flex m='16px 0px' justifyContent={'center'} >
                            <Image src={manimg} alt='' w='150px' h='150px' borderRadius={'50%'} />
                        </Flex>

                        <Box textAlign={'center'}>
                            <Flex justifyContent={'center'}  >
                                <Heading fontWeight={'bold'} fontSize={'22px'}>John Doe</Heading>
                                <Text>- Google Inc</Text>
                            </Flex>
                            <Text m='16px  0px'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, facilis perspiciatis, eaque accusantium </Text>
                            <Flex justifyContent={'center'} >
                                <TiStar /><TiStar /><TiStar /><TiStar /> <TiStar />

                            </Flex>
                        </Box>
                    </Box>

                    <Box color='#fff' w='330px' boxShadow={'md'}  p='12px 0px'>

                        <Flex m='16px 0px' justifyContent={'center'} >
                            <Image src={manimg} alt='' w='150px' h='150px' borderRadius={'50%'} />
                        </Flex>

                        <Box textAlign={'center'}>
                            <Flex justifyContent={'center'}  >
                                <Heading fontWeight={'bold'} fontSize={'22px'}>John Doe</Heading>
                                <Text>- Google Inc</Text>
                            </Flex>
                            <Text m='16px  0px'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, facilis perspiciatis, eaque accusantium </Text>
                            <Flex justifyContent={'center'} >
                                <TiStar /><TiStar /><TiStar /><TiStar /> <TiStar />

                            </Flex>
                        </Box>
                    </Box>

                    <Box color='#fff' w='330px' boxShadow={'md'}  p='12px 0px'>

                        <Flex m='16px 0px' justifyContent={'center'} >
                            <Image src={manimg} alt='' w='150px' h='150px' borderRadius={'50%'} />
                        </Flex>

                        <Box textAlign={'center'}>
                            <Flex justifyContent={'center'}  >
                                <Heading fontWeight={'bold'} fontSize={'22px'}>John Doe</Heading>
                                <Text>- Google Inc</Text>
                            </Flex>
                            <Text m='16px  0px'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, facilis perspiciatis, eaque accusantium </Text>
                            <Flex justifyContent={'center'} >
                                <TiStar /><TiStar /><TiStar /><TiStar /> <TiStar />

                            </Flex>
                        </Box>

                    </Box>

                    

                    
                    
                </Grid>

            </Box>
        </Container>


    )
}

export default Testimonial