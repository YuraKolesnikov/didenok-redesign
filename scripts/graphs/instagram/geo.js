const data_geo = {
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
			borderRadius: 500,
			borderSkipped: false,
			label: 'Percent',
			// data
			data: [65, 89, 80, 45, 56, 55, 78],
			borderColor: '#BEE24D',
			backgroundColor: '#BEE24D',
		},
	]
};

const config_geo = {
	type: 'bar',
	data: data_geo,
	plugins: [ChartDataLabels],
	options: {
		indexAxis: 'y',
		responsive: true,
		plugins: {
			datalabels: {
				formatter: function(value, context) {
					return value + '%'
				}
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
				display: true,
				position: 'left',
			},
			label: {
				display: false,
			},
		}
	},
};

const geo = new Chart(
	document.getElementById('geo'),
	config_geo
);
