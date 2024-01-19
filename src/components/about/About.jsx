import React from "react";
import "./about.css";
import aboutme from "../../images/tushar.JPG";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { TbLetterC } from "react-icons/tb";
import { RiFolderOpenLine } from "react-icons/ri";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={aboutme} alt="aboutme"></img>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>none</small>
            </article>
            <article className="about__card">
              <TbLetterC className="about__icon" />
              <h5>Course</h5>
              <small>B.Tech</small>
            </article>
            <article className="about__card">
              <RiFolderOpenLine className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          <p>
            My name is Tushar Bali. As an aspiring Fullstack Web Developer, I am
            passionate about creating dynamic and user-friendly web
            applications. With proficiency in both front-end and back-end
            technologies, I am dedicated to delivering high-quality, efficient,
            and scalable solutions. I am seeking an opportunity to contribute my
            skills and collaborate with a dynamic team in a challenging and
            growth-oriented environment.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
