import React,{Component} from 'react';
import SERVICES from './data/projects.js';

class Projection extends Component{
	render(){
		const {title, description, image} = this.props.service;
		
		return(
				<div style={{display: 'inline-block', width:300, margin:30}}>
					<h3>{title}</h3>
					<img src={image} alt='service' style={{width:300, height:180}}/>
					<p>{description}</p>
				</div>
			)
	}
}


class Project extends Component{
	render(){
		return(
				<div>
					<h2>The services we offer</h2>
					<div>
						{
							SERVICES.map(SERVICE =>{
								return(
										<Projection key = {SERVICE.id} service = {SERVICE}/>
									) ;
							})
						}
					</div>
				</div>
			)
	}
}

export default Project;