import React, { Component } from 'react';
import { NavigationContainer, NavItem } from './NavigationBar.style';
var {NavLink} = require('react-router-dom');



class Child extends Component {

		render() {
		return (
				
					<div>
						surajs787@gmail.com
						+917002524460
					
					</div>
				

			);
	}

	
}


class NavigationBar extends Component {
	constructor(props) {
		    super(props);
		    this.state = {
		      childVisible:false
		    };
		    this.handleClick = this.handleClick.bind(this);
	  	}

	  	handleClick() {
   				this.setState({childVisible: !this.state.childVisible});
					    
					  }

	render() {
		return (
			<NavigationContainer>
				
				<NavLink to="/" style={{textDecoration: 'none' }}><NavItem>Home</NavItem></NavLink>
				<NavLink to="/projects" style={{textDecoration: 'none'}}><NavItem >Projects</NavItem></NavLink>
				<NavLink to="/aboutme" style={{textDecoration: 'none'}}><NavItem >AboutMe</NavItem></NavLink>
				
				<div onClick={this.handleClick}>
					<NavItem style={{right:'0'}}>Contact</NavItem>
				</div>
				<div>
				{
					this.state.childVisible ? <Child/> : null
				}	
				</div>

				
			</NavigationContainer>
		);
	}
}

export default NavigationBar;