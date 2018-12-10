import React from 'react';

export default class TextTrimer extends React.Component {
  state = {
    text: this.props.text.length > 40 ? this.props.text.slice(0, 40) + '...' 
    : this.props.text
  };

  moreTxt = () => {
    this.setState({ text: this.props.text });
  };

  render() {
    return (
      <div>{this.state.text} {this.props.text.length > 40 ? (
        <button onClick={this.moreTxt}>more</button>
      ) : null}
      </div>
    );
  }
}