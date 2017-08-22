import styled from 'styled-components';
import {red} from '../../theme/variables';
 
 export const Title = styled.h1`
 	font-family: 'Nosifer', cursive;
 	font-size:19px;
 	margin-top: 0;
 	color: ${red};

 `;

 export const Desc = styled.div`

	p{
		padding:2px;
		font-family: 'Patrick Hand SC', cursive;
	  font-size:25px;
	}
`;

export const Dance = styled.div`

	p{
		padding:2px;
		font-family: 'Coiny', cursive;
	  font-size:20px;
	}
`;

export const End = styled.div`

	h1{
		padding:2px;
		font-family: 'Frijole', cursive;
	  font-size:20px;
	}
`;



 export const Geeif = styled.div`
		
		background-image: url(${require('./soe.gif')});
		height: 81.5vh;
		background-repeat: no-repeat;
		background-position: center;
	
		background-size: 500px 450px;
		 margin-top: 0px;
         padding-top: 0px;
         align:left;
			
		`;

export const Nextone = styled.div`

			background-image: url(${require('./soe_guitar.jpg')});
		height: 81.5vh;
		background-repeat: no-repeat;
		background-position: center;
	
		background-size: 750px 750px;
		 margin-top: 0px;
         padding-top: 0px;
         align:left;
         z-index: -1;
         opacity:0.6;

    	display: flex;
		flex-direction: column;
		align-content: center;
		justify-content: center;

		`;

		export const Poem = styled.div`
			font-family: 'Sacramento', cursive;
			font-size:30px;

			padding-left:120px;
			margin-left:120px;
			h3{
				padding-left:180px;
			}
    	

		`;