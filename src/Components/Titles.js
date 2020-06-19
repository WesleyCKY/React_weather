// Titles.js
import React from "react";

// class Titles extends React.Component {
// 	render() {
// 		return(
// 				<div>
// 					<h1> Weather Finder </h1>
// 					<p> Find out Temperature, conditions and more...</p>
// 				</div>
// 			);
// 	}
// };

const Titles = () => (
		<div>
			<h1 className="title-container__title"> Weather Finder</h1>
			<p className="title-container__subtitle"> Find out Temperature, conditions and more...</p>
			<p className="title-container__subtitle"> by Wesley</p>
		</div>
	)

export default Titles;
