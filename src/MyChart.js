import React, { Component } from 'react';
import Chart from 'chart.js';
import $ from 'jquery';
import wyzant from '../public/wyzant_hs_calculus.json';
import './myChart.css';


export default class MyChart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: wyzant["ResultsPage"]
		}
		console.log(this.state.data);
	}

	componentDidMount() {
		this.createChart();
	}

	getX() {
		// gets x-axis data, returns array of strings
		return this.state.data.map((elem) => elem["DisplayName"]);
	}

	getY() {
		// gets y-axis data, returns array of ints
		return this.state.data.map((elem) => elem["TypicalHourlyRate"]);
	}

	getYLabel() {
		// gets main label at top of chart
		return "Typical Hourly Rate by Tutor";
	}


	randomBarColors() {
		var brcolors = ['rgba(255,99,132,1)','rgba(54, 162, 235, 1)','rgba(255, 206, 86, 1)','rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)','rgba(255, 159, 64, 1)'];
		var bgcolors = ['rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)'];
		return this.state.data.map(() => {var num = Math.floor(Math.random()*bgcolors.length); return [bgcolors[num], brcolors[num]];});
	}

	createChart() {
		var randomColors = this.randomBarColors();
		var ctx = $("#myChart");
		var myChart = new Chart(ctx, {
			type: 'bar',
			data: {
		        labels: this.getX(),
		        datasets: [{
		            label: this.getYLabel(),
		            data: this.getY(),
		            backgroundColor: randomColors.map((i) => i[0]),
		            borderColor: randomColors.map((i) => i[1]),
		            borderWidth: 1
		        }]
		    },
		    options: {
		        scales: {
		            yAxes: [{
		                ticks: {
		                    beginAtZero:true
		                }
		            }]
		        }
		    }
		});
	}

	render() {
		return (
			<div className="myChart">
				<canvas id="myChart" width="800" height="400"></canvas>
			</div>
		);
	}
}