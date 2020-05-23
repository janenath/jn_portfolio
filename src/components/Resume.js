import React, { Component } from 'react';

class Resume extends Component {
    render () {
        return(
            <div className="page">
                <h3>to download a printable copy of my resume, <a className="textLink" href="https://janenath.s3.amazonaws.com/Jane+Nath+Resume.pdf" target="blank" download>click here.</a></h3>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className="projectContainer">
                    <h4>selected projects:</h4>
                    <div className="projects">
                        <div className="projectsRow">
                            <div className="project">
                                <a href="https://github.com/janenath/fourth_trimester" target="_blank">
                                <p>Fourth Trimester | Full-Stack App with React, Ruby on Rails</p>
                                <img className="appPreview" src="https://janenath.s3.amazonaws.com/fourth_trimester.png" alt="fourth trimester logo"></img>
                                </a>
                            </div>
                            <div className="project">
                                <a href="https://github.com/janenath/capsule" target="_blank">
                                <p>Capsule | RESTful API with React, Ruby on Rails</p>
                                <img className="appPreview" src="https://janenath.s3.amazonaws.com/capsule.png" alt="capsule logo"></img>
                                </a>
                            </div>
                        </div>
                        <div className="projectsRow">
                            <div className="project">
                                <a href="https://github.com/janenath/plot-master" target="_blank">
                                <p>Plot Master | Full-Stack App with React, Node.js</p>
                                <img className="appPreview" src="https://janenath.s3.amazonaws.com/plot_master.png" alt="plot master logo"></img>
                                </a>
                            </div>
                            <div className="project">
                                <a href="https://github.com/janenath/elias_miller" target="_blank">
                                <p>EM Portfolio | Jamstack App with Gatsby, Contentful</p>
                                <img className="appPreview" src="https://janenath.s3.amazonaws.com/em.png" alt="elias miller portfolio"></img>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>          
            </div>
        )
    }
} 

export default Resume