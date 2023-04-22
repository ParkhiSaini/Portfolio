import React from 'react';

import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import line from "../Images/line.png";
import line2 from "../Images/line2.png";
import video1 from "../Images/video1.mp4";
import bg from "../Images/bg1.jpg";

function Title(){
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setShowText(true);
  }, []);
  return(
  <div class = "Title">
    <div class= "head">
        <div class="name" >
          <p>PARKHI SAINI</p>
          
        </div>
        <div class= "line">
        <img class="line" src={line} alt="line" />
        </div>
        <div class="position">
        {showText &&
            <p className="typing">
              Game Developer
              <span className="cursor" />
            </p>
          }
        </div>
        <div class= "line2">
        <img class="line2" src={line2} alt="line2" />
        </div>
        <div class="scroll">
        <p >Scroll Down</p>
        </div>
        
               
        

    </div>
    
  </div>
  );
}

export default Title;