import React, { Component } from 'react';
import { Chart }  from "react-google-charts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'



class TimeChart extends Component {

    

    render () {
        return(
            <div className="page">
            <div className="charts">
            <div className="chartContainer">
                <h3>day as a nurse</h3>
                <Chart
                    width={'300px'}
                    height={'300px'}
                    background-color={'#faf8f4'}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Task', 'Hours per Day'],
                        ['research (evidence-based-care guidelines)', 1],
                        ['assessment (physical exams)', 2],
                        ['documentation (charting)', 2],
                        ['communication (patient encounters)', 3],
                        ['technical tasks (e.g. surgery or delivering baby)', 1],
                    ]}
                    options={{
                        hAxis: {
                        titleTextStyle: {color: '#607d8b'}, 
                        gridlines: { count:0}, 
                        textStyle: { color: '#b0bec5', fontName: 'Roboto', fontSize: '12', bold: true}
                        },
                        vAxis: {
                        minValue: 0, 
                        gridlines: {color:'#37474f', count:4}, 
                        baselineColor: 'transparent'
                        },
                        colors: ["#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4caf50","#8bc34a","#cddc39"],
                        areaOpacity: 0.24,
                        lineWidth: 1,
                        backgroundColor: 'transparent',
                        chartArea: {
                        backgroundColor: "transparent",
                        width: '100%',
                        height: '80%'
                        },
                            height:200, // example height, to make the demo charts equal size
                            width:400,
                            pieSliceBorderColor: '#263238',
                            pieSliceTextStyle:  {color:'#607d8b' },
                            pieHole: 0.4,
                            bar: {groupWidth: "40" },
                            colorAxis: {colors: ["#3f51b5","#2196f3","#03a9f4","#00bcd4"] },
                            backgroundColor: 'transparent',
                            datalessRegionColor: '#37474f',
                            displayMode: 'regions'
                        }}
                    rootProps={{ 'data-testid': '3' }}
                />
            </div>
            <div className="chartContainer">
                <h3>day as an engineer</h3>
                <Chart
                    width={'300px'}
                    height={'300px'}
                    background-color={'#faf8f4'}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Task', 'Hours per Day'],
                        ['research (read documentation)', 1],
                        ['assessment (debug)', 2],
                        ['documentation (comment code)', 2],
                        ['communication (with team or client)', 1],
                        ['technical tasks (write code)', 3],
                    ]}
                    options={{
                        hAxis: {
                        titleTextStyle: {color: '#607d8b'}, 
                        gridlines: { count:0}, 
                        textStyle: { color: '#b0bec5', fontName: 'Roboto', fontSize: '12', bold: true}
                        },
                        vAxis: {
                        minValue: 0, 
                        gridlines: {color:'#37474f', count:4}, 
                        baselineColor: 'transparent'
                        },
                        colors: ["#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4caf50","#8bc34a","#cddc39"],
                        areaOpacity: 0.24,
                        lineWidth: 1,
                        backgroundColor: 'transparent',
                        chartArea: {
                        backgroundColor: "transparent",
                        width: '100%',
                        height: '80%'
                        },
                            height:200, // example height, to make the demo charts equal size
                            width:400,
                            pieSliceBorderColor: '#263238',
                            pieSliceTextStyle:  {color:'#607d8b' },
                            pieHole: 0.4,
                            bar: {groupWidth: "40" },
                            colorAxis: {colors: ["#3f51b5","#2196f3","#03a9f4","#00bcd4"] },
                            backgroundColor: 'transparent',
                            datalessRegionColor: '#37474f',
                            displayMode: 'regions'
                        }}
                    rootProps={{ 'data-testid': '3' }}
                />
            </div>
            </div>
                <FontAwesomeIcon icon={faArrowDown}/>
            </div>
        )
    }
} 

export default TimeChart