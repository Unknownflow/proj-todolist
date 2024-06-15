export function filterTodo(projectList, filter) {
	// steps to get the date today
	var today = new Date();
	var dd = String(today.getDate()).padStart(2, "0");
	var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
	var yyyy = today.getFullYear();
	today = yyyy + "-" + mm + "-" + dd;

	if (filter == "today") {
		// show only today's todo
		projectList = projectList.filter(function (project) {
			return project.dueDate == today;
		});
		return projectList;
	} else if (filter == "upcoming") {
		// show future todos
		projectList = projectList.filter(function (project) {
			return project.dueDate > today;
		});
		return projectList;
	} else if (filter == "all") {
		// show all todos
		return projectList;
	}

	// fallback val
	return projectList;
}
