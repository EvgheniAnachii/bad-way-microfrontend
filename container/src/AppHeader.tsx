import React from 'react';
import { NavLink } from 'react-router-dom';

const AppHeader = () => (
	<header>
		<div className="center-column">
			<h1>This is the container</h1>
		</div>
		{/*<nav>
			<ol className="center-column">
				<li>
					<NavLink to="/">Browse restaurants</NavLink>
				</li>
				<li>
					<NavLink to="/random">Surprise me</NavLink>
				</li>
				<li>
					<NavLink to="/about">About</NavLink>
				</li>
				<li>
					<NavLink to="/modules/feedback">Febdack</NavLink>
				</li>
			</ol>
		</nav>*/}
	</header>
);

export default AppHeader