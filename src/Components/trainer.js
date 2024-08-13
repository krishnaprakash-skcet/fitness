import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import './trainer.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom'; // Import Link for navigation
import pic from '../Assets/tog1.jpg'; // Import a static image for the trainer

const ProfileCard = () => {
  const [plans, setPlans] = useState([]); // State to store the premium plans fetched from the API

  useEffect(() => {
    // Function to fetch premium plans from the backend API
    const fetchPlans = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/premium-plans'); // Replace with your actual backend URL
        setPlans(response.data); // Set the fetched plans into the state
      } catch (error) {
        console.error('Error fetching premium plans:', error); // Log any errors that occur during the fetch
      }
    };

    fetchPlans(); // Call the fetch function on component mount
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className="profile-container">
      {/* Navbar with a Home button */}
      <div className="navbar">
        <Link to="/clhome" className="home-button">Home</Link>
      </div>

      {/* Heading for the trainers section */}
      <h1 className='head'>Our Trainers</h1>

      {/* Container for the trainer cards */}
      <div className="cards-container">
        {/* Static trainer cards */}
        <div className="box">
          <div className="imgBx">
            <img src={pic} alt="Trainer 1" /> {/* Static image */}
          </div>
          <div className="card-footer">
            <h3>Krishna</h3>
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

      {/* Section for premium plans */}
      <div className="premium-plans">
        <h2>Premium Plans</h2>
        <div className="plans-container">
          {plans.map((plan) => (
            <div className="plan-card" key={plan.id}>
              <h3>{plan.planName}</h3> {/* Display the plan name */}
              <div className="price">{plan.price}</div> {/* Display the plan price */}
              <p>{plan.description}</p> {/* Display the plan description */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
