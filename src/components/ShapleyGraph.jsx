import React, { useState } from "react";
import Select from "react-select";
import '../App.css';
import ReactApexChart from 'react-apexcharts';
import ReactDOM from 'react-dom';

function ShapleyGraph(props){
        const options =  {
            colors: ['#008000'],
          chart: {
            type: 'bar',
          },
          plotOptions: {
            bar: {
              horizontal: true,
            },
          },
          xaxis: {
            categories: props.attributes,
          }
        }
      return (
  <div id="chart">
<ReactApexChart options={options} series={[{data:props.data}]} type="bar" height={350}  />
</div>
          );
        }

      export default ShapleyGraph;