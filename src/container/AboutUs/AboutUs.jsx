import React from 'react';

import {images} from '../../constants'

import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__wrapper app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">At Grandeur, we are passionate about delivering exceptional food and exceptional service. Our team of skilled chefs and dedicated staff work tirelessly to ensure every guest enjoys a memorable dining experience.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Founded with a love for fine dining, Grandeur has been serving delectable dishes and creating delightful memories since 1995. Our rich history is rooted in tradition, innovation, and a commitment to excellence.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);


export default AboutUs;
