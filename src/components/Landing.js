import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
class Landing extends Component {
    render () {
        return(
            <div className="page">
                <h1>Hi, I'm Jane!</h1>
                <img src="https://janenath.s3.amazonaws.com/Me.png"></img>
                <h2>I'm a <span className="bold">software engineer</span>. I'm also a <span className="bold">nurse</span>.</h2>
                <FontAwesomeIcon icon={faArrowDown}/>
            </div>
        )
    }
} 

export default Landing