import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import { NavLink, Container, Row, Col } from 'reactstrap';


const Header = (props) => (
  <header>

    <Container className="text mb-5 mt-5" >

      <Row  className="bg-success">
          <Col>
            <NavLink className="text-dark" exact to="/" activeClassName="active" tag={RRNavLink}>Home</NavLink>
          </Col>
          <Col>
            <NavLink className="text-dark" exact to="/about" activeClassName="active" tag={RRNavLink}>About</NavLink>
          </Col>
          <Col>
              <NavLink className="text-dark" exact to="/projects" activeClassName="active" tag={RRNavLink}>Projects</NavLink>
          </Col>


        </Row>
      </Container>



  </header>

)

export default Header;
