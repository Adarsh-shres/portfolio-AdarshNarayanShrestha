const menuButton = document.getElementById('menu-button');
const navLinks = document.querySelector('.nav-links');

function toggleMenu() {
  navLinks.classList.toggle('open');
  const isExpanded = navLinks.classList.contains('open');
  menuButton.setAttribute('aria-expanded', isExpanded);
  menuButton.innerHTML = isExpanded ? '✕' : '☰';
}

if (menuButton && navLinks) {
  menuButton.addEventListener('click', toggleMenu);

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('open')) {
        toggleMenu();
      }
    });
  });
}

const contactForm = document.querySelector('#contact form');
const messageDiv = document.createElement('div');

if (contactForm) {
  messageDiv.id = 'form-message';
  contactForm.appendChild(messageDiv);

  contactForm.addEventListener('submit', event => {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
      messageDiv.textContent = 'Please fill out all required fields.';
      messageDiv.style.color = 'red';
    } else {
      messageDiv.textContent = 'Thank you for your message. I will respond immediately.';
      messageDiv.style.color = 'green';
      contactForm.reset();
    }
  });
}
