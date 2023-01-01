import React, { useState } from "react";
import '../App.css';
import ReactApexChart from 'react-apexcharts';
import DistrbutionGraph from "./DistrubtionGraph";


function ShapleyGraph(props) {
    console.log("Emmiiii - ShapleyGraph");
    console.log(props.data)

    const [ifShowDistrbutionGraph, setIfShowDistrbutionGraph] = useState(false);
    const [dataState, setDataState] = useState(props.data[0].map(item => item[1]));
    const [first, setfirst] = useState(true);
    const [stateShowDis, setStateShowDis] = useState(false);
    var varShowDis = false




    //const [ifShowShapleyGraphh, setIfShowShapleyGraph] = useState(true);
    // setIfShowDistrbutionGraph(false)
    // setIfShowShapleyGraph(true)
    //const [shapleyGraphData, setShapleyGraphData] = useState([]);
    const data = props.data[0].map(item => item[1])
    const attributes = props.data[0].map(item => item[0])


    console.log(dataState[3])
    console.log(data[3])
    console.log(dataState[3] == data[3]); // true


    function handleDataPointClick(event, chartContext, config) {
        const data_distrubtion = {
            attribute: attributes[config.dataPointIndex],
            group: props.data[1],
            k: props.data[2]
        };
        console.log("in handleDataPointClick: ", data_distrubtion)
        fetch("http://localhost:3000/getDistrbution", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data_distrubtion),
        })
            .then((response) => response.json())
            .then((data2) => {
                console.log("i here!!!!")
                console.log(data2);
            })
            .catch(error => console.error(error));

        setIfShowDistrbutionGraph(true)
        varShowDis = true
        setStateShowDis(true)
        setfirst(false)
        setDataState(data)

        // setIfShowShapleyGraph(false)

    }


    const options = {
        dataLabels: {
            style: {
                colors: ['black']
            }
        },
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
        <div>
            <div id="chart">
                {true ? <ReactApexChart options={options} series={[{ data: data }]} type="bar" height={350} /> : null}
            </div>
            <br />
            <br />
            <br />
            {stateShowDis ? <DistrbutionGraph /> : null}
        </div>
    );
}

export default ShapleyGraph;