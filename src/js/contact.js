document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const interest = document.getElementById('interest').value;
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !interest || !message) {
      alert('Por favor, rellena todos los campos.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Por favor, introduce un correo electrónico válido.');
      return;
    }

    const data = { name, email, interest, message };
    console.log('Datos del formulario:', data);

    alert('¡Datos enviados correctamente!');

    form.reset();
  });
});
