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
			borderColor: '#BEE24D',
			backgroundColor: '#BEE24D',
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

const follow_unfollow = new Chart(
	document.getElementById('follow_unfollow'),
	config_follow_unfollow
);