const AGE_LABELS = [
	'13-17',
	'18-24',
	'25-34',
	'35-44',
	'45-54',
	'55-64',
	'65+'
]

const data_demo = {
	labels: AGE_LABELS,
	datasets: [
		{
			borderWidth: 0,
			borderRadius: 123,
			borderSkipped: false,
			label: 'MEN',
			// data
			data: [60, 89, 80, 55, 56, 55, 12],
			borderColor: '#1A1A32',
			backgroundColor: '#1A1A32',
		},
		{
			borderWidth: 0,
			borderRadius: 123,
			borderSkipped: false,
			label: 'WOMEN',
			// data
			data: [65, 20, 80, 45, 56, 55, 7],
			borderColor: '#F22185',
			backgroundColor: '#F22185',
		},
	]
};

const config_demo = {
	type: 'bar',
	data: data_demo,
	options: {
		responsive: true,
		plugins: {
			legend: {
				display: false,
			},
			title: {
				display: false,
			}
		},
		scales: {
			x: {
				title: {
					display: true,
					text: 'LOL',
				},
				grid: {
					display: false,
					drawBorder: false
				}
			},
			y: {
				title: {
					display: true,
					text: 'KEK',
				},
				grid: {
					display: false,
					drawBorder: false
				}
			},
		}
	},
};

const demo = new Chart(
	document.getElementById('demo'),
	config_demo
);