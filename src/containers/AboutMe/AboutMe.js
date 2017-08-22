import React, { Component } from 'react';
import {Container} from '../../theme/grid';
import { Title, Geeif ,Poem, Nextone, Desc, Dance, End} from './AboutMe.style';

class AboutMe extends Component {

	render() {
		var text = "My father was a human but i was born as a seed.\nHe fed me water so that i will go green\n.\nMangoes, bananas, grapes and pines.\nI grew up with them , over the time\n.\nSame wind,same water and the same soil we ate.\nWhen it is dry we crave ,but all together we are brave\n.\nWe oath to sing together, we oath to die together;\nin the name of god, we are brothers from different mother\n.\nI grew high and high. my brothers yielded “you are taller” ,\nthey hated me, talked ill to me ,discriminated me , and i felt smaller\n.\nSoon i was unemployed , and my brothers earned fruit.\nThey couldn’t reach my head , that’s why they tagged me as rude\n.\nBranches blocked us, storms twisted us,but i stood there.\nMy neighbours all gone, and my father became poor\n.\nIt wasn’t in my hand ,so i called the God insane,\nfor leaving me alone and taking everything to his den\n.\nAnd 1 day in a house built beside me , a man incepted a story into my father’s head.\nI am stronger , I am taller , and if I fall I will wreck and I am a danger to them\n.\nThe one whom i called my father , he cut my leg.\nI was murdered , I was butchered, my name is eucalyptus and today I am DEAD!!";

		return (
			<Container>
					<Title>About Me</Title>
					
					<Desc>
					<p>Suraj Sharma is a Computer Science & Engineering graduate from BIT Bangalore , 2017. For he is a passionate tech-head with an innovative mindset and wants to crawl through the next era of the technology.</p>
					<p>He believes that a good code and good design adds value faster than it adds cost and on a personal level he is comfortable working independently, and always eager to take on more responsibility and a wider range of duties.</p>
					<p>Thoroughly thinking and experimenting,working day and night to build something innovative is what he thinks is the only way to put all those voices in his head to rest.</p>
					<p>Having a sharp goal within, Suraj have decided to dive deeper into the ocean of Technology untill and unless he finds a reasonable and an innovative answer. </p>
					<p>Suraj Sharma is an inspired soul ,versatile in nature and can adapt to any environment.He visits hacker rank and geeks for geeks on a regular basis and game of thrones is one of his favorite.</p>
					<p>SKILLS : C,JAVA, GROOVY, PYTHON, NUMPY, JAVASCRIPT, HTML, CSS, NODEJS, REACTJS, MONGODB, EXPRESS</p>
					</Desc>
					
					<Dance>
					<h2> What ? Do you dance? Hell yeah I do.</h2>
					<p>Check   out    this crazy popping dance and follow me on instagram to learn some popping</p>
					</Dance>
					<Geeif></Geeif>
					<Nextone></Nextone>

					<h2> How about a poem?</h2>
					<Poem>
								<h3 > Eucalyptus</h3>
							{text.split("\n").map(i => {
			            return <div>{i}</div>;
			        	})}
					</Poem>
					<End>
						<h1>Enough of showing off however! ;D</h1>
					</End>
			
			</Container> 
			);
	}
}

export default AboutMe;