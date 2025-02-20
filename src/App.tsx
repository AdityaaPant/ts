import React, { useState, useEffect } from "react";
import Todo from "./components";
import { Employee } from "./components/person";

function App() {
	const userName = {
		todo: {
			firstName: "aditya",
			lastName: "pant",
			email: "hey@adityapant.com",
			age: 19,
		},
	};
	const emp1 = new Employee("aditya", 25);
	const [greeting, setGreeting] = useState("");

	useEffect(() => {
		const message = `hello my name is ${emp1.name}`;
		setGreeting(message);
	}, []);
	return (
		<div>
			<Todo todo={userName.todo} />
			<h1>{greeting}</h1>
			<h1>{emp1.age}</h1>
		</div>
	);
}

export default App;
