import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
class Page2 extends Component {
    render () {
        return(
            <div className="page">
                <h2>What do <span className="bold">software engineering</span> and <span className="bold">nursing</span> have in common?</h2>
                <FontAwesomeIcon icon={faArrowDown}/>
            </div>
        )
    }
} 

export default Page2