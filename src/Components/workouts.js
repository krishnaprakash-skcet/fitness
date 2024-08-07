import React from 'react';
import './workout.css';

const Card = ({ imgSrc, title, link }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      className={`snip1584 ${hovered ? 'hover' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => window.location.href = link}
    >
      <img src={imgSrc} alt={title} />
      <div className="figcaption">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

const Wrkout = () => {
  return (
    <div className='wrk'>
      <video className="background-video" autoPlay muted loop>
        <source src="" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="container-wrapperr">
        <div className="containerr">
            <Card
              imgSrc="https://i.pinimg.com/736x/e3/b5/ce/e3b5ce8d417b66e5ba9fd5fe11661a86.jpg"
              title="Chest"
              link='wrkchest'
            />
            <Card 
              imgSrc="https://i.pinimg.com/originals/8d/85/b6/8d85b61410b5492c479f46ed1d9b5037.jpg"
              title="Lats"
              link="wrkback"
            />
            <Card 
              imgSrc="https://i.pinimg.com/564x/84/06/d6/8406d65ac59c12eb7551a450cad71b3b.jpg"
              title="Biceps"
              link="https://example.com/accounting"
            />
            <Card 
              imgSrc="https://i.pinimg.com/736x/48/81/ac/4881ac5681bf2ec5423f6e21eba92409.jpg"
              title="Triceps"
              link="https://example.com/marketing"
            />
            <Card 
              imgSrc="https://i.pinimg.com/originals/cf/3c/73/cf3c73ef0f54052bcd59f631e3941d24.jpg"
              title="Sholder"
              link="wrksholder"
            />
            <Card 
              imgSrc="https://i.pinimg.com/736x/e7/6d/13/e76d133caaede8dda175d1e04567fe07.jpg"
              title="Leg"
              link="https://example.com/development"
            />
        </div>
      </div>
    </div>
  );
};

export default Wrkout;
