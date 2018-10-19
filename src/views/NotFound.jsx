import React, {Fragment, Component} from 'react';
import landscape from '../assets/not_found.png';
import { Container, Row, Col } from 'reactstrap';

class NotFound extends Component{
  componentDidMount(){
    document.title = 'NotFound | Portfolio Jürgen'
  }
  render(){
    return (
      <Fragment>
        <Container>
          <Row className="col-12 offset-1">
            <Col>
              <h2>404 NOT FOUND!</h2>
              <p>Sorry, what you are looking for is not here but you found a nice landscape instead</p>
              <img src={landscape} alt="" className="mb-5"/>
            </Col>
          </Row>
        </Container>
        {/* <h2>404 NOT FOUND!</h2>
        <p>Sorry what you are looking for is not here but you found a ship instead</p>
        <img src={ship} alt=""/> */}
      </Fragment>
    )
  }
}



export default NotFound;
