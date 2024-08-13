import React from 'react';
import './uweight.css';

const photos = [
    {
        
        src: 'https://blog.squatwolf.com/wp-content/uploads/2019/01/bulking-diet.png',
    },
    
];

const WphotoGallery = () => {
    return (
        <div className="gallery-container">
        {/*back button for navigation */}
            <a href="/bmi" className="hobutton">Back</a>
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

export default WphotoGallery;