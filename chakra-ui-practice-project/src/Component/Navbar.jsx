import { Box, Button, Flex, Heading, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { Links } from 'react-router'

const Navbar = () => {

  const listItems = [
  
    { title:'Home' },
    { title: 'About' },
    { title: 'Contact' },
    { title: 'Service' },
  ]

  return (
    <Box >

      <Flex
        background='red.500' width='100%' p='16px' pr='50px'
        justifyContent='space-between' alignItems={'center'}
      >
        <Box pl='50px'>
          <Heading fontWeight={'bold'}fontSize={'28px'}>Kodezen</Heading>
        </Box>



        <Flex >
          <Box display={'flex'} >

            {
              listItems.map(item => {
                return (
                 
                    <Link >
                      <Text borderRight='2px solid #000' padding={'5px'} fontWeight={'bold'} color={'#253822'} _hover={{bg:"#DE7D47"}}>{item.title}</Text>

                    </Link>
                                                           
                )
              })
            }
          </Box>

        </Flex>



      </Flex>
    </Box>
  )
}

export default Navbar