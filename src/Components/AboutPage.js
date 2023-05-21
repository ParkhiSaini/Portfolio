import React from 'react';
import profile from "../Images/profile_cropped.jpeg";
import resume from "../Images/Resume.pdf";
function About(){
    return(
        <div className="AboutPage">
            <p className="about-title">ABOUT ME</p>
            <hr className="divider2" />
            <div className="content">
            <p>Enter a realm where <span class="highlight">Marvel magic</span> converges with the imaginative prowess of a <span class="highlight">game developer</span>. With <span class="highlight">superhero-like passion</span>, she embarks on a heroic journey to shape extraordinary virtual realms.</p>
            <p>With the brilliance of Tony Stark and the mystical <span class="highlight">code-weaving skills</span> of Doctor Strange, she crafts <span class="highlight">awe-inspiring games</span>. Possessing the <span class="highlight">leadership qualities</span> of Captain America, she fearlessly guides teams, fostering <span class="highlight">collaboration</span>. Expect breathtaking adventures and projects where her team harnesses superhuman abilities to <span class="highlight">conquer any challenge</span>.</p>
            </div>
            <div className="profile">
            <img class="profile-photo" src={profile} alt="profile-photo" />
           </div>
           <div className="downloadCV">
           <a href={resume} target="_blank" class="cv-button">Download CV</a>
           </div>
        </div>

    );
  }

export default About;