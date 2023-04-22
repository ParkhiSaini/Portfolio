import React from 'react';

function NavBar(){
  return(
  <div class = "NavBar">
  <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
          <a class="navbar-brand" href="#">Home</a>
          <a class="Projects" href ="#">Projects</a>
          <a class="About" href ="#">About</a>
          <a class="Contact" href ="#">Contact</a>
      </div>
  </nav>
  </div >
  );
}

export default NavBar;