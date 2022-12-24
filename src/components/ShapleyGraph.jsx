import React, { useState } from "react";
import '../App.css';
import ReactApexChart from 'react-apexcharts';


function ShapleyGraph(props) {
    console.log("Emmiiii - ShapleyGraph");
    console.log(props.data)
    const [attributes, setIfShowShapleyGraph] = useState(props.data.map(item => item[0]));
    const [data, setShapleyGraphData] = useState(props.data.map(item => item[1]));


    function handleDataPointClick(event) {
        console.log(":&)")
        console.log("!!!!!77!-    handleDataPointClick");
        console.log(event.dataPointIndex)
        console.log(attributes[event.dataPointIndex], data[event.dataPointIndex]);

    }




    const options = {
        colors: ['#008000'],
        chart: {
            type: 'bar',
            events: {
                dataPointSelection: handleDataPointClick
            }
        },
        plotOptions: {
            bar: {
                horizontal: true,
            },
        },
        xaxis: {
            categories: attributes,
            show: false,
            labels: {
                show: false
            },
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            }
        },

    }
    return (
        <div id="chart">
            <ReactApexChart options={options} series={[{ data: data }]} type="bar" height={350} />
        </div>
    );
}

export default ShapleyGraph;