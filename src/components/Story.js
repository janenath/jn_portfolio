import React from 'react'
import StoryHome from './StoryPages/StoryHome'
import Story2 from './StoryPages/Story2'
import StoryChart from './StoryPages/StoryChart'
import StoryEnd from './StoryPages/StoryEnd'


function Story() {
  return (
    <div className="Page">
      <StoryHome />
      <Story2 />
      <StoryChart />
      <StoryEnd />
    </div>
  );
}

export default Story;