import React from "react";
import "./portfolio.css";
import Img1 from "../../images/Projectt1.webp";
import Img2 from "../../images/portfolio2.jpg";
import Img3 from "../../images/portfolio3.jpg";
import Img4 from "../../images/portfolio4.jpg";
import Img5 from "../../images/portfolio5.jpg";
import Img6 from "../../images/portfolio6.png";
import { useState } from "react";

const Portfolio = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const articleCount = 5;
  const articles = [];
  const projects = [
    {
      id: 1,
      image: Img1,
      github: "/ToDo-list/",
	  netlify: "netflix-clone",
      title: "ToDo List using JS",
      description: "I implemented features that allow users to add, update, and remove tasks in real time, enhancing the overall user experience. By leveraging HTML and CSS alongside JavaScript, I crafted an intuitive and visually appealing interface. I prioritized clean code and efficient functionality, enabling users to manage their tasks seamlessly.",
    },
    {
      id: 2,
      image: Img2,
      github: "/Education_website",
	  netlify: "netflix-clone",
      title: "Education Website",
      description:
        "Developed By using Java full stack, is a comprehensive online platform that caters to the needs of students, faculty, staff and other stakeholders. It leverages a range of Java-based technologies and frameworks to provide a seamless and robust user experience. The website encompasses various modules and features that support academic programs, student services, administrative tasks, and community engagement ",
    },
    {
      id: 3,
      image: Img3,
      github: "/Quiz_Application",
      netlify: "netflix-clone",
      title: "Quiz Application",
      description: "This project is based on Java, it has Java quiz questions with timing and 50-50 lifeline, and  50-50 lifeline itself shows 2 correct answers, out of which 1 answer is correct. .",
    },
    {
      id: 4,
      image: Img4,
      github: "/Calculator",
	  netlify: "netflix-clone",
      title: "Calculator",
      description:
        "This project demonstrates my proficiency in creating interactive and functional web applications. The calculator performs basic arithmetic operations and features a user-friendly interface. Through this project, I showcased my understanding of HTML, CSS, and JavaScript, as well as my problem-solving skills.",
    },
    {
      id: 5,
      image: Img5,
      github: "/netflixclone",
      netlify: "netflix-clone",
      title: "NetFlix-Clone using Reactjs and Firebase",
      description: "Netflix clone using React.js to showcase my web development skills. This project replicates the familiar Netflix interface, displaying movies and TV shows dynamically. By implementing user authentication, I ensured a secure browsing experience. I also prioritized responsive design, making the clone accessible and visually appealing on various devices. ",
    },
    {
      id: 6,
      image: Img6,
      github: "/Promptopia-main",
	  netlify: "netflix-clone",
      title: "Promptopia",
      description: "Promptopia is also just like ToDo list, And it is attached to the database, when we create a prompt in it, that data goes to Atlas MongoDB, we have added it with email, then that data is saved and notes are made in our profile.",
    },
  ];

  function hoverHandle(id) {
    setHoverIndex(id);
  }

  projects.map(({ id, image, title, description, github, netlify }) => {
    // if ((id = articleCount)) {
    const altCount = `p-${id}`;

    const article = (
      <article
        onMouseEnter={() => hoverHandle(id)}
        onMouseLeave={() => hoverHandle(null)}
        className="portfolio__item"
        key={id}
      >
        <div className="portfolio__item-image">
          <img src={image} alt={altCount} />
        </div>
        <h3 className={`project-title ${id === hoverIndex ? "hovered" : ""}`}>
          {title}
        </h3>
        {id === hoverIndex && (
          <p className="project-description">{description}</p>
        )}
        <div className="portfolio__item-cta">
          <a
            className="btn"
            href={`https://github.com/tusharbali2109${github}`}
            target="_blank"
          >
            Github
          </a>
          <a
            className="btn btn-primary"
           
            href= {`https://${netlify}-sooty-sigma.vercel.app/`}

            target="_blank"
          >
            Live Demo
          </a>
        </div>
      </article>
    );
    articles.push(article);
    // }
  });

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">{articles}</div>
    </section>
  );
};

export default Portfolio;
