import React, { Component } from 'react';

class SignInForm extends Component {
  render() {
    return (
      <form className="form-control">
        <div className="sign-in-container">
          <input 
            className="sign-in-form__email" 
            type="email" 
            title="Email" 
            placeholder="Email" 
            name="email"  
          />
        </div>

        <div className="sign-in-container">
          <input
            className="sign-in-form__password" 
            type="password" 
            title="Password" 
            placeholder="Password" 
            name="password"  
          />
        </div>
        <div className="sign-in-container">
          <input
            className="sign-in-form__login" 
            type="submit" 
            title="Login" 
            name="login" 
          />
        </div>
      </form>
    )
  }
}

export default SignInForm;