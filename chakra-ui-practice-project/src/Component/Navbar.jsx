import { Box, Button, Flex, Heading, IconButton, Portal, Link, Menu, Text } from '@chakra-ui/react'
import React from 'react'
import { Links } from 'react-router'
import { IoReorderThree } from "react-icons/io5";
const Navbar = () => {

  const listItems = [

    { title: 'Home' },
    { title: 'About' },
    { title: 'Contact' },
    { title: 'Service' },
  ]

  return (
    <Box >

      <Box
        background='red.500'
        width='100%'
        p='16px'
        pr='50px'
        justifyContent='space-between'
        alignItems={'center'}
        display={{base: "none", md: 'none', lg: "flex"}}
      >
        <Box pl='50px'>
          <Heading fontWeight={'bold'} fontSize={'28px'}>Kodezen</Heading>
        </Box>

        <Flex >
          <Box display={'flex'} >
            {
              listItems.map(item => {
                return (
                  <Link >
                    <Text borderRight='2px solid #000'
                      padding={'5px'}
                      fontWeight={'bold'}
                      color={'#253822'}
                      _hover={{ bg: "#DE7D47" }}>{item.title}</Text>

                  </Link>

                )
              })
            }
          </Box>

        </Flex>



      </Box>
      <Box
        background="red.500"
        width="100%"
        py="16px"
        px={1}
        justifyContent="space-between"
        alignItems="center"
        display={{ base: "flex", md: "flex", lg: "none" }}
      >
        <Heading fontWeight={'bold'} fontSize={'15px'}>Kodezen</Heading>
        <Box>
          <Menu.Root>
            <Menu.Trigger asChild>
              <IconButton variant="plain" size="sm" margin={0} background="red.500" >
                <IoReorderThree/>
              </IconButton>
            </Menu.Trigger>
            <Portal>
              <Menu.Positioner>
                <Menu.Content>
                 {
                  listItems.map(item=>{
                    return(
                       <Menu.Item value={item.value}>{item.title}</Menu.Item>
                    )
                  })
                 }
                </Menu.Content>
              </Menu.Positioner>
            </Portal>
          </Menu.Root>
        </Box>
      </Box>


    </Box>
  )
}

export default Navbar