import React, { Component } from "react";
 
class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-dark mb-3">
          <a className="navbar-brand" href="#">
            <h1>Testing NavBar <span className="badge badge-secondary">{this.props.totalItems}</span></h1>
            <h1>Click an image to begin!</h1>
          </a>
        </nav>
      </React.Fragment>
    );
  }
}
 
export default NavBar;