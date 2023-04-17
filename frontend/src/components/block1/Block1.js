import React from 'react';
import img1 from '../../assets/image/img1.jpg';
import './block1.scss';

const Block1 = () => {
    return (
        <div className="block1">
            <div className="row">
                <div className="column">
                    <h1>Furnishing your spaces, our passion.</h1>
                    <p>Transform your living space with Color my Space the go-to destination for interior furnishing in Bangalore, India!</p>
                    <button>View all Services</button>
                </div>
                <div className="column">
                    <img src={img1} alt="Image"/>
                </div>
            </div>
        </div>
    );
};

export default Block1;
