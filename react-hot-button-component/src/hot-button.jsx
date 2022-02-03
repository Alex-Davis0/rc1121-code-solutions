import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ clicks: this.state.clicks + 1 });
  }

  render() {
    let btnColor = '';
    if (this.state.clicks < 3) {
      btnColor = 'btn-cold';
    } else if (this.state.clicks < 6) {
      btnColor = 'btn-cool';
    } else if (this.state.clicks < 9) {
      btnColor = 'btn-tepid';
    } else if (this.state.clicks < 12) {
      btnColor = 'btn-warm';
    } else if (this.state.clicks < 15) {
      btnColor = 'btn-hot';
    } else if (this.state.clicks < 18) {
      btnColor = 'btn-nuclear';
    }
    return (
      <button className= {`btn ${btnColor}`} onClick={this.handleClick}>
        Hot Button
      </button>);
  }
}

export default HotButton;
