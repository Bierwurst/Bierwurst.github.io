import React, {Fragment, Component} from 'react';
import homeImage from '../assets/fernglas_02-small.png';
import { Container, Row, Col } from 'reactstrap';


class Home extends Component{
  componentDidMount(){
    document.title = 'Portfolio Jürgen'
  }
  render(){
    return (
      <Fragment>
        <Container>
          <Row>
            <Col className="text about-text"><h1>Hello and Welcome to my Portfolio!!!</h1></Col>
          </Row>
          <Row>

            <Col className="d-flex justify-content-center"><img src={homeImage} alt="" /></Col>

          </Row>
        </Container>
      </Fragment>

    )
  }
}



export default Home;
