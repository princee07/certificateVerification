import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = () => {
    const [isSignUp, setIsSignUp] = useState(false);

    const handleSignUpClick = () => {
        setIsSignUp(true);
    };

    const handleSignInClick = () => {
        setIsSignUp(false);
    };

    return (
        <div className="container">
            <h1 className="form-title">{isSignUp ? 'Register' : 'Sign In'}</h1>

            <div className="links">
                <button id="signInButton" onClick={handleSignInClick}>Sign In</button>
                <button id="signUpButton" onClick={handleSignUpClick}>Sign Up</button>
            </div>

            {isSignUp ? (
                <form id="signup" style={{ display: 'block' }}>
                    <div id="signUpMessage" className="messageDiv" style={{ display: 'none' }}></div>

                    {/* First Name */}
                    <div className="input-group">
                        <i className="fas fa-user"></i>
                        <input type="text" id="fName" placeholder="First Name" required />
                        <label htmlFor="fName">First Name</label>
                    </div>

                    {/* Last Name */}
                    <div className="input-group">
                        <i className="fas fa-user"></i>
                        <input type="text" id="lName" placeholder="Last Name" required />
                        <label htmlFor="lName">Last Name</label>
                    </div>

                    {/* Email */}
                    <div className="input-group">
                        <i className="fas fa-envelope"></i>
                        <input type="email" id="rEmail" placeholder="Email" required />
                        <label htmlFor="rEmail">Email</label>
                    </div>

                    {/* Password */}
                    <div className="input-group">
                        <i className="fas fa-lock"></i>
                        <input type="password" id="rPassword" placeholder="Password" required />
                        <label htmlFor="rPassword">Password</label>
                    </div>

                    <button type="submit" className="submit-button">Register</button>
                </form>
            ) : (
                <form id="signIn" style={{ display: 'block' }}>
                    {/* Sign In Form Fields */}
                    <div className="input-group">
                        <i className="fas fa-envelope"></i>
                        <input type="email" placeholder="Email" required />
                        <label>Email</label>
                    </div>

                    <div className="input-group">
                        <i className="fas fa-lock"></i>
                        <input type="password" placeholder="Password" required />
                        <label>Password</label>
                    </div>

                    <button type="submit" className="submit-button">Sign In</button>
                </form>
            )}
        </div>
    );
};

export default LoginPage;
