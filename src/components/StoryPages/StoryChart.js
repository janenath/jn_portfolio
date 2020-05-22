import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'



class StoryChart extends Component {

    
    render () {
        return(
            <div className="page">
             <h2><span className="bold">Now, as a full-stack engineer, I use the same essential skills and apply them in new ways:</span></h2>
             <img className="skillsChart" src="https://janenath.s3.amazonaws.com/nursingVsEngineering.png"></img>
             <ul className="skillsList">
               <li>research/learning</li>
               <li>communication/empathy</li>
               <li>documentation</li>
               <li>organization/productivity</li>
             </ul>
             <br/>
             <br/>
             <FontAwesomeIcon icon={faArrowDown}/>
            </div>

        )
    }
} 

export default StoryChart