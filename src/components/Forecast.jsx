import React, { Component } from 'react';

export default class Forcast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    console.log(
      'UserName: \n' +
        this.state.username +
        '\nPassWord:\n' +
        this.state.password
    );
    e.preventDefault();
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-3 align-self-center" />
        <div className="card text-white border-primary mb-3 text-center">
          <div className="card-header bg-light text-dark">Login Form</div>
          <form className="align-content-center">
            <div className="card-body bg-secondary">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <br />
                <input
                  className="form-control"
                  type="text"
                  name="username"
                  value={this.state.loginInfo}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <br />
                <input
                  className="form-control"
                  type="text"
                  name="password"
                  value={this.state.loginInfo}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="card-footer text-muted">
              <button type="submit" className="btn btn-group-lg btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
