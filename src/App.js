import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Title from './Components/Title ';
import Project from './Components/Project';

function App() {
  return (
    <div>
  
      <NavBar />
      <Title/>
      <Project />

    </div>
    
    
  );
}

export default App;
