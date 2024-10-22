import React, { useState } from 'react';
import './Login.css';
import { auth } from './firebase'; // Adjust the path if necessary
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom'; // Add Link and useNavigate for navigation

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill all fields');
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setError(''); // Clear error if login is successful
      console.log('Logged in:', { email });
      navigate('/'); // Redirect to home or desired page after successful login
    } catch (error) {
      setError(error.message); // Set error message if login fails
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true); // Set loading state
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate('/'); // Redirect after successful Google login
    } catch (error) {
      if (error.code === 'auth/popup-closed-by-user') {
        setError('The popup was closed before completion.'); // Specific error handling
      } else {
        setError(error.message);
      }
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <button className="google-signin-button" onClick={handleGoogleSignIn}>
        <img
          src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" // Google logo URL
          alt="Google Icon"
          className="google-icon"
        />
        Sign in with Google
      </button>
      <p>
        Don't have an account? <Link to="/signup">Sign up here</Link>
      </p>
    </div>
  );
};

export default Login;
