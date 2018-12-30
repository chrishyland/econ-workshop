import React from 'react'
import { graphql, Link } from 'gatsby'
import * as _ from 'lodash';
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion';

import Layout from '../components/layout'
import './index.css';

const IndexPage = (props) => {
  const notes = props.data.allMarkdownRemark;
  const subjects = _.chain(notes.edges)
    .groupBy(node => node.node.fields.slug.split('/')[1])
    .map(node => node) //using ES6 shorthand to generate the objects
    .value();
  console.log(subjects);
  return (
    <Layout>
        
        <p style={{marginTop: '3em', marginBottom: '2em', textAlign: 'center'}}> This course aims to be an introduction to beginner level programming in the language Python. Below are resources for the course content. They are categorised on a weekly basis. You will find a tutorial post with the corresponding Jupyter Notebook attached to the bottom of the post.</p>
        <Accordion>
        {subjects.map((arr, i) => (
          <AccordionItem key={arr[0].node.fields.slug.split('/')[1]}>
            <AccordionItemTitle>{arr[0].node.fields.slug.split('/')[1].toUpperCase()}</AccordionItemTitle>
            {arr.map(({ node }, j) => (
              <AccordionItemBody key={node.frontmatter.title}>
                <Link to={node.fields.slug} className="link" >
                  <div className="post-list">
                    {node.frontmatter.title}
                  </div>
                </Link>
              </AccordionItemBody>
          ))}
          </AccordionItem>
        ))}
        </Accordion>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query ListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;

