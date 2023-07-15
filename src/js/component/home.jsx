import React from "react";
import List from "./List";
import Proptypes from "prop-types";

//Main Component
const Home = (props) => {
	return (
		<div className="container mt-5">
			<h1 className="header text-center">To-dos List</h1>
			<div className="card">
				<div className="list">
					<List />
				</div>
			</div>
			<button className="btn btn-danger mt-5"
					onClick={props.clearList}>
					Delete All
			</button>
		</div>
	);
};

Home.propTypes = {
	clearList: Proptypes.func,
};

export default Home;
