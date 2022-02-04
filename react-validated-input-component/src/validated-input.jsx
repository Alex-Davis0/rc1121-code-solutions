import React from 'react';

class Validated extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      status: false,
      message: 'A password is required.'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ password: event.target.value });
    if (this.state.password.length === 0) {
      this.setState({
        message: 'A password is required.',
        status: false
      });
    } else if (this.state.password.length >= 8) {
      this.setState({
        message: '',
        status: true
      });
    } else if (this.state.password.length < 8 && this.state.password.length > 0) {
      this.setState({
        message: 'Your password is too short.',
        status: false
      });
    }
  }

  render() {
    return (<form>
      <label>
        Password
        <input type='password' onChange={this.handleChange} />
        <i className={this.state.status ? 'fas fa-check' : 'fas fa-times'}></i>
      </label>
        <p className='font-color'>{this.state.message}</p>
    </form>);
  }
}

export default Validated;
