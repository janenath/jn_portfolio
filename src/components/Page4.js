import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
class Page4 extends Component {
    render () {
        return(
            <div className="page">
                <h2>What skills do I bring to the workplace?</h2>
                <FontAwesomeIcon icon={faArrowDown}/>
            </div>
        )
    }
} 

export default Page4