import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPopup.css';
import { assets } from '../../assets/assets';

const LoginPopup = ({ showLogin, setShowLogin }) => {
  const navigate =useNavigate();
  const [currState, setCurrState] = useState("Login");

  const handleClose = () => {
    setShowLogin(false);
  }

  return (
    <div className={`login-popup ${showLogin ? 'show' : ''}`}>

      <form className='login-popup-container'>
        <div className='login-popup-title'>
          <h2>
            {/* {currState}  */}
            Signin</h2>
          <img onClick={handleClose} src={assets.cross_icon} alt="Close" />
        </div>

        <div className='login-popup-inputs'>
          {/* {currState === "Sign Up" && <input type='text' placeholder='Your name' required />}
          <input type='email' placeholder='Your email' required />
          <input type='password' placeholder='Password' required /> */}
          <button onClick={() => navigate('/login')}>
           Login Account
          </button>
        </div>

        <button onClick={() => navigate('/signup')}>
          {/* {currState === "Sign Up" ? "Create account" : "Login"} */}
           Create Account
          </button>

        <div className='login-popup-condition'>
          <input type='checkbox' required onClick={handleClose} />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {/* {currState === "Login"
          ? <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
          : <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
        } */}
      </form>
    </div>
  );
}

export default LoginPopup;
