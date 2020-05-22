import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'



class SkillChart extends Component {

    
    render () {
        return(
            <div className="page">
             <h2>I use the same essential skills and apply them in new ways:</h2>
             <img className="skillsChart" src="https://janenath.s3.amazonaws.com/Untitled+design.png"></img>
             <ul className="skillsList">
               <li>research/learning</li>
               <li>communication/empathy</li>
               <li>documentation</li>
               <li>organization/productivity</li>
             </ul>
            </div>

        )
    }
} 

export default SkillChart