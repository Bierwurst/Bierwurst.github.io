import React, {Component, Fragment} from 'react';
import profileImage from '../assets/portrait_01-small.png';
import { Container, Row, Col} from 'reactstrap';
// import { Button, Form, FormGroup, Input } from 'reactstrap';

class About extends Component {
  componentDidMount(){
    document.title = 'About | Portfolio Jürgen';
  }
  render (){
    return( <Fragment>
  <Container>
    <Row>
      <Col>
        <Container>
          <Row>
            <Col className="mb-sm-5 about-text">
              <h3>About me</h3>
              <p>
                I have a degree in economics and have been working in various professions such as band manager, cameraman, cutter, illustrator or motion designer. Since the end of 2017 I am on my way to become a web developer at the digital career institute
                Berlin.


              </p>
              <p>Berlin, Oktober 2018</p>
              <p>Jürgen Schuler</p>
            </Col>
            <Col>
              <img className="rounded-edges ml-sm-5 ml-xs-0 mb-5" src={profileImage} alt="an illustration of the author" />
            </Col>
          </Row>
        </Container>
        {/* <Container>
          <Row>
            <Col>
              <h5>For contact please leave your email address and write me a message.</h5>


              <Form className="pb-3" action="/"
                    method="POST">
               <FormGroup row>
                 <Col sm={10}>
                   <Input type="email" name="_replyto" id="exampleEmail" placeholder="You're email address" />
                 </Col>
               </FormGroup>
               <FormGroup row>
                 <Col sm={10}>
                   <Input type="textarea" name="name" id="exampleText" placeholder="Your message for me" />
                 </Col>
               </FormGroup>
               <FormGroup check row>
                 <Col>
                   <Button type="submit" value="Send">Submit</Button>
                 </Col>
               </FormGroup>
             </Form>
            </Col>
          </Row> */}

    </Col>
    </Row>
  </Container>
  <div className="col-11 offset-1 about-text text-center">
      <h4>please copy and paste my mail address to contact me</h4>
      <p>juergen.schuler@yahoo.com</p>
  </div>

</Fragment>)
  }
}

export default About;
