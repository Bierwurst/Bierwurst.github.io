import React, {Fragment, Component} from 'react';
import projects from '../projects.json';


import {
  Card,
  Badge,
  CardBody,
  CardTitle,
  Container,
  Row,
  Button
} from 'reactstrap';


class Projects extends Component {
	componentDidMount() {
		document.title = 'Projects | Portfolio Jürgen'
	}
	render() {
		return (<Fragment>
      <Container>
        <Row className="col-11 offset-1">
          {projects.map((project, i) => (
            <Card key={i} className="card text-black bg-danger mb-3 mr-1">
              <CardBody>
                <CardTitle className="h3">
                  {project.title}
                </CardTitle>
              </CardBody>
              <img className="max-size-thumbNail" width="100%" src={project.thumbNailUrl} alt={project.title}/>
              <CardBody>
                <div className="tags">
                  {project.tags.map(tag => (
                    <Badge key={tag} color="dark" pill>{tag}</Badge>
                  ))}
                </div>
                <Button className="btn btn-info mt-3" size="sm" href={`/projects/${i}`}>Go to Project</Button>

              </CardBody>
            </Card>
          ))}
        </Row>
      </Container>




			</Fragment>
    );
  }
}




export default Projects;
