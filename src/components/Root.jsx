import React, { Component } from 'react';

export default class Root extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="jumbotron">
              Hello World, you are in the {NODE_ENV} environment!
            </div>
          </div>
        </div>
      </div>
    );
  }
}
