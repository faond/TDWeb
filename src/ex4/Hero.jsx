/* eslint-disable */
import React from 'react';

const Hero = ({ name, powerstats, images }) => (
  <div className="hero_container">
    <h2 className="name">
      {name}
    </h2>
    <h4>
      {
        Object.keys(powerstats).map(i => <p>{i} : {powerstats[i]}</p>)
      }
    </h4>
    <img src={images.md} alt={name} className="hero_img" />
  </div>
);

export default Hero;
/* eslint-disable */
