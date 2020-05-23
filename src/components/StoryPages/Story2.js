import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
class Story2 extends Component {
    render () {
        return(
            <div className="page">
                <p className="story"><span className="bold">As a nurse,</span> I loved delivering babies, supporting patients through challenging times, and using scientific expertise to impact people's lives for the better.</p>
                <br/>
                <br/>
                <p className="story">But after five years in the field, I felt <span className="bold">burnt out.</span> I was working within a system that prioritized increasing quantities of billable patient encounters rather than building meaningful relationships and solutions.</p>
                <br/>
                <br/>
                <p className="story"><span className="bold">I decided to explore other career options.</span> I started doing some online coding tutorials just for fun, and soon realized that's what I wanted to do full-time.</p>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <FontAwesomeIcon icon={faArrowDown}/>
            </div>
        )
    }
} 

export default Story2