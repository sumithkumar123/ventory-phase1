import React from 'react';
import logo1 from '../assets/logo1.jpeg';
import logo2 from '../assets/logo2.jpeg';
import logo3 from '../assets/logo3.jpeg';
import './body.scss';

export default function Body() {
  return (
    <div className="container">
      <div className="section">  
        <h1>Why Ventory?</h1>
        <h3>Because we care about your business.</h3>
        <div className="content">
          <div>
            <p>
              At Ventory, we go beyond conventional inventory management, crafting an experience that transcends expectations. Embrace a future where precision, innovation, and efficiency converge to propel your business to new heights with Ventory's advanced solutions.
            </p>
          </div>
          <div>
            <img src={logo1} alt="mainLogo" />
          </div>
        </div>
      </div>

      <div className="section">
        <h1>Why Choose Us</h1>
        <h3>Empowering Your Success, One Decision at a Time</h3>
        <div className="content">
          <div className="feature-item">
            <h4>MODERN SOLUTION</h4>
            <p>
              Revolutionize your operations with our modern solution. Harness innovation for streamlined processes and dynamic adaptability, ensuring your business stays ahead in this digital era.
            </p>
          </div>
          <div className="feature-item">
            <h4>ABSOLUTE CONTROL</h4>
            <p>
              Take command of your business with absolute control. Our comprehensive system empowers you to manage every aspect, providing unmatched authority and precision in your operations.
            </p>
          </div>
          <div className="feature-item">
            <h4>SECURE HANDLING</h4>
            <p>
              Ensure peace of mind with our secure handling channel. Safeguard your assets through a fortified channel, offering reliable and protected transit for your valuable resources.
            </p>
          </div>
        </div>
      </div>

      <div className="section">
        <h1>Partner's App</h1>
        <h3>Empowering Partners for Success.</h3>
        <div className="content">
          <div>
            <p>
              Explore the future of business management with a sneak peek into our revolutionary dashboard. Tailored for our partners, this intuitive interface merges cutting-edge technology with user-centric design, offering a glimpse into the seamless efficiency and powerful insights that await in the Ventory ecosystem.
              Elevate your business experience – the future is now, and it's at your fingertips.
            </p>
          </div>
          <div>
            <img src={logo2} alt="mainLogo" />
          </div>
        </div>
      </div>

      <div className="section">
        <h1>Customer's App</h1>
        <h3>Seamless Experience, Stunning UI: Discover Ventory's Customer App</h3>
        <div className="content">
          <div>
            <p>
              Empower customers with our mobile web app – your gateway to seamless transactions and personalized journeys. Designed for partner's end users, this innovative interface redefines engagement and elevates convenience.
            </p>
          </div>
          <div>
            <img src={logo3} alt="mainLogo" />
          </div>
        </div>
      </div>

      <div className="features">
        <div>
          <h1>What Else?</h1>
          <h3>Unlock the Possibilities: Key Features of Ventory</h3>
        </div>
        <div >
        </div>
      </div>
    </div>
  );
}