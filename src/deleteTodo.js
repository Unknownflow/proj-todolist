import { clearPage } from "./clearPage";
import { viewAllTodo } from "./viewAllTodo";
import { viewToday } from "./viewToday";
import { viewUpcoming } from "./viewUpcoming";

export function deleteTodo(key, todoData, page) {
	// retrieve the project data from localstorage
	const result = localStorage.getItem(key);
	const projectData = JSON.parse(result);
	const projectList = projectData["projectList"];
	console.log(key, todoData, page, projectList);

	// remove the project where the tododata is identical
	const filteredProjectList = projectList.filter(function (project) {
		console.log(
			todoData.title != project.title,
			new Date(todoData.dueDate) != new Date(project.dueDate)
		);
		return (
			todoData.title != project.title &&
			new Date(todoData.dueDate) != new Date(project.dueDate)
		);
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

	if (page == "all") {
		viewAllTodo();
	} else if (page == "today") {
		viewToday();
	} else if (page == "upcoming") {
		viewUpcoming();
	}
}
