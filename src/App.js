import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Landing from './components/Landing'
import Page2 from './components/Page2'
import TimeChart from './components/TimeChart'
// import Page4 from './components/Page4'
// import SkillChart from './components/SkillChart'

function App() {
  return (
    <div className="App">
      <Landing />
      <Page2 />
      <TimeChart />
      {/* <Page4 />
      <SkillChart /> */}
    </div>
  );
}

export default App;
