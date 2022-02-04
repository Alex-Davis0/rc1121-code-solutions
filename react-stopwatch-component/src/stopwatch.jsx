import React from 'react';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      seconds: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleClick() {
    this.setState({ status: !this.state.status });
    if (this.state.status === false) {
      this.timer = setInterval(() => {
        this.setState({ seconds: this.state.seconds + 1 });
      }, 1000);
    } else {
      clearInterval(this.timer);
    }
  }

  reset() {
    if (this.state.status === false) {
      this.setState({ seconds: 0 });
    }
  }

  render() {
    return (
      <div className='holder'>
        <div className='border' onClick={this.reset}>
          <div className='font'>{this.state.seconds}</div>
        </div>
        <i onClick={this.handleClick} className={this.state.status ? 'fas fa-pause' : 'fas fa-play'}></i>
      </div>
    );
  }
}

export default StopWatch;
