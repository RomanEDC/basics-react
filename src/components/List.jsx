import React from 'react';

export default class List extends React.Component {

  showName(e) {
		const lastItem = e.currentTarget.lastElementChild;
		if (lastItem.contains(e.target)) {
			console.log(lastItem.firstElementChild.textContent);
		}
	}

	render() {
		const { 
			tagName = 'div',
			itemRenderer,
			options = [] } = this.props;
		const listItems = options.map(element => itemRenderer(tagName, element));
		if (tagName === 'ul') return <ul onClick={this.showName}>{listItems}</ul>;
		else return <div onClick={this.showName}>{listItems}</div>;
	}
}