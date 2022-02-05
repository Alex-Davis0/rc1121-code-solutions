import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { status: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ status: !this.state.status });
  }

  render() {
    return (
      <div className='display'>
        <div onClick={this.handleClick} className={this.state.status ? 'fas fa-bars color' : 'fas fa-bars'}></div>
              <div onClick={this.handleClick} className={this.state.status ? 'dark' : 'hidden'}></div>
          <div className={this.state.status ? 'menu' : 'hidden'}>
            <div className={this.state.status ? 'menu' : 'hidden'}>Menu</div>
              <ul className={this.state.status ? 'menu' : 'hidden'}>
                <li onClick={this.handleClick} className='li'><a>About</a></li>
                <li onClick={this.handleClick} className='li'><a>Get Started</a></li>
                <li onClick={this.handleClick} className='li'><a>Sign In</a></li>
              </ul>
            </div>
      </div>
    );
  }
}

export default App;
