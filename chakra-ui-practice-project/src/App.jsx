import { Box } from '@chakra-ui/react'
import React from 'react'
import Navbar from './Component/Navbar'
import Mainarea from './Component/Mainarea/Mainarea'
import Section from './Component/Section/Section'
import Secondsection from './Component/Secondsection/Secondsection'

const App = () => {
  return (
    <div>
     <Navbar />
     <Mainarea />
     <Section />
     <Secondsection />

    </div>
  )
}

export default App