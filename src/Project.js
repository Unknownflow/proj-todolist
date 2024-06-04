class Project {
	constructor(name, projectList) {
		this.name = name;
		this.projectList = projectList;
	}

	appendTodo(todoObj) {
		this.projectList.push(todoObj);
	}

	get getProjectList() {
		return this.projectList;
	}

	set setProjectList(item) {
		this.projectList = item;
	}
}

export default Project;
