import React, {Component, Fragment} from 'react';

import {
  Badge,
  Button,
  Container,
  Row,
  Col
} from 'reactstrap';

import projects from '../projects.json';

class SingleProject extends Component {
  componentDidMount(){
    const id = this.props.match.params.id;
    const project = projects[id] || {};

    document.title = `${project.title} | Portfolio Jürgen`;
  }

  render(){
    const id = this.props.match.params.id;
    const project = projects[id] || {};

    return (
      <Fragment>
        <Container className="d-flex justify-content-center">
          <Row>
            <Col>
              <h2>{project.title}</h2>
              <img className="img-fluid max-size-img" src={project.imageUrl} alt={project.title}/>
              <p className="text-center">{project.description}</p>
              <Container className="d-flex justify-content-center">
                <Row>

                  <div className="tags">
                    {project.tags.map(tag => (
                      <Badge key={tag} color="primary" pill>{tag}</Badge>
                    ))}
                  </div>
                  <Button href={project.projectUrl}>See it online!</Button>
                </Row>
              </Container>

              {/* <a href={project.projectUrl}>See it online!</a> */}
            </Col>
          </Row>
        </Container>

    </Fragment>
    )
  }
}

export default SingleProject;
