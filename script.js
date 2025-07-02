document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formularioContacto");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const nombre = document.getElementById("nombre").value;
      const correo = document.getElementById("correo").value;
      const mensaje = document.getElementById("mensaje").value;
      if (nombre && correo && mensaje) {
        alert("Formulario enviado correctamente.");
        form.reset();
      } else {
        alert("Por favor, completa todos los campos.");
      }
    });
  }
});
