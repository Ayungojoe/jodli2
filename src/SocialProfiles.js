import React,{Component} from 'react';
import SOCIAL_PROFILES from './data/socialprofiles.js'

class SocialProfile extends Component {
	render(){
		const {link, image} = this.props.socialprofile;

		return(
				<div style={{display: 'inline-block', width:40, margin:10}}>
					<a href={link}>
					  <img src={image} alt='Social Profile' style={{width:45, height:45}}/>
					</a>
				</div>
			)
	}
}

class SocialProfiles extends Component {
	render(){
		return(
				<div>
					<h2>Connect with us!</h2>
					<div>
						{
							SOCIAL_PROFILES.map(SOCIAL_PROFILE => {
								return <SocialProfile key = {SOCIAL_PROFILE.id} socialprofile = {SOCIAL_PROFILE}/>		
							})
						}
					</div>
				</div>
			)
	}
}

export default SocialProfiles;