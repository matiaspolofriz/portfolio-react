import React from "react";
import "./About.css";
import ME from "../../assets/foto-Polo1.jpeg";
import { BsFillPatchCheckFill } from "react-icons/bs";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsFillPatchCheckFill className="about__icon" />
              <h5>Studies</h5>
              <small>1 year</small>
            </article>

            <article className="about__card">
              <BsFillPatchCheckFill className="about__icon" />
              <h5>Specialty</h5>
              <small>Frond-end | React </small>
            </article>

            <article className="about__card">
              <BsFillPatchCheckFill className="about__icon" />
              <h5>Proyects</h5>
              <small>8+</small>
            </article>
          </div>

          <p>
            Nacido en Córdoba, Argentina y recibido de Contador Público en la
            UNR de Rosario. Me considero un apasionado de la programación, una
            persona resolutiva y con gran responsabilidad. <br /> Excelente
            adaptación a equipos de trabajo.
            <br /> Con ganas de seguir aprendiendo en este mundo de la
            programación.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let´s Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
