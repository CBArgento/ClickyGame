import React, { Component } from "react";

class Jumbotron extends React.Component {
    render() {
      return (
        <div className="jumbotron">
          <h1>{this.props.mainText}Clicky Game!</h1>
          <p>{this.props.subText}Click on an image to earn points, but don't click on any more than once!</p>
        </div>
      )
    }
  }
  
  class PrimaryButton extends React.Component {
    render() {
      return (
        <div>
           <p><a className="btn btn-primary btn-lg" href="#" role="button">{this.props.buttonText}</a></p>
          </div>
      )
    }
  }

  export default Jumbotron;