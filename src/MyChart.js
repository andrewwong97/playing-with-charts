import React, { Component } from 'react';
import Chart from 'chart.js';
import $ from 'jquery';
import './myChart.css';


export default class MyChart extends Component {
	componentDidMount() {
		this.createChart();
	}

	getX() {
		// gets x-axis data, returns array of strings
		return ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];
	}

	getY() {
		// gets y-axis data, returns array of ints
		return [12, 19, 3, 5, 2, 3];
	}

	getYLabel() {
		// gets main label at top of chart
		return "# of Votes"
	}

	createChart() {
		var ctx = $("#myChart");
		var myChart = new Chart(ctx, {
			type: 'bar',
			data: {
		        labels: this.getX(),
		        datasets: [{
		            label: this.getYLabel(),
		            data: this.getY(),
		            backgroundColor: [
		                'rgba(255, 99, 132, 0.2)',
		                'rgba(54, 162, 235, 0.2)',
		                'rgba(255, 206, 86, 0.2)',
		                'rgba(75, 192, 192, 0.2)',
		                'rgba(153, 102, 255, 0.2)',
		                'rgba(255, 159, 64, 0.2)'
		            ],
		            borderColor: [
		                'rgba(255,99,132,1)',
		                'rgba(54, 162, 235, 1)',
		                'rgba(255, 206, 86, 1)',
		                'rgba(75, 192, 192, 1)',
		                'rgba(153, 102, 255, 1)',
		                'rgba(255, 159, 64, 1)'
		            ],
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
				<canvas id="myChart" width="400" height="400"></canvas>
			</div>
		);
	}
}