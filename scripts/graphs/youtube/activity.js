const data_activity = {
	labels: labels,
	datasets: [
		{

			pointBorderWidth: 1,
			pointBorderColor: '#F22185',
			pointBackgroundColor: '#F22185',
			label: 'Likes',
			// data
			data: [65, 89, 80, 45, 56, 55, 78],
			borderColor: '#F22185',
			yAxisID: 'y',

		},
		{
			pointBorderWidth: 1,
			pointBorderColor: '#000000',
			pointBackgroundColor: '#000000',
			label: 'Dislikes',
			// data
			data: [65, 59, 80, 81, 56, 55, 40],
			borderColor: '#000000',
			yAxisID: 'y1',
			// punctured
			borderDash: [10, 5]
		}
	]
};

const config_activity = {
	type: 'line',
	data: data_activity,
	options: {
		responsive: true,
		interaction: {
			mode: 'index',
			intersect: false,
		},
		stacked: false,
		plugins: {
			legend: {
				display: false
			},
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
				},
				type: 'linear',
				display: true,
				position: 'left',
			},
			y1: {
				display: false,
			},
		}
	},
};


const activity = new Chart(
	document.getElementById('activity'),
	config_activity
);

const youtubeActivityButtons = document.querySelectorAll('.js-activity-chart');

youtubeActivityButtons.forEach(button => {
	button.addEventListener('click', e => {
		const id = button.dataset.activityChartBtnId;
		console.log(id);
		activity.data.datasets[0].data = DATA_SETS[id].follow;
		activity.data.datasets[1].data = DATA_SETS[id].unfollow;
		activity.update();
	})
})