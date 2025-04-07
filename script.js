// Smooth Scrolling
const links = document.querySelectorAll('nav a');
links.forEach(link => {
	link.addEventListener('click', (e) => {
		e.preventDefault();
		const target = document.querySelector(link.getAttribute('href'));
		target.scrollIntoView({ behavior: 'smooth' });
	});
});

// Scroll to Top Button
const scrollTopBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
	scrollTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

scrollTopBtn.addEventListener('click', () => {
	window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Scroll Animation on Sections
const sections = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('visible');
		}
	});
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));

// Form Validation
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
	e.preventDefault();
	const name = document.getElementById('name').value.trim();
	const email = document.getElementById('email').value.trim();
	const message = document.getElementById('message').value.trim();
	if (!name || !email || !message) {
		alert("Please fill in all fields.");
	} else {
		alert("Thanks for contacting me!");
		form.reset();
	}
});
