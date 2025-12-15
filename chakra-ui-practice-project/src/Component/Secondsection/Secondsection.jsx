import { Box, Button, Container, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import girlImg from './../../../public/image/girl.png'

const Secondsection = () => {

    return (

        <Container>
            <Box >
                <Box padding={'100px'}>
                    <Heading textAlign={'center'} fontSize={'40px'} textDecoration={'underline'}>
                        Smart Code Practice
                    </Heading>
                </Box>


                <Flex width={'1000px'} margin={'0px auto'} alignItems={'center'}  justifyContent={'space-between'}>
                    <Box>
                        <Image src={girlImg} alt='' />
                    </Box>
                    <Box width={'500px'}>

                        <Text margin={'15px 0px'} fontSize={'18px'} color={'#800000'}>TRY SOMETHING NEW FOR YOU</Text>
                        <Heading fontSize={'2xl'} margin={'16px 0px'} letterSpacing={'4px'}>Create Own website</Heading>
                        <Text fontSize={'18px'}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur in itaque, fugiat quisquam eius odio eos aliquam suscipit voluptate! Nobis quaerat sequi alias, omnis blanditiis vel dolore aliquid facilis velit.</Text>

                        <Button margin={'30px 0px'} bg='#fea576' color='#000'>Check Our</Button>

                    </Box>
                </Flex>


            </Box>
        </Container>
    )
}

export default Secondsection