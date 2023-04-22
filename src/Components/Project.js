import React from 'react';
import { Container } from 'react-bootstrap';
import whackafood from "../Images/Whack-A-Food.mp4";
function Project(){
  return(
  <div class = "Project">
    <p class="ptitle">PROJECTS MADE SO FAR</p>
    <hr  width="30%"  /> 
    <div class="projects">
      <div class="square" >
        <div class= "tsq">
          <p class="title">WHACK-A-FOOD</p>
        </div>
        <div class="about">
          <p>Unity Engine</p>
          <p>3D</p>
          <p>Kind of Fruit Ninja</p>
          <p>Different difficulty modes</p>
          

        </div>
        <div class="browser">
        <a href="https://parkhisaini.itch.io/whack-a-food" >AVAILABLE ON WEB BROWSER</a>
        </div>
      </div> 
      <div class="videosec">
      <video width="900" height="390"  onmouseover="this.play()" onmouseout="this.pause();this.currentTime=0;">
      <source src={whackafood} type="video/mp4"></source>
      </video>
      </div>
    

    </div>
    
  </div >
  );
}

export default Project;