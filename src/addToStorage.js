import TodoItem from "./TodoItem";
import Project from "./Project";

export function addToStorage(
	projectName,
	title,
	dueDate,
	priority,
	description
) {
	const newTodoItem = new TodoItem(title, dueDate, priority, description);

	// check if projectName exists
	const result = localStorage.getItem(projectName);

	// no todo items in the project
	if (result === null) {
		// create new project
		const project = new Project(projectName, []);
	} else {
		// get the project info from the localstorage and create a new project obj
		const projectData = JSON.parse(result);
		const project = new Project(projectData.name, projectData.projectList);
	}

	project.appendTodo(newTodoItem);
	localStorage.setItem(projectName, JSON.stringify(project));
}
