import React, { Component } from 'react';
import { Chart }  from "react-google-charts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'



class SkillChart extends Component {

    
    render () {
        return(
            <div className="page">
            <div className="chartContainer">
                <h3>day as a nurse</h3>
                <Chart
        width={400}
        height={120}
        background-color={'#faf8f4'}
        chartType="Gauge"
        loader={<div>Loading Chart</div>}
        data={[
          ['Label', 'Value'],
          ['Memory', 1],
          ['CPU', 1],
          ['Network', 1],
        ]}
        options={{
          redFrom: 90,
          redTo: 100,
          yellowFrom: 75,
          yellowTo: 90,
          minorTicks: 5,
        }}
        rootProps={{ 'data-testid': '1' }}
      />
               
            </div>
            </div>

        )
    }
} 

export default SkillChart