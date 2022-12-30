import React, { useState } from "react";
import '../App.css';
import ReactApexChart from 'react-apexcharts';


function ShapleyGraph(props) {
    console.log("Emmiiii - ShapleyGraph");
    console.log(props.data)
    // const [attributes, setIfShowShapleyGraph] = useState(props.data.map(item => item[0]));
    // const [data, setShapleyGraphData] = useState(props.data.map(item => item[1]));
    const data = props.data.map(item => item[1])
    const attributes = props.data.map(item => item[0])



    function handleDataPointClick(event, chartContext, config) {
        console.log(":&)")
        console.log("!!!!!77!-    handleDataPointClick");
        console.log(event, chartContext, config)
        console.log(event.dataPointIndex)
        console.log(attributes[event.dataPointIndex], data[event.dataPointIndex]);
        console.log(data)

        // const data = {
        //     k: k,
        //     group: group,
        //     attribute: size,
        // };
        // fetch("http://localhost:3000/getShapleyValues", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(data),
        // })
        //     .then((response) => response.json())
        //     .then((data2) => {
        //         console.log("i here!!!!")
        //         console.log(data2);
        //         setIfShowShapleyGraph(true)
        //         setShapleyGraphData(data2)
        //     })
        //     .catch(error => console.error(error));

    }




    const options = {
        colors: ['#008000'],
        // no data labels
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
        //TODO change from prop to state
        <div id="chart">
            <ReactApexChart options={options} series={[{ data: data }]} type="bar" height={350} />
        </div>
    );
}

export default ShapleyGraph;