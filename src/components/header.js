import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { Navbar } from "react-bootstrap";

const Header = ({ siteTitle }) => (
  <div
    style={{
      "background-color": "#f4f4f4",
    }}
  >
    <div className="App container" style={{"padding-top": '1em', "padding-bottom": '1em'}}>
      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/" style={{fontSize: '2em', "padding-left": '2rem'}}>Coding for Economists</Link>
            <Link to="/contact/" style={{float: 'right', "padding-left":'3em', "padding-right": '3em'}}>Contact</Link>
            <Link to="/about/" style={{float: 'right'}}>About</Link>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
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
