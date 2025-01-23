import React from 'react'
import Card from './Card'
import Services from './Services'
import Persanol from './Persanol'
import People from './People'



const About = () => {
  return (
    <div>

      <div>
        <Card/>
    
      </div>
      <div>
        <Persanol/>
        <People/>

      </div>

      <div>
        <Services/>
      </div>
    </div>
  )
}

export default About