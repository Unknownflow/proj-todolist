export function updateTodoAsDone(todoData, projectName) {
	var result = JSON.parse(localStorage.getItem(projectName));
	var projectList = result["projectList"];

	for (var item of projectList) {
		// check if the tododata matches the item in the database
		if (
			item["title"] == todoData["title"] &&
			item["dueDate"] == todoData["dueDate"]
		)
			if (item["isDone"] == false) {
				// update the isdone from false to true and vice versa
				item["isDone"] = true;
				break;
			} else {
				item["isDone"] = false;
				break;
			}
	}

	result["projectList"] = projectList;
	localStorage.setItem(projectName, JSON.stringify(result));
}
