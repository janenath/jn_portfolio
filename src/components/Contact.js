import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faMedium, faGithub } from '@fortawesome/free-brands-svg-icons'

class Contact extends Component {
    render () {
        return(
            <div className="page">
                <div className="social">
                    <div className="socialLink">
                    <FontAwesomeIcon icon={faEnvelope}/>
                        <a href="mailto:jane.e.nath@gmail.com"><p>Email Me</p></a>
                    </div>
                    <br/>
                    <div className="socialLink">
                        <FontAwesomeIcon icon={faLinkedin}/>
                        <a href="https://www.linkedin.com/in/janenath" target="_blank" rel="noopener noreferrer"><p>Find Me on LinkedIn</p></a>
                    </div>
                    <br/>
                    <div className="socialLink">
                        <FontAwesomeIcon icon={faGithub}/>
                        <a href="https://www.github.com/janenath" target="_blank" rel="noopener noreferrer"><p>Check Out My Code</p></a>
                    </div>
                    <br/>
                    <div className="socialLink">
                        <FontAwesomeIcon icon={faMedium}/>
                        <a href="https://medium.com/@jane.e.nath" target="_blank" rel="noopener noreferrer"><p>Read My Articles on Medium</p></a>
                    </div>                    
                </div>
            </div>
        )
    }
} 

export default Contact