import React from 'react'

import Layout from '../components/layout'
import './index.css';

const AboutPage = (props) => {

  return (
    <Layout>
        
        
        <h3 style={{textAlign: 'left', fontFamily: 'arial, monospace' }}>The Program</h3>
        <p>Whilst students get the opportunity to learn quantitative skills in their Economics units, if they are interested in pursuing topics of research or employment in areas involving data, it is invaluable to know how to code.</p>
        <p> We want to make the Python programming language more accessible for all students in the Economics School. To achieve this, we are running a 6 week workshop on the basics of Python and data science. There is a strong demand by students for programming and data science resources which we aim to meet.</p>
        
        <h3 style={{textAlign: 'left', fontFamily: 'arial, monospace' }}>The Organisers</h3>
        <h4 style={{textAlign: 'left', fontFamily: 'arial, monospace' }}>Varun Satish</h4>
        <p>Varun is currently pursuing his honours in Economics, having self-taught himself programming. He has interned USYD’s Centre For Translational Data Science, served as a research assistant in the School of Economics and the School of Political and Social Sciences, and tutors in the Economics department.</p>
        <h4 style={{textAlign: 'right', fontFamily: 'arial, monospace' }}>Chris Hyland</h4>
        <p style={{textAlign: 'right'}}> Chris is currently in his final year as an undergraduate with majors in Computer Science, Mathematics, Econometrics, and Statistics. He has interned as a One-Delta Equity Trade Quant at Goldman Sachs, worked as a research assistant in computational economics at ANU, former head tutor in the Econometrics department, and launched a pro-bono data science consulting organisation.</p>
    </Layout>

  )
}

export default AboutPage
