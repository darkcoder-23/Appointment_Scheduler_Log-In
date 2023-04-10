const form = document.querySelector('form');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
	e.preventDefault();

	// Perform login validation
	if (validateLogin(email.value, password.value)) {
		// Redirect to appointment scheduler
		window.location.href = "scheduler.html";
	}
});

function validateLogin(email, password) {
	// Perform validation
	return true;
}
