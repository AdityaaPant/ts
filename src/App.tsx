import Todo from "./components";
function App() {
	const userName = {
		todo: {
			firstName: "aditya",
			lastName: "pant",
			email: "hey@adityapant.com",
			age: 19,
		},
	};
	return (
		<div>
			<Todo todo={userName.todo} />
		</div>
	);
}

export default App;
