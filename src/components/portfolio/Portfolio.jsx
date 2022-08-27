import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/proyecto-1.png";
import IMG2 from "../../assets/proyecto-2.png";
import IMG3 from "../../assets/proyecto-3.png";
import IMG4 from "../../assets/proyecto-4.png";
import IMG5 from "../../assets/proyecto-5.png";
import IMG6 from "../../assets/proyecto-6.png";
import IMG7 from "../../assets/proyecto-7.png";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Portfolio with HTML and CSS",
    github: "https://github.com/matiaspolofriz/portfolio-js",
    demo: "https://matiaspolofriz.github.io/portfolio-js/portfolio-polofriz/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Calculator",
    github: "https://github.com/matiaspolofriz/calculadora",
    demo: "https://matiaspolofriz.github.io/calculadora/",
  },
  {
    id: 3,
    image: IMG3,
    title: "To do list",
    github: "https://github.com/matiaspolofriz/tareas-diarias",
    demo: "https://matiaspolofriz.github.io/tareas-diarias/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Scoreboard",
    github: "https://github.com/matiaspolofriz/resultados",
    demo: "https://matiaspolofriz.github.io/resultados/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Travel page",
    github: "https://github.com/matiaspolofriz/travel-page",
    demo: "https://matiaspolofriz.github.io/travel-page/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Weather App",
    github: "https://github.com/matiaspolofriz/clima",
    demo: "https://matiaspolofriz.github.io/clima-react/",
  },
  {
    id: 7,
    image: IMG7,
    title: "Portfolio with React",
    github: "https://github.com/matiaspolofriz/portfolio-react",
    demo: "https://matiaspolofriz.github.io/portfolio-react/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Proyects</h2>

      <Swiper
        className="container1 portfolio__container" // install Swiper modules
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <SwiperSlide key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Portfolio;
