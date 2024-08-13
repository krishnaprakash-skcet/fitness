import React from 'react';
import './oweight.css';

const photos = [
    {
        src: 'https://www.olivaclinic.com/wp-content/uploads/2024/05/1000-Calorie-Diet-Plan.jpg',
    },
    
];

const OphotoGallery = () => {
    return (
        //a button used for navigation
        <div className="gallery-container">
            <a href="/bmi" className="hombutton">Back</a>
            <div className="gallery">
                {photos.map((photo, index) => (
                    <div key={index} className="card">
                        <img src={photo.src} alt={photo.title} />
                        <div className="card-content">
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OphotoGallery;