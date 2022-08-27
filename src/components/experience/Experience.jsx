import React from "react";
import "./Experience.css";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiSass } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Developer</h3>
          <div className="experience__content">
            <article className="experience__details">
              <SiHtml5 className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
              </div>
            </article>

            <article className="experience__details">
              <SiCss3 className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
              </div>
            </article>

            <article className="experience__details">
              <SiJavascript className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>

            <article className="experience__details">
              <SiReact className="experience__details-icon" />
              <div>
                <h4>React</h4>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__tools">
          <h3>Tools</h3>
          <div className="experience__content">
            <article className="experience__details">
              <SiRedux className="experience__details-icon" />
              <div>
                <h4>Redux</h4>
              </div>
            </article>

            <article className="experience__details">
              <SiGit className="experience__details-icon" />
              <div>
                <h4>GIT</h4>
              </div>
            </article>

            <article className="experience__details">
              <SiSass className="experience__details-icon" />
              <div>
                <h4>Sass</h4>
              </div>
            </article>

            <article className="experience__details">
              <SiFigma className="experience__details-icon" />
              <div>
                <h4>Figma</h4>
              </div>
            </article>

            <article className="experience__details">
              <SiBootstrap className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
