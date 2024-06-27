import Project from "./Project";
import { deleteTodo } from "./deleteTodo";
import { filterTodo } from "./filterTodo";
import { expandTodo } from "./expandTodo";

export function viewUpcoming() {
	// function returns true if the storage has no values stored
	const isObjectEmpty = (objectName) => {
		return (
			Object.keys(objectName).length === 0 &&
			objectName.constructor === Object
		);
	};

	const content = document.getElementById("content");

	// generating headers text
	const h1 = document.createElement("h1");
	const h1TextNode = document.createTextNode("Viewing Upcoming Todos");
	h1.appendChild(h1TextNode);
	content.appendChild(h1);

	let storage = { ...localStorage };
	// if storage is empty, return valid value
	if (isObjectEmpty(storage)) {
		const p = document.createElement("p");
		p.innerHTML = "There are currently no todos found!";
		content.appendChild(p);
		return;
	}

	for (var key in storage) {
		// retrieving upcoming project data from storage and getting its project list after
		const projectData = JSON.parse(storage[key]);
		var project = new Project(projectData.name, projectData.projectList);
		var projectList = project.getProjectList;
		projectList = filterTodo(projectList, "upcoming");

		// do not display any project with no todos
		if (projectList.length == 0) {
			continue;
		}

		// create separate header for each project
		const h2 = document.createElement("h2");
		h2.innerHTML = "Project name: " + key;

		// create separate table container for each project
		const tableContainer = document.createElement("div");
		tableContainer.classList.add("table-container");
		tableContainer.appendChild(h2);

		// generating table n its headers
		const table = document.createElement("table");
		table.classList.add("todo-table");
		const tr = document.createElement("tr");
		const tableHeaders = ["Title", "Due date", "Delete", "Show more"];

		for (let i = 0; i < tableHeaders.length; i++) {
			const th = document.createElement("th");
			th.innerHTML = tableHeaders[i];
			tr.appendChild(th);
		}

		table.appendChild(tr);

		// generate new row for each todo in the project
		for (let i = 0; i < projectList.length; i++) {
			const tr = document.createElement("tr");
			let todoData = {};

			for (const todoKey of ["title", "dueDate"]) {
				const td = document.createElement("td");
				td.innerHTML = projectList[i][todoKey];
				todoData[todoKey] = projectList[i][todoKey];
				tr.appendChild(td);
			}

			for (const todoKey of ["priority", "description"]) {
				todoData[todoKey] = projectList[i][todoKey];
			}

			// add delete button
			const deletetd = document.createElement("td");
			deletetd.classList = "delete-button";
			deletetd.innerHTML = "Delete?";
			deletetd.addEventListener("click", function () {
				deleteTodo(projectData.name, todoData, "upcoming");
			});
			tr.appendChild(deletetd);

			// add show more data button
			const showtd = document.createElement("td");
			showtd.classList = "show-button";
			showtd.innerHTML = "Show more?";
			showtd.addEventListener("click", function () {
				expandTodo(projectData.name, todoData);
			});
			tr.appendChild(showtd);

			// add priority class to the td for styling
			tr.classList = "priority-" + todoData["priority"];
			table.appendChild(tr);
		}
		tableContainer.appendChild(table);
		content.appendChild(tableContainer);
	}

	return content;
}
