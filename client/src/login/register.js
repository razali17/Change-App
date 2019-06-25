import React from "react";
import loginImg from "./login.svg";

export class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
      <form onSubmit={this.props.handleSubmit} >
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">First Name</label>
              <input type="text" name="first_name" placeholder="first name" onChange={this.props.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="username">Last Name</label>
              <input type="text" name="last_name" placeholder="last name" onChange={this.props.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" onChange={this.props.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" onChange={this.props.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Confirm Password</label>
              <input type="password" name="password_confirmation" placeholder="confirm password" onChange={this.props.handleChange}/>
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="submit" className="btn">
            Register
          </button>
        </div>
        </form>
      </div>
    );
  }
}