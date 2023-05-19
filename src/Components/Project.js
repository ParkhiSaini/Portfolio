import React from 'react';
import { Container } from 'react-bootstrap';
import whackafood from "../Images/Whack-A-Food.mp4";

const projectsData = [
  {
    title: 'WHACK-A-FOOD (2023) ',
    description: ['3D','Unity Engine', 'Kind of Fruit Ninja', 'Different difficulty modes'],
    link: 'https://parkhisaini.itch.io/whack-a-food',
    videoSrc: whackafood
  },
  {
    title: 'SHOOT-THROUGH-TIME (2023)',
    description: ['3D','Unity Engine', 'Third person shooter', 'Complete the objectives for a succesfful mission'],
    link: 'https://parkhisaini.itch.io/whack-a-food',
    videoSrc: whackafood
  },
  {
    title: 'SHOOT-THROUGH-TIME (2023)',
    description: ['3D','Unity Engine', 'Third person shooter', 'Complete the objectives for a succesfful mission'],
    link: 'https://parkhisaini.itch.io/whack-a-food',
    videoSrc: whackafood
  },
  {
    title: 'SHOOT-THROUGH-TIME (2023)',
    description: ['3D','Unity Engine', 'Third person shooter', 'Complete the objectives for a succesfful mission'],
    link: 'https://parkhisaini.itch.io/whack-a-food',
    videoSrc: whackafood
  }

  // Add more project objects here...
];

function Project() {
  return (
    <div className="Project">
      <p className="ptitle">PROJECTS MADE SO FAR</p>
      <hr className="divider" />
      <div className="projects">
        {projectsData.map((project, index) => (
          <div className={`square ${index % 2 === 1 ? 'right' : 'left'}`} key={index}>
            <div className="tsq">
              <p className="title">{project.title}</p>
            </div>
            <div className="about">
              {project.description.map((item, i) => (
                <p key={i}>{item}</p>
              ))}
            </div>
            <div className="browser">
              <a href={project.link}>AVAILABLE ON WEB BROWSER</a>
            </div>
            <div className="videosec">
              <video width="900" height="390" onMouseOver={e => e.target.play()} onMouseOut={e => {e.target.pause(); e.target.currentTime = 0;}}>
                <source src={project.videoSrc} type="video/mp4" />
              </video>
            </div>
          </div>
        ))}
      </div>
      <div className="viewmore">
        <a href="https://parkhisaini.itch.io/"> --VIEW MORE--</a>
      </div>
    </div>
  );
}

export default Project;
