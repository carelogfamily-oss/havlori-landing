// Progressive enhancement only; navigation and signup work without JavaScript.
document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});
