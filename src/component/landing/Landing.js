import React from "react";
import '../landing/Landing.scss'

const Landing = () => {
    return(
        <>
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
                        <li> <a href="/signin" className="sign in">Log In</a> </li>
                        <li> <a href="/signup" className="sign up">Register</a> </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='content'>
            <div className="section1">
                <div className="wrapper">
                    <div className="sect1">
                        <div className="Welcome-message">
                            <h1>Welcome to Free Mentors!</h1>
                            <p>"We are here to share our knowledge, expertise and experience to help you maximise your potential, develop your skills, improve your performance and become the person you always wanted to be."</p>
                        </div>
                    <a href="/signup">Get started</a>
                    </div>
                </div>
            </div>
            <div className="section2">
                <h2>Available on all devices</h2>
                <div className="responsive">
                    <p>Free Mentors is available across all platforms and every devices. you can access it from your smartphone,tablet and computer.</p>
                </div>
            </div>
            <div className="section3">
                <h2>Why Free Mentors?</h2>
                <div className="benefits">
                    <p>Develops a skill or competency.</p>
                    <p>Improves the mentee’s confidence in their ability to execute the task at hand.</p>
                    <p>Gives the mentee practice in accepting feedback from a consistent source.</p>
                    <p>Teaches the mentee how to maintain a professional relationship.</p>
                    <p>Expands the mentee’s network of contacts.</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Landing;
