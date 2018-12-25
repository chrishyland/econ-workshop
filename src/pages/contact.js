import React from 'react'

import Layout from '../components/layout'
import './index.css';

const AboutPage = (props) => {

  return (
    <Layout>
        <h2 style={{textAlign: 'center', fontFamily: 'courier, monospace' }}>Contact Us</h2>
        
        <h3 style={{textAlign: 'left', fontFamily: 'courier, monospace' }}>Reach out to us</h3>
        <p> Any feedback for the course will be highly appreciated. Send us an email at chyl9109@uni.sydney.edu.au for feedback!</p>
    </Layout>
  )
}

export default AboutPage
