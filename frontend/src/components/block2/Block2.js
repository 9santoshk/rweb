import React from 'react';
import img1 from '../../assets/image/Forbes-logo.png';
import './Block2.css'

const Block2 = () => {
  return (
    <div className="block2">
      <div className="row">
        <div className="column">
          <p> Featured in</p>
        </div>
        <div className="column">
          <img src={img1} alt="Image"/>
        </div>
        <div className="column">
        <img src={img1} alt="Image"/>
      </div>
        <div className="column">
        <img src={img1} alt="Image"/>
        </div>
        <div className="column">
        <img src={img1} alt="Image"/>
        </div>
        <div className="column">
        <img src={img1} alt="Image"/>
        </div>
      </div>
    </div>
  );
};

export default Block2;
