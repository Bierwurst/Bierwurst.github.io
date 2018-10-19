import projects from '...projects.json';
class ProjectsClient {
	getProjects(){
		return projects;
	}
	getProject(id){
		return projects[id];
	}
}

export default ProjectsClient
