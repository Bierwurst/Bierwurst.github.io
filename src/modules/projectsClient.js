import projects from '../projects';
class ProjectsClient {
	getProjects(){
		return projects;
	}
	getProject(id){
		return projects[id];
	}
}

export default ProjectsClient
