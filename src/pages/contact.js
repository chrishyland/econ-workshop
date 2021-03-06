import React from 'react'

import Layout from '../components/layout'
import './index.css';

const AboutPage = (props) => {

  return (
    <Layout>
        
        <h3 style={{textAlign: 'left', fontFamily: 'arial, monospace' }}>Reach out to us</h3>
        <p style={{textAlign: 'center'}}> Any feedback for the course will be highly appreciated. Send us an email at <b>chyl9109@uni.sydney.edu.au</b> for feedback!</p>
    </Layout>
  )
}

export default AboutPage
