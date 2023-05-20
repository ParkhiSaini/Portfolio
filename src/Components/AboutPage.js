import React from 'react';
import profile from "../Images/profile.jpeg";

function About(){
    return(
        <div className="AboutPage">
            <p className="about-title">ABOUT ME</p>
            <hr className="divider2" />
            <div className="content">
            <p>Enter a realm where <span class="highlight">Marvel magic</span> converges with the imaginative prowess of a <span class="highlight">game developer</span>. With superhero-like passion, she embarks on a heroic journey to shape extraordinary virtual realms.</p>
            <p>With the genius of Tony Stark, she crafts awe-inspiring games through <span class="highlight">programming wizardry</span>. Like Doctor Strange, she weaves captivating code, creating immersive <span class="highlight">interactive adventures</span>. Possessing technical brilliance and the <span class="highlight">leadership qualities</span> of Captain America, she fearlessly guides teams, fostering collaboration. Expect <span class="highlight">breathtaking games</span> and meticulously managed projects, where she and her team harness their superhuman abilities to conquer any challenge.</p>
            </div>
            <div className="profile">
            <img class="profile-photo" src={profile} alt="profile-photo" />
           </div>
            
        </div>

    );
  }

export default About;