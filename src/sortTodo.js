export function sortTodo(projectList) {
	// sort in ascending order of duedate then by priority
	projectList.sort(function (a, b) {
		return (
			new Date(a.dueDate) - new Date(b.dueDate) ||
			a.priority.localeCompare(b.priority)
		);
	});

	return projectList;
}
