import React from 'react';
import { Container } from 'react-bootstrap';

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
    

    </div>
    
  </div >
  );
}

export default Project;