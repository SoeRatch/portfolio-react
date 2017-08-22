import React, { Component} from 'react';
import {Container} from '../../theme/grid';
import { 

	LegendaryImage,
	RevealP
	} from './Home.style';

import WhenInView from '../../components/WhenInView';

export default class Home extends Component {
	

	render() {
		return(
			<div>
							<Container>
			<div>
				
				<LegendaryImage >

					<h1>SURAJ SHARMA</h1>
					<h4>Developer</h4>

				</LegendaryImage>
				<WhenInView>
					{({ isInView }) =>

					<RevealP hide={!isInView}> 
						<p>What you are is what you have been.What you will be is what you do now .    -Buddha </p>
					</RevealP>
					}
				</WhenInView>
				<WhenInView>
					{({ isInView }) =>

					<RevealP hide={!isInView}> 
						<p>If I try my best and fail, well I've tried my best.   - Steve Jobs</p>
					</RevealP>
					}
				</WhenInView>
				

			</div>

			</Container></div>
			);
	}

}