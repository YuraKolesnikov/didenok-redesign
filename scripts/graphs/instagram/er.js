const data_er = {
	datasets: [
		{
			borderWidth: 0,
			borderRadius: 500,
			label: 'ER',
			// data
			data: [3, 8],
			backgroundColor: ['rgba(26, 26, 50, 100%)', '#F9F9F9'],
		}
	]
};

const config_er = {
	type: 'doughnut',
	data: data_er,
	options: {
		// hole in the centre
		cutout: '90%',
		borderColor: 'rgba(10.2%, 10.2%, 19.6%, 10%)',
		responsive: true,
		plugins: {
			legend: {
				display: false,
			},
			title: {
				display: false,
			},
			tooltip: {
				enabled: false,
			}
		},
		elements: {
			center: {
				text: '30%',
				color: 'teal'
			}
		}
	},
};

const er = new Chart(
	document.getElementById('er'),
	config_er
);
