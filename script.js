// Mandfar Group placeholder interactivity
document.addEventListener('DOMContentLoaded', () => {
  // Year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Countdown to soft launch (two weeks by default)
  const countdownEl = document.getElementById('countdown');
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 14);

  function updateCountdown() {
    if (!countdownEl) return;
    const now = new Date();
    const diff = Math.max(0, launchDate - now);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    countdownEl.textContent = diff > 0 ? `${days}d ${hours}h ${mins}m until launch` : 'We are launching soon';
  }
  updateCountdown();
  setInterval(updateCountdown, 60 * 1000);

  // Contact form (client-side simulation)
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      status.textContent = '';
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();

      if (!name || !email || !message) {
        status.textContent = 'Please complete all fields.';
        return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        status.textContent = 'Please enter a valid email address.';
        return;
      }

      status.textContent = 'Sending message...';
      setTimeout(() => {
        status.textContent = 'Thanks! Your message has been received. We will contact you shortly.';
        form.reset();
      }, 900);
    });
  }

  // Subscribe interactions
  const subscribeBtn = document.getElementById('subscribeBtn');
  const subscribeHeader = document.getElementById('subscribeHeader');
  function showSubscribeMessage() {
    if (!status) return;
    status.textContent = 'Subscribed for updates. Thank you!';
    setTimeout(() => { status.textContent = ''; }, 4000);
  }
  if (subscribeBtn) subscribeBtn.addEventListener('click', showSubscribeMessage);
  if (subscribeHeader) subscribeHeader.addEventListener('click', showSubscribeMessage);

  // Ensure hero is visible on small screens by scrolling it into view if needed
  // (only run once on load)
  const hero = document.querySelector('.hero');
  if (hero && window.innerWidth <= 520) {
    // small delay to allow layout; then ensure hero is fully visible
    setTimeout(() => {
      hero.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 200);
  }
});
