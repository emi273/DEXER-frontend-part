import React from "react";
import '../App.css';
import ReactApexChart from 'react-apexcharts';


function ShapleyGraph(props) {
    console.log("Emmiiii - ShapleyGraph");

    function handleDataPointClick(event) {
        const attribute = event.seriesIndex;
        //history.push(`/attributes/${attribute}`);
        console.log(":&)")
        console.log("!!!!!55!-    handleDataPointClick");
        console.log(attribute)
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
            categories: props.attributes,
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
            <ReactApexChart options={options} series={[{ data: props.data }]} type="bar" height={350} />
        </div>
    );
}

export default ShapleyGraph;