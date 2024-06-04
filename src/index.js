import { addTodo } from "./addTodo";
import { clearHtml } from "./clearHtml";
import { viewAllTodo } from "./viewAllTodo";
import { viewToday } from "./viewToday";
import { viewUpcoming } from "./viewUpcoming";

import "./styles.css";

function index() {
	const addTodoButton = document.getElementById("add-todo");
	const viewTodayButton = document.getElementById("view-today");
	const viewUpcomingButton = document.getElementById("view-upcoming");
	const viewAllTodoButton = document.getElementById("view-all-todo");

	addTodoButton.addEventListener("click", function () {
		clearHtml();
		addTodo();
	});
	viewTodayButton.addEventListener("click", function () {
		clearHtml();
		viewToday();
	});
	viewUpcomingButton.addEventListener("click", function () {
		clearHtml();
		viewUpcoming();
	});
	viewAllTodoButton.addEventListener("click", function () {
		clearHtml();
		viewAllTodo();
	});
}

index();
