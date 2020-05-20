import React, { Component } from 'react';
import { Chart }  from "react-google-charts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'



class TimeChart extends Component {

    

    render () {
        return(
            <div className="page">
            <Chart
                width={'300px'}
                height={'300px'}
                background-color={'#faf8f4'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Task', 'Hours per Day'],
                    ['Work', 11],
                    ['Eat', 2],
                    ['Commute', 2],
                    ['Watch TV', 2],
                    ['Sleep', 7],
                ]}
                options={{
                    title: 'My Day As a Nurse',
                    // Just add this option
                    pieHole: 0,
                }}
                rootProps={{ 'data-testid': '3' }}
            />
                <FontAwesomeIcon icon={faArrowDown}/>
            </div>
        )
    }
} 

export default TimeChart