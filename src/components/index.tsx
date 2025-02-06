interface TodoType {
	firstName: string;
	lastName: string;
	email: string;
	age: number;
}
interface TodoInput {
	todo: TodoType;
}
function Todo({ todo }: TodoInput) {
	return (
		<div>
			<h1>{todo.firstName}</h1>
			<h1>{todo.lastName}</h1>
			<h1>{todo.email}</h1>
			<h1>{todo.age}</h1>
		</div>
	);
}

export default Todo;
