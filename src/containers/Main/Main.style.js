import styled from 'styled-components';
import {yellow,blue,red} from '../../theme/variables';
export const Background = styled.div`
	position: fixed;
	left: 10vw;
	width: 80vw;
	top:10vh;
	height: 80vh;
	background-image: url(${require('../../assets/body_background1.jpg')});
	background-color: ${yellow};
	opacity: 0.4;
	
	background-size: 80%;
	background-repeat: no-repeat;
	background-position: center;
	z-index: -99;
	`;


export const Icondiv = styled.div`
	
	position: fixed;
	right: 0.1vw;
	width: 6vw;
	top:8vh;
	

	`;



	export const Icon = styled.div`
	position: relative;

	cursor:pointer;
	color: ${blue};
	margin-top:35px;
	


	&:hover {

		color: ${red};
		
	}


	`;

	