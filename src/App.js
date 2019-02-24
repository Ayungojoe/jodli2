import React, {Component} from 'react';
import Project from './Project.js';
import SocialProfiles from './SocialProfiles.js';
import profile from './assets/jodli7.png';


class App extends Component{
	constructor(){
		super();
		this.state = { displayBio:false};
	}

	toggleBio = (displayBio) =>{
		this.setState({displayBio:!this.state.displayBio});
	}

	render(){
			  
		return(
				<div>
					<img src={profile} alt='Logo' className='logo'/>
					<h1>Jodli Web Solutions</h1>
					<p>We are web services company.</p>
					<p>Our focus is miningful projects and quality software.</p>
					{
					 this.state.displayBio?(
						<div>
							<p>Jodli is based in Nairobi Kenya.</p>
							<p>We specialize in web services, web sites and web applications.</p>
							<p>we also are involved in mobile application development.</p>
							<p>Jodli also produces basepoke software for organizations</p>
							<div>
								<button onClick={this.toggleBio}>Show Less</button>
							</div>
						</div>
					 ) :(
					 		<div>
					 			<button onClick={this.toggleBio}>Read More</button>
					 		</div>
					 	)
					}
					<hr />
					<Project />
					<hr />
					<SocialProfiles />
				</div>
			)
	}
}

export default App;