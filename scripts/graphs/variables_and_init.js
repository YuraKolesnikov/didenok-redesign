Chart.defaults.font.family = '';
Chart.defaults.font.size = 12;

const DATA_SETS = {
	month: {
		follow: [20, 30, 40, 50, 40, 65, 31],
		unfollow: [80, 70, 60, 50, 60, 35, 69],
		third: [68, 25, 66, 44, 42, 67, 2]
	},
	year: {
		follow: [80, 70, 60, 50, 60, 35, 69],
		unfollow: [20, 30, 40, 50, 40, 65, 31],
		third: [93, 80, 97, 54, 41, 77, 66]
	},
	all: {
		follow: [65, 89, 80, 55, 56, 55, 99],
		unfollow: [80, 70, 60, 50, 60, 35, 69],
		third: [10, 23, 41, 49, 23, 63, 80]
	}
}

const MONTHS = [
	'01',
	'02',
	'03',
	'04',
	'05',
	'06',
	'07',
	'08',
	'09',
	'10',
	'11',
	'12',
];

function months(config) {
	var cfg = config || {};
	var count = cfg.count || 12;
	var section = cfg.section;
	var values = [];
	var i, value;

	for (i = 0; i < count; ++i) {
		value = MONTHS[Math.ceil(i) % 12];
		value = MONTHS[Math.ceil(i) % 12];
		values.push(value.substring(0, section));
	}
	return values;
}

const DATA_COUNT = 7;
const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

const labels = months({count: 7});