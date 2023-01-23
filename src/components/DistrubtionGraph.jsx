import React from "react";
import '../App.css';
import ReactApexChart from 'react-apexcharts';
import ReactDOM from 'react-dom';


//function DistrbutionGraph(props) {
function DistrbutionGraph(props) {
    console.log("DistrbutionGraph")
    console.log(props.data)
    
    // fetch("http://localhost:3000/getDistrbution", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    // })
    // .then(resp => resp.json())
    // .then(data => {

    //     setBotsNames(data.data);
    // });

    const series = [{
        name: "{mother's education = primary aducation (4th grade)}",
        data: [0, 0, 0, 0, 0, 0.05, 0.01, 0.01, 0.11, 0, 0, 0]
    }, {
        name: 'Top - k',
        data: [0.15, 0.05, 0.05, 0.05, 0.1, 0.05, 0.01, 0.01, 0.11, 0, 0, 0]
    },];

    const options = {
        chart: {
            type: 'bar',
            height: 350,
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories:  [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
        },
        yaxis: {
            title: {
                text: 'Proportion'
            }
        },
        fill: {
            opacity: 1
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return "$ " + val + " thousands"
                }
            }
        },
    };

    return (
        <div id="chart">
            <ReactApexChart options={options} series={series} type="bar" height={350} />
        </div>
    );


}
export default DistrbutionGraph;