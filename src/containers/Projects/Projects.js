import React, { Component } from 'react';

import { Card, Contain }from './Projects.style';

class Projects extends Component {
	render() {
		return (
			
			<Contain>
			<Card>
				<h4>Creative work using ReactJS</h4>
				<h5> React(Router v4, Web-pack, Babel-core, Babel-loader, es2015,etc), Flat design,Nodejs</h5>
				<p> A personal portfolio web application which you are viewing right now .</p>

			</Card>
			<Card>
				<h4>Quessiah, A full stack project for finding the most voted answers for your question.</h4>
				<h5> Express, Mongodb, Node js, Html, Css, Jquery</h5>
				<p> Create, Read , Update and delete for both questions and any of its answers.</p>
				<p>An option for voting any of its answers.</p>
				<a href="https://github.com/SoeRatch/quessiah.git">Github Link</a>
			</Card>
			<Card>
				<h4>Dynamic website for retrieving and presenting information from other websites .</h4>
				<h5> Node js, Html, Css, Restful webservices</h5>
				<p>making use of Restful web services of another website(Educational)</p>
				<p> Creating a server that dynamically generates content , handles multiple URL , read from URL and builds
					a simple template engine .</p>
				<a href="https://github.com/SoeRatch/Simple_dynamic_site_nodejs">Github Link</a>
			</Card>
			<Card>
				<h4>User Authentication</h4>
				<h5> Express, Mongodb, Node js, Html, Css, Jquery.</h5>
				<p>Custom user authentication system that controls user access to web resources .</p>
				<p> The System lets users Sign up, Log in, Log out and limits access to password-protected resources.</p>
				<a href="https://github.com/SoeRatch/Authentication-with-Express-and-Mongo">Github Link</a>
			</Card>
			<Card>
				<h4>A front-end project on building a sketch box .</h4>
				<h5> Html, Css, Bootstrap,Javascript, Jquery</h5>
				<p>One can sketch with various colors in a sketch box with various pixel size.</p>
				<a href="https://github.com/SoeRatch/project-sketchfrog">Github Link</a>
			</Card>

			<Card>
				<h4>Coming Soon ... </h4>
				<h5> A music player(desktop application) using react js </h5>
				<h5>A mini netflix(using react-native)</h5>
			</Card>

				
			
			
			</Contain>
			);
	}
}

export default Projects;