import React, { Component } from "react";
import './signup.scss';

class Signupin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: ''
        }
        this.handleSignup = (e) => {
            e.preventDefault()
            const firstName = e.target.children[2].value
            const lastName = e.target.children[3].value
            const email = e.target.children[4].value
            const password = e.target.children[5].value

            const acc = {firstName,lastName,email,password}
            console.log(acc);
            
        }
        this.handleSignin = (e) => {
            e.preventDefault()
            const email = e.target.children[2].value
            const password = e.target.children[3].value

            const acc = {email,password}
            console.log(acc);
            
        }
        this.setPath = () => {
            if(this.props.location.pathname === '/signup'){
                this.setState(() => ({path:'/signin'}))
            }else if(this.props.location.pathname === '/signin'){
                this.setState(() => ({path:'/signup'}))
            }   
            return this.state.path;         
        }
      }
      render() {
      return (
        <React.Fragment>
            <div className='header'>
                <div className="container">
                    <div className="logo-and-menu">
                        <div className="logo">Free Mentors</div>
                            <div className="menu">
                                <div className="line1"></div>
                                <div className="line2"></div>
                                <div className="line3"></div>
                                <div className="line4"></div>
                            </div>
                    </div>
                    <div className="navigation side-menu">
                        <ul>
                            <li> <a href={this.props.location.pathname === '/signup'? '/signin': '/signup'}>
                                {this.props.location.pathname === '/signup'? 'Log In': 'Register'}
                                </a> </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='section'>
                <div className="background">
                    <div className="section11">
                        <h1>join the big community where everything is achievable!</h1>
                    </div>
                    <div className="section2">
                        {this.props.location.pathname ==='/signup' ? (
                         <form id="sign-up" name="signup" onSubmit={this.handleSignup}>
                            <div className="small-logo"></div>
                            <h2>Sign up to join</h2>
                            <input type="text" className="fields" id="firstName" placeholder="First name"/>
                            <input type="text" className="fields" id="lastName" placeholder="Last name"/>
                            <input type="text" className="fields" id="email" placeholder="Enter email"/>
                            <input type="password" className="fields" id="password" placeholder="Enter password"/>
                            <div id="errors"></div>
                            <input type="submit" value="Sign up"/>
                            <p>Have an account? <a href="/signin">Log in.</a></p>
                        </form>
                        ) : this.props.location.pathname ==='/signin' ? (
                            <form id="sign-in" name="signin" onSubmit={this.handleSignin}>
                                <div className="small-logo"></div>
                                <h2>Sign in</h2>
                                <input className="email fields" type="text" placeholder="Enter email"/>
                                <input className="password fields" type="password" placeholder="Enter password"/>
                                <div id="errors"></div>
                                <input type="submit" value="Sign in"/>
                                <p>Don't have an account? <a href="signup">Create one.</a></p>
                            </form>
                        ) : null
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
      );
    }
  }
  
  export default Signupin;