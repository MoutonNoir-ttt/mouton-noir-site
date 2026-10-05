// Minimal language routing. No tracking, no cookies.
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('langToggle');
  if (toggle) toggle.addEventListener('click', () => { window.location.href = 'en/index.html'; });
});
