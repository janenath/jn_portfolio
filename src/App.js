import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar'
import Landing from './components/Landing'
import Page2 from './components/Page2'
import SkillChart from './components/SkillChart'
import Page4 from './components/Page4'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Landing />
      <Page2 />
      <SkillChart />
      <Page4 />
    </div>
  );
}

export default App;
