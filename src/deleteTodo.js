import { clearPage } from "./clearPage";
import { viewAllTodo } from "./viewAllTodo";

export function deleteTodo(key, todoData) {
	// retrieve the project data from localstorage
	const result = localStorage.getItem(key);
	const projectData = JSON.parse(result);
	const projectList = projectData["projectList"];

	// remove the project where the tododata is identical
	const filteredProjectList = projectList.filter(function (project) {
		return JSON.stringify(project) != JSON.stringify(todoData);
	});

	// check if there is any more items in the list
	if (filteredProjectList.length == 0) {
		localStorage.removeItem(key);
	} else {
		// replaces the obj with the new projectlist
		projectData["projectList"] = filteredProjectList;
		localStorage.setItem(key, JSON.stringify(projectData));
	}

	clearPage();
	viewAllTodo();
}
