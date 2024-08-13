import React from 'react';
import './clienthome.css'; 
import logo from '../Assets/Screenshot 2024-08-13 094305.png'
const Clhome = () => {
  return (
    /*Navigation bar */
    <div className="no-scroll">
    <div>
      <nav className="navbar">
        <img src={logo} alt="Onefit" className="logo" />
        <ul>
        <li><a href="bmi">Diet Plan</a></li>
        <li><a href="wrkout">Get pumped</a></li>
        <li><a href="tra">Learn more</a></li>
          <li><a href="contact">Contact us</a></li>
          <li><a href="/">Logout  </a></li>
        </ul>
      </nav>
    </div>
    {/* Main page contents*/}
      <div className="main">
        <div className="container">
          <h1>Move</h1>
          <p>Form healthy habits to take your fitness to the next level.</p>
          <a href="bmi" className="btn">Diet plan</a>
        </div>
      </div>

      <div className="supporting">
        <div className="container">
          <div className="col">
            <h2>Move</h2>
            <p>Become more active by tracking your runs, rides, and walks.</p>
          </div>
          <div className="col">
            <h2>Sync</h2>
            <p>Access your activity on your phone, tablet, or computer.</p>
          </div>
          <div className="col">
            <h2>Compete</h2>
            <p>Set personal challenges and see how you rank against your friends.</p>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>

      <div className="feature">
        <div className="container">
          <h2>Move. Rest. Recover. Move.</h2>
        </div>
      </div>

      <div className="supporting">
        <div className="container">
          <h2>Go Premium</h2>
          <p>Receive recommendations based on your activity to level up.</p>
          <a href="tra" className="btn">Learn more</a>
        </div>
      </div>

      <div className="footer">
        <div className="container">
          <h2>Stop scrolling. Start moving</h2>
          <a href="wrkout" className="btn">get pumped</a>
        </div>
      </div>
    </div>
  );
}

export default Clhome;
