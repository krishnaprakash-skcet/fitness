import React, { useState } from 'react';
import './clientlogs.css';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';

const UserSection = () => {
//signin 
  const [loginData, setLoginData] = useState({
    email_id: '',
    password: '',
  });
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const { email_id, password } = loginData;
    if (email_id && password) {
      try {
        const response = await axios.get('http://localhost:8080/api/registration');
        //for get method from db
        const userExist = response.data.some(
          (data) => data.email_id === email_id && data.password === password
        );
        if (userExist) {
          Navigate("/clhome")
        } else {
          alert('User Not Found');
        }
      } catch (error) {
        console.error('Error fetching users', error);
        alert('Error logging in');
      }
    } else {
      alert('Please fill all the fields');
    }
  };



  const handleSignUpClick = () => {
    const userForms = document.getElementById('user_options-forms');
    userForms.classList.remove('bounceRight');
    userForms.classList.add('bounceLeft');
  };

  const handleLoginClick = () => {
    const userForms = document.getElementById('user_options-forms');
    userForms.classList.remove('bounceLeft');
    userForms.classList.add('bounceRight');
  };
//Sign up

const Navigate=useNavigate();
    const next = () =>{
        Navigate('/clhome');
    }
    const [signupData, setSignupData] = useState({
      full_name:'',
        email_id: '',
        password: '',
        contact_number: ''
      });
          
      const handleSignupChange = (e) => {
        const { name, value } = e.target;
        setSignupData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };
      const handleSignupSubmit = async (e) => {
        e.preventDefault();
        const { full_name,email_id,password,contact_number } = signupData;
        if ( full_name && email_id && password &&contact_number) {
          try {
            await axios.post('http://localhost:8080/api/registration', signupData);
            //for post method 
            next();
          } catch (error) {
            alert('Error creating user');
          }
        } else {
          alert('Please fill all the fields');
        }
      };
  return (
    <div className="f">
      <section className="user">
        <div className="background-video">
          <video autoPlay muted loop id="myVideo">
          {/*for back ground video */}
            <source src="https://jeffnippard.com/cdn/shop/videos/c/vp/3a71a93cc2454923a5649ca9011147ae/3a71a93cc2454923a5649ca9011147ae.HD-1080p-7.2Mbps-29536290.mp4?v=0" type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        </div>
        <div className="user_options-container">
          <div className="user_options-text">
            <div className="user_options-unregistered">
              <h2 className="user_unregistered-title">Don't have an account?</h2>
              <p className="user_unregistered-text"></p>
              <button className="user_unregistered-signup" id="signup-button" onClick={handleSignUpClick}>Sign up</button>
            </div>
            <div className="user_options-registered">
              <h2 className="user_registered-title">Have an account?</h2>
              <p className="user_registered-text"></p>
              <button className="user_registered-login" id="login-button" onClick={handleLoginClick}>Login</button>
            </div>
          </div>
{/**for login */}
          <div className="user_options-forms" id="user_options-forms">
            <div className="user_forms-login">
              <h2 className="forms_title">Login</h2>
              <form className="forms_form">
                <fieldset className="forms_fieldset">
                  <div className="forms_field">
                    <input name='email_id' type="email" onChange={handleLoginChange} placeholder="Email" className="forms_field-input" required autoFocus />
                  </div>
                  <div className="forms_field">
                    <input name='password' type="password" onChange={handleLoginChange} placeholder="Password" className="forms_field-input" required />
                  </div>
                </fieldset>
                <div className="forms_buttons">
                  <button type="button" className="forms_buttons-forgot"></button>
                  <input type="submit" value="Log In" className="forms_buttons-action" onClick={handleLoginSubmit} />
                </div>
              </form>
            </div>
{/**for sign up */}
            <div className="user_forms-signup">
              <h2 className="forms_title">Sign Up</h2>
              <form className="forms_form">
                <fieldset className="forms_fieldset">
                  <div className="forms_field">
                    <input type="text" name='full_name' onChange={handleSignupChange} placeholder="Full Name" className="forms_field-input" required />
                  </div>
                  <div className="forms_field">
                    <input type="email" name='email_id' onChange={handleSignupChange} placeholder="Email" className="forms_field-input" required />
                  </div>
                  <div className="forms_field">
                    <input type="password" name='password' onChange={handleSignupChange} placeholder="Password" className="forms_field-input" required />
                  </div>
                  <div className="forms_field">
                    <input type="text" name='contact_number' onChange={handleSignupChange} placeholder="Contact" className="forms_field-input" required />
                  </div>
                </fieldset>
                <div className="forms_buttons">
                  <input type="submit" value="Sign up" onClick={handleSignupSubmit} className="forms_buttons-action" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserSection;
