import projects from '../projects.js';
class ProjectsClient {
	getProjects(){
		return projects;
	}
	getProject(id){
		return projects[id];
	}
}

export default ProjectsClient
