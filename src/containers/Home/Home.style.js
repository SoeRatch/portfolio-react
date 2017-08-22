import styled,{css} from 'styled-components';

export const Image = styled.img`
	width: 100%;
	height:500px;
    
	`;

	export const LegendaryImage = styled.div`
		background-repeat: no-repeat;
    background-size: cover;
		height: 91.5vh;
		background-image: url(${require('../../assets/soe7.png')});
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		

		display: flex;
		
		flex-direction: column;
		align-content: center;
		justify-content: center;

		color:white;
		text-align: center;

		font-size:2em;

			h1 {
				margin-bottom: 0;
				font-family: 'Faster One', cursive;
				font-size:50px;
			}

			h4 {
				margin-top: 0;
			}
			

			cursor:pointer;
			overflow:hidden;
			

			& > h1 {
					transition: transform .16s;
				}
				& > h4 {
					transition: transform .3s;
				}

			&:hover {

				& > h1 {
					transform: scale(0.4);
				}
				& > h4 {
					transform: scale(1.9);
				}

			}
		`;

	export const RevealP = styled.p`
		position: relative;
		font-family: 'Sacramento', cursive;
		font-size:35px;
		&:after {
			
			content: ' ';
			position:absolute;
			top:0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: black;
			opacity: 0.8;

			transform-origin: left;
			transform: rotateY(90deg);

			transition: transform 2s;
		}

		${({ hide }) => hide && css`
			&:after {
				transform: rotateY(0deg);
			}
		`}

	`;