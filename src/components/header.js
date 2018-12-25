import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `3rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Header = ({ siteTitle }) => (
  <div
    style={{
      marginTop: '2rem',
      marginBottom: '1.5rem',
      marginLeft: '2.5rem',

    }}
  >
      <ul style={{listStyle: `none`, float: `right`,  width: '100%', fontColor: 'black', textAlign: 'right', fontSize: '1em' }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    
    <div
      style={{
        margin: '0 auto',
        textAlign: 'center',
        maxWidth: 900,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'black',
            fontFamily: 'georgia, monospace',
            textDecoration: 'none',
            textAlign: 'center',
            fontsize: '0.7em'
          }}
        >
          {siteTitle}
        </Link>
      </h1>
   </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
