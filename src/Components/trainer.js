import React from 'react';
import './trainer.css';
import { Link } from 'react-router-dom';

const ProfileCard = () => {
  return (
    <div className="profile-container">
      <div className="navbar">
        <Link to="/clhome" className="home-button">Home</Link>
      </div>
      <h1 className='head'>Our Trainers</h1>
      <div className="cards-container">
        <div className="box">
          <div className="imgBx">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR47W6ytvgCCe2l9S83KAQsvbiOIoqswxmDwQ&s" alt="Trainer 1" />
          </div>
          <div className="card-footer">
            <h3>Keiani Mabe</h3>
            <h3>Trainer</h3>
          </div>
        </div>

        <div className="box">
          <div className="imgBx">
            <img src="https://ugc.production.linktr.ee/c624994f-3b6c-433a-83d1-d4418f488916_IMG-4705.jpeg?io=true&size=avatar-v3_0" alt="Trainer 2" />
          </div>
          <div className="card-footer">
            <h3>Aswati</h3>
            <h3>2x Miss Ernakulam</h3>
          </div>
        </div>

        <div className="box">
          <div className="imgBx">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHIVXamy_MQOOtA1fIfcE3vPEW4GeUW7IS_g&s" alt="Trainer 3" />
          </div>
          <div className="card-footer">
            <h3>Patty</h3>
            <h3>Weight Trainer</h3>
          </div>
        </div>
      </div>

      <div className="premium-plans">
        <h2>Premium Plans</h2>
        <div className="plans-container">
          <div className="plan-card">
            <h3>Basic Plan</h3>
            <div className="price">$29/month</div>
            <ul>
              <li>Access to all classes</li>
              <li>1-on-1 consultation</li>
            </ul>
          </div>
          <div className="plan-card">
            <h3>Standard Plan</h3>
            <div className="price">$49/month</div>
            <ul>
              <li>Access to all classes</li>
              <li>1-on-1 consultation</li>
              <li>Personalized workout plans</li>
            </ul>
          </div>
          <div className="plan-card">
            <h3>Premium Plan</h3>
            <div className="price">$79/month</div>
            <ul>
              <li>Access to all classes</li>
              <li>1-on-1 consultation</li>
              <li>Personalized workout plans</li>
              <li>Dietary advice</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
