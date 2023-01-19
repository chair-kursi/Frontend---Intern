import React, { Component } from "react";

export class employerSignUp extends Component {
  render() {
    return (
      <div>
        <section className="login">
          <div className="loginContainer">
            <h3>For Professionals</h3>
            <label>Name</label>
            <input type="text" autoFocus required />
            <label>Phone</label>
            <input type="number" required />
            <label>City</label>
            <input type="text" required />
            <label>Email</label>
            <input type="email" required />
            <label>Password</label>
            <input type="password" placeholder="Password" required />
            <br />
            <br />
            <div className="btnContainer">
              <div>
                <button>Sign In</button>
                <p>
                  Don't have an Account ? <span>Sign Up</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default employerSignUp;
