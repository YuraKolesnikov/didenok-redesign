const data_demo = {
	labels: labels,
	datasets: [
		{
			datalabels: {
				// offset values from center
				anchor: 'start',
				align: 'right',
				offset: 20,
				color: '#FFFFFF'
			},
			borderWidth: 0,
			borderRadius: 123,
			borderSkipped: false,
			label: 'MEN',
			// data
			data: [65, 89, 80, 45, 56, 55, 78],
			backgroundColor: '#1A1A32',
			borderColor: '#1A1A32',
			yAxisID: 'y',
		},
		{
			datalabels: {
				// offset values from center
				anchor: 'end',
				align: 'left',
				offset: 20,
				color: '#FFFFFF'
			},
			borderWidth: 0,
			borderRadius: 123,
			borderSkipped: false,
			label: 'WOMAN',
			data: [-65, -89, -80, -45, -56, -55, -78],
			backgroundColor: '#BEE24D',
			borderColor: '#BEE24D',
			yAxisID: 'y1',
		},
	]
};

const config_demo = {
	type: 'bar',
	data: data_demo,
	plugins: [ChartDataLabels],
	options: {
		indexAxis: 'y',
		responsive: true,
		plugins: {
			datalabels: {
				formatter: function(value, context) {
					if (value < 0) {
						return value * -1;
					}
					return value
				}
			},
			tooltip: {
				enabled: false,
			},
			legend: {
				display: false,
			},
			title: {
				display: false,
			}
		},
		scales: {
			x: {
				ticks: {
					display: false
				},
				grid: {
					display: false,
					drawBorder: false
				}
			},
			y: {
				ticks: {
					display: false
				},
				grid: {
					display: false,
					drawBorder: false
				},
				type: 'linear',
				position: 'left',
			},
			y1: {
				display: false,
			},
			label: {
				display: false,
			},
		}
	},
};

const demo = new Chart(
	document.getElementById('demo'),
	config_demo
);
