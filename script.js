// Smooth scroll for nav links
document.querySelectorAll('.nav-links a, .scroll-btn').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

// Lightbox functionality
const galleryImgs = document.querySelectorAll('.gallery-img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

galleryImgs.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'block';
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});

// Simple form submission feedback
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();
  const feedback = document.getElementById("formMessage");

  if (!name || !email || !message) {
    feedback.textContent = "Please fill out all fields.";
    feedback.style.color = "#ff4d4d";
    feedback.style.display = "block";
    return;
  }

  feedback.textContent = "Message sent successfully!";
  feedback.style.color = "#39ff14";
  feedback.style.display = "block";

  // Simulate clearing the form
  this.reset();
  setTimeout(() => {
    feedback.style.display = "none";
  }, 3000);
});
