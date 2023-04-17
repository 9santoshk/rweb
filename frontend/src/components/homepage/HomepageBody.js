import React from 'react';
// import PropTypes from 'prop-types';
import Slider from '../slideshow/Slideshow';
import './homepageBody.css'; // Import SCSS file for styling

const HomepageBody = () => {
  return (
    <section className="homepage-body">
      <div className="container">
        <Slider />
        <h1 className="title">Welcome to Your Website</h1>
        <p className="subtitle">A catchphrase or tagline goes here</p>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
        <button className="cta">Get Started</button>
      </div>
    </section>
  );
};

HomepageBody.propTypes = {
  // Add prop types if needed
};

export default HomepageBody;
