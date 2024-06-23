import { closeTodoPopup } from "./closeTodoPopup";

export function expandTodo(projectName, todoData) {
	console.log(projectName, todoData);
	const content = document.getElementById("content");
	const popUp = document.createElement("div");
	popUp.classList = "popUp";

	// create a close button
	const closeButton = document.createElement("div");
	closeButton.classList = "close-button";
	closeButton.innerHTML = "[X]";
	closeButton.addEventListener("click", function () {
		closeTodoPopup();
	});
	popUp.appendChild(closeButton);

	// input all todo info into the popup
	const popUpContent = document.createElement("div");
	popUpContent.classList = "popUpContent";
	popUpContent.innerHTML = "Project name: " + projectName + "<br>";
	const labelList = ["Title: ", "Due Date: ", "Priority: ", "Description: "];
	var count = 0;

	for (let todokey in todoData) {
		popUpContent.innerHTML += labelList[count] + todoData[todokey] + "<br>";
		count += 1;
	}
	popUp.appendChild(popUpContent);

	content.appendChild(popUp);
	return content;
}
