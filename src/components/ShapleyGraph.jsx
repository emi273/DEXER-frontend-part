import React from "react";
import '../App.css';
import ReactApexChart from 'react-apexcharts';

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
          }
        }
      return (
  <div id="chart">
<ReactApexChart options={options} series={[{data:props.data}]} type="bar" height={350}  />
</div>
          );
        }

      export default ShapleyGraph;