import React from 'react';
import './workout.css'; // Import the CSS file for styling

// Card component representing each workout category
const Card = ({ imgSrc, title, link }) => {
  const [hovered, setHovered] = React.useState(false); // State to handle hover effect

  return (
    <div
      className={`snip1584 ${hovered ? 'hover' : ''}`} // Apply 'hover' class when hovered
      onMouseEnter={() => setHovered(true)} // Set hovered to true on mouse enter
      onMouseLeave={() => setHovered(false)} // Set hovered to false on mouse leave
      onClick={() => window.location.href = link} // Redirect to the link when clicked
    >
      <img src={imgSrc} alt={title} /> {/* Display the workout image */}
      <div className="figcaption">
        <h3>{title}</h3> {/* Display the workout title */}
      </div>
    </div>
  );
};

// HomeButton component that redirects to the home page
const HomeButton = () => {
  return (
    <button className="home-button" onClick={() => window.location.href = '/clhome'}>
      Home
    </button>
  );
};

// Wrkout component that displays the workout cards
const Wrkout = () => {
  return (
    <div className='wrk'>
      {/* Background video for the workout page */}
      <video className="background-video" autoPlay muted loop>
        <source src="" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <HomeButton /> {/* Render the Home button */}
      
      {/* Container for all workout cards */}
      <div className="container-wrapperr">
        <div className="containerr">
          {/* Each Card component represents a different workout category */}
          <Card
            imgSrc="https://i.pinimg.com/736x/e3/b5/ce/e3b5ce8d417b66e5ba9fd5fe11661a86.jpg"
            title="Chest"
            link='wrkchest' // Link to the chest workout page
          />
          <Card 
            imgSrc="https://i.pinimg.com/originals/8d/85/b6/8d85b61410b5492c479f46ed1d9b5037.jpg"
            title="Lats"
            link="wrkback" // Link to the back workout page
          />
          <Card 
            imgSrc="https://i.pinimg.com/564x/84/06/d6/8406d65ac59c12eb7551a450cad71b3b.jpg"
            title="Biceps"
            link="wrkbiceps" // Link to the biceps workout page
          />
          <Card 
            imgSrc="https://i.pinimg.com/736x/48/81/ac/4881ac5681bf2ec5423f6e21eba92409.jpg"
            title="Triceps"
            link="wrktri" // Link to the triceps workout page
          />
          <Card 
            imgSrc="https://i.pinimg.com/originals/cf/3c/73/cf3c73ef0f54052bcd59f631e3941d24.jpg"
            title="Sholder"
            link="wrksholder" // Link to the shoulder workout page
          />
          <Card 
            imgSrc="https://i.pinimg.com/736x/e7/6d/13/e76d133caaede8dda175d1e04567fe07.jpg"
            title="Leg"
            link="wrkleg" // Link to the leg workout page
          />
        </div>
      </div>
    </div>
  );
};

export default Wrkout;
