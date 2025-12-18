import { Box } from '@chakra-ui/react'
import React from 'react'
import Navbar from './Component/Navbar'
import Mainarea from './Component/Mainarea/Mainarea'
import Section from './Component/Section/Section'
import Secondsection from './Component/Secondsection/Secondsection'
import ThirdSection from './Component/Thirdsection/ThirdSection'

import Testimonial from './Component/testimonial/Testimonial'
import Sectionjslogo from './Component/Sectionlogo/Sectionjslogo'



const App = () => {
  return (
    <div>
      <Navbar />
      <Mainarea />
      <Section />
      <Secondsection />
      <ThirdSection />
      <Sectionjslogo />
      <Testimonial />
    </div>
  )
}

export default App