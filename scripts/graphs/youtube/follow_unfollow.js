const data_follow_unfollow = {
	labels: labels,
	datasets: [
		{
			borderWidth: 0,
			borderRadius: 123,
			borderSkipped: false,
			label: 'Follow',
			// data
			data: [65, 89, 80, 45, 56, 55, 78],
			borderColor: '#F22185',
			backgroundColor: '#F22185',
		},
		{
			borderWidth: 0,
			borderRadius: 123,
			borderSkipped: false,
			label: 'Unfollow',
			// data
			data: [65, 89, 80, 45, 56, 55, 78],
			borderColor: '#1A1A32',
			backgroundColor: '#1A1A32',
		},
	]
};

const config_follow_unfollow = {
	type: 'bar',
	data: data_follow_unfollow,
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

const follow_unfollow = new Chart(
	document.getElementById('follow_unfollow'),
	config_follow_unfollow
);

const youtubeFollowButtons = document.querySelectorAll('.js-follow-chart');

youtubeFollowButtons.forEach(button => {
	button.addEventListener('click', e => {
		const id = button.dataset.followChartBtnId;
		follow_unfollow.data.datasets[0].data = DATA_SETS[id].follow;
		follow_unfollow.data.datasets[1].data = DATA_SETS[id].unfollow;
		follow_unfollow.update();
	})
})