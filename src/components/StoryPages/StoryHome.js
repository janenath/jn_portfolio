import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

class StoryHome extends Component {
    render () {
        return(
            <div className="page">
                <h1>Hi, I'm Jane!</h1>
                <img className="me" alt="drawing of Jane, created on opendoodles.com" src="https://janenath.s3.amazonaws.com/Me.png"></img>
                <h2>I'm a <span className="bold">software engineer</span>. I used to be a <span className="bold">nurse midwife</span>.</h2>
                <FontAwesomeIcon icon={faArrowDown}/>
            </div>
        )
    }
} 

export default StoryHome