import React from 'react';
class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: !this.state.isClicked });
  }

  render() {
    return (
      <div className='border'>
        <div className={this.state.isClicked ? 'circle-off' : 'circle-on' } onClick={this.handleClick}>
           {this.state.isClicked ? 'OFF' : 'ON'}</div>
      </div>
    );
  }
}

export default ToggleSwitch;
