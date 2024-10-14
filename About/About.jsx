import React from "react";
import "./About.css";
import about_img from "../../assets/about.jpg";

const About = () => {
  return (
    <div className="about" id="about" name='about'>
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
      </div>
      <div className="about-right">
        <h3>About Skill Tour</h3>
        <h2>We are here to help you grow as a developer.</h2>
        <p>
          Skill Tour is a dedicated online platform that offers comprehensive
          resources, tutorials, and guides to help you master the world of
          coding and programming. Our mission is to provide you with the best
          possible education and skills to help you succeed in your career as a
          developer.
        </p>
        <p>
          We believe that learning should be fun and engaging, which is why we
          have created a platform that supports both learning and developing
          your programming languages.
        </p>
        <p>
          We strive to make learning coding accessible and enjoyable for
          everyone, regardless of their background or level. Our website is
          designed to be user-friendly and easy to navigate, making it a great
          resource for anyone looking to improve their coding skills and stay
          up-to-date with the latest programming languages and technologies.
        </p>
      </div>
    </div>
  );
};

export default About;
