import React, { Component } from 'react';
import AboutMe from '../AboutMe/AboutMe'
import Home from '../Home/Home';
import Projects from '../Projects/Projects';
import NavigationBar from '../NavigationBar/NavigationBar';



import { Switch, Route } from 'react-router-dom'
import { Background ,Icondiv,Icon} from './Main.style'
import ReallySmoothScroll from 'really-smooth-scroll';




import Angell from 'react-icons/lib/fa/angellist';
import Githubb from 'react-icons/lib/fa/github';
import Linkedinn from 'react-icons/lib/fa/linkedin-square';
import Fbb from 'react-icons/lib/fa/facebook-square';


ReallySmoothScroll.shim();
class Main extends Component {
	

	render() {
		return(
			<div>
				<Background/>
				<NavigationBar/>
				<Icondiv>
						
						<a href="https://angel.co/suraj-sharma-14?public_profile=1"><Icon ><Angell size={50}/> </Icon></a>
						<a href="https://github.com/SoeRatch"><Icon ><Githubb size={50}/> </Icon></a>
						<a href="https://www.linkedin.com/in/surajs787"><Icon><Linkedinn size={50}/> </Icon></a>
						<a href="https://www.facebook.com/surajkoho"><Icon ><Fbb size={50}/> </Icon></a>
				</Icondiv>
					
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route exact path="/projects" component={Projects}/>
					<Route exact path="/aboutme" component={AboutMe}/>
				</Switch>
			</div>
			);
	}

}

export default Main;