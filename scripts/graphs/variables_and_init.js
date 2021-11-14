Chart.defaults.font.family = '';
Chart.defaults.font.size = 12;

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