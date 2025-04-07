// Step 3: Toggle Navigation Menu (Hamburger)
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.querySelector('nav ul');

if (navToggle && navMenu) {
	navToggle.addEventListener('click', () => {
		navMenu.classList.toggle('active');
	});
}

// Smooth Scroll for Nav Links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		const section = document.querySelector(this.getAttribute('href'));
		section.scrollIntoView({
			behavior: 'smooth'
		});
	});
});

// Step 4: Filter Projects by Category (Placeholder example)
function filterProjects(category) {
	const projects = document.querySelectorAll('#projects article');
	projects.forEach(project => {
		if (category === 'all' || project.classList.contains(category)) {
			project.style.display = 'block';
		} else {
			project.style.display = 'none';
		}
	});
}

// Lightbox for Project Images
const projectImages = document.querySelectorAll('#projects img');

projectImages.forEach(img => {
	img.addEventListener('click', () => {
		const modal = document.createElement('div');
		modal.classList.add('modal');
		modal.innerHTML = `
      <div class="modal-content">
        <span class="close-button">&times;</span>
        <img src="${img.src}" alt="${img.alt}" />
      </div>
    `;
		document.body.appendChild(modal);

		modal.querySelector('.close-button').addEventListener('click', () => {
			document.body.removeChild(modal);
		});
	});
});

// Step 5: Contact Form Validation
const contactForm = document.querySelector('#contact form');

if (contactForm) {
	contactForm.addEventListener('submit', function (e) {
		e.preventDefault();

		const name = this.name.value.trim();
		const email = this.email.value.trim();
		const message = this.message.value.trim();

		if (!name || !email || !message) {
			alert('Please fill in all fields.');
			return;
		}

		const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
		if (!emailPattern.test(email)) {
			alert('Please enter a valid email address.');
			return;
		}

		alert('Thank you! Your message has been sent.');
		this.reset();
	});
}
