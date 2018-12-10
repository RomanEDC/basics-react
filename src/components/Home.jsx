import React from 'react';
import List from './List';
import heroes from '../utils/heroes.js';
import TextTrimer from './TextTrimer';

function itemRenderer(tagName, element) {
	if (tagName === 'ul') {
		return (
			<li key={element.id}>
				<figure>
					<figcaption>{element.hero}</figcaption>
					<img src={element.avatar} />
					<figcaption>{element.name}</figcaption>
					<TextTrimer text={element.description}/>
				</figure>
			</li>
		);
	} else {
		return (
			<div key={element.id}>
				<figcaption>{element.hero}</figcaption>
				<img src={element.avatar} />
				<figcaption>{element.name}</figcaption>
				<TextTrimer text={element.description}/>
			</div>
		);
	}
}

class Home extends React.Component {
	render() {
		return (
			<div>
				<List options={heroes} tagName="ul" itemRenderer={itemRenderer} />
			</div>
		);
	}
}

export default Home;
