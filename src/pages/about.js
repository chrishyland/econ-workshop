import React from 'react'

import Layout from '../components/layout'
import './index.css';

const AboutPage = (props) => {

  return (
    <Layout>
        <h2 style={{textAlign: 'center', fontFamily: 'courier, monospace' }}>About</h2>
        
        <h3 style={{textAlign: 'left', fontFamily: 'courier, monospace' }}>The Program</h3>
        <p> We want to make the Python programming language more accessible for all students in the Economics School, . We want to do this by running a 6 week workshop on Python basics. There is a strong demand by students for programming and data science resources which we seek to fill in.</p>
        <p> We think that whilst students get the opportunity to learn quantitative skills in their ECOS/ECMT units, if they are interested in pursuing topics of research or employment in areas involving data, it is invaluable to either know how to code or at least have a sufficient ‘programming literacy’. We are passionate about this, and we would like to allow other students the opportunity to share the same passion.</p>
        <h3 style={{textAlign: 'left', fontFamily: 'courier, monospace' }}>The Organisers</h3>
        <h4 style={{textAlign: 'left', fontFamily: 'courier, monospace' }}>Varun Satish</h4>
        <p>TO FILL IN </p>
        <h4 style={{textAlign: 'left', fontFamily: 'courier, monospace' }}>Chris Hyland</h4>
        <p> Chris is currently in his final year as an undergraduate with majors in Computer Science, Mathematics, Econometrics, and Statistics. He has interned as a One-Delta Equity Trade Quant at Goldman Sachs, worked as a research assistant in computational economics at ANU, former head tutor in the Econometrics department, and launched a pro-bono data science consulting organisation. He enjoys playing blues songs on his guitar.</p>
    </Layout>
  )
}

export default AboutPage
