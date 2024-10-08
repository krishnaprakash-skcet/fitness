
import React from 'react';
import './baselanding.css';

const SplitLandingPage = () => {

    //Main landing page 

  const handleMouseEnter = (side) => {
    document.querySelector('.container1').classList.add(`hover-${side}`);
  };

  const handleMouseLeave = (side) => {
    document.querySelector('.container1').classList.remove(`hover-${side}`);
  };

  return (
    <div className='rr'>
    <div className="container1">
    <div className="split left"
    onMouseEnter={() => handleMouseEnter('left')}
    onMouseLeave={() => handleMouseLeave('left')}>
    {/*navigates to trainer login */}
    <a href="/tlog" className="btan">Trainer</a>
    </div>
    <div className="split right"
    onMouseEnter={() => handleMouseEnter('right')}
    onMouseLeave={() => handleMouseLeave('right')}>
      {/*navigates to Client login */}
    <a href="/client" className="btan">Client</a>
    </div>
    </div>
    </div>
  );
};

export default SplitLandingPage;
