import React, { useState } from "react";
import Select from "react-select";
import '../App.css';
import ReactApexChart from 'react-apexcharts';
import ReactDOM from 'react-dom';

class ShapleyGraph extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        series: [{
          data: props.data
        }],
        options: {
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
        },
      };
    }
    render() {
      return (
  <div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} gri />
</div>
          );
        }
      }

      export default ShapleyGraph;