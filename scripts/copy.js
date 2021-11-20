const copyButtons = document.querySelectorAll('.js-copy-blogger-link-button');
copyButtons.forEach(btn => {
	btn.addEventListener('click', e => {
		alert('Ссылка скопирована (на самом деле нет)')
	})
})