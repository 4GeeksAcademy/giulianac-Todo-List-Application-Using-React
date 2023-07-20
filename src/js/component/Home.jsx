import React from "react";
import List from "./List";

//Main Component
const Home = () => {
	return (
		<div className="container mt-5">
			<h1 className="header text-center">To-dos List</h1>
			<div className="card">
				<div className="list">
					<List />
				</div>
			</div>
		</div>
	);
};

export default Home;
