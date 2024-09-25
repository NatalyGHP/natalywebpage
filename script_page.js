document.addEventListener('DOMContentLoaded', function() {
		const menuIcon = document.getElementById('menu-icon');
		const navBar = document.getElementById('nav-bar');

		menuIcon.addEventListener('click', function() {
			navBar.classList.toggle('active');
		});
	});