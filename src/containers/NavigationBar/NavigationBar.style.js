
import {Flex, Div} from '../../theme/grid';
import {yellow,blue,red} from '../../theme/variables';

export const NavigationContainer = Flex.extend`
	position: fixed;
	left: 140px;
	right: 2em;
	top: 0.2em;

`;

export const NavItem = Div.extend`
float:right;
	margin-right:30px;
	font-size: 1.5em;
	cursor:pointer;
	color: ${blue};
	position: relative;
	text-decoration: none;
	font-family: 'Monofett', cursive;


	&:hover {

		color: ${yellow};
		&:after {
			content: ' ';
			position: absolute;
			box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
			left: 0;
			width: 100%;
			height: 100%;
			background-color: ${red};
			z-index: -1;
			transform: scale(1.3, 1.5);
			transition: transform .3s;
		}
	}
`;

