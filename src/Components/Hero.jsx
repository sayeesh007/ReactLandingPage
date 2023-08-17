import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <h3>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </h3>
        <button className="primary-btn">Shop Now</button>
        <button className="secondary-btn">Category</button>
        <p>Also Available On</p>
        <img src="/amazon.png" alt="amazon" />
        <img src="/flipkart.png" alt="flipkart" />
      </div>
      <div className="hero-img">
        <img src="/shoe_image.png" alt="shoe" />
      </div>
    </section>
  );
};

export default Hero;
