const data_views = {
	labels: labels,
	datasets: [
		{
			borderWidth: 0,
			borderRadius: 123,
			barThickness: 25,
			borderSkipped: false,
			label: 'Views',
			// data
			data: [65, 89, 80, 45, 56, 55, 78],
			borderColor: '#F22185',
			backgroundColor: '#F22185',
		},
	]
};

const config_views = {
	type: 'bar',
	data: data_views,
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
				grid: {
					display: false,
					drawBorder: false
				}
			},
			y: {
				grid: {
					display: false,
					drawBorder: false
				}
			},
		}
	},
};

const views = new Chart(document.getElementById('views'), config_views);

const youtubeViewsButtons = document.querySelectorAll('.js-views-chart');

youtubeViewsButtons.forEach(button => {
	button.addEventListener('click', e => {
		const id = button.dataset.viewsChartBtnId;
		views.data.datasets[0].data = DATA_SETS[id].follow;
		views.update();
	})
})