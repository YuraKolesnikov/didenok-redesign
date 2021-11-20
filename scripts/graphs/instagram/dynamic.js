const data_dynamic = {
	labels: labels,
	datasets: [{
		label: null,
		// data
		data: [65, 59, 80, 81, 56, 55, 40],
		fill: false,
		borderColor: '#BEE24D',
		// test!
		tension: 0.1
	}]
};

const config_dynamic = {
	type: 'line',
	data: data_dynamic,
  	drawBorder: false,
	options: {
		interaction: {
			mode: 'index',
			intersect: false,
		},
		plugins: {
			legend: {
				display: false
			}
		},
		elements: {
			// point and line params
			point: {
				pointBorderWidth: 1,
				pointBorderColor: '#BEE24D',
				pointBackgroundColor: '#BEE24D'
			},
			line: {
				backgroundColor: '#BEE24D',
				borderColor: '#BEE24D',
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
  	}
};


const dynamic = new Chart(
	document.getElementById('dynamic'),
	config_dynamic
);

const instagramDynamicButtons = document.querySelectorAll('.js-dynamic-chart');

instagramDynamicButtons.forEach(button => {
	button.addEventListener('click', e => {
		const id = button.dataset.dynamicChartBtnId;
		dynamic.data.datasets[0].data = DATA_SETS[id].follow;
		dynamic.update();
	})
})