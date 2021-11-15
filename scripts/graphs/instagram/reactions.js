const data_reactions = {
	labels: labels,
	datasets: [
		{
			borderWidth: 0,
			borderRadius: 123,
			borderSkipped: false,
			label: 'Likes',
			// data
			data: [65, 89, 80, 45, 56, 55, 78],
			borderColor: '#F22185',
			backgroundColor: '#F22185',
		},
		{
			borderWidth: 0,
			borderRadius: 123,
			borderSkipped: false,
			label: 'Comments',
			// data
			data: [65, 89, 80, 45, 56, 55, 78],
			borderColor: '#1A1A32',
			backgroundColor: '#1A1A32',
		},
		{
			borderWidth: 0,
			borderRadius: 123,
			borderSkipped: false,
			label: 'Uploads',
			// data
			data: [65, 89, 80, 45, 56, 55, 78],
			borderColor: '#BEE24D',
			backgroundColor: '#BEE24D',
		},
	]
};

const config_reactions = {
	type: 'bar',
	data: data_reactions,
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
				},
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

const reactions = new Chart(document.getElementById('reactions'), config_reactions);

const youtubeReactionButtons = document.querySelectorAll('.js-reactions-chart');

youtubeReactionButtons.forEach(button => {
	button.addEventListener('click', e => {
		const id = button.dataset.reactionsChartBtnId;
		reactions.data.datasets[0].data = DATA_SETS[id].follow;
		reactions.data.datasets[1].data = DATA_SETS[id].unfollow;
		reactions.data.datasets[2].data = DATA_SETS[id].third;
		reactions.update();
	})
})