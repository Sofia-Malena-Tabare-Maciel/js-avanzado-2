// Acceder al elemento del textarea
const textarea = document.getElementById('texto');

// Acceder al elemento del contador
const contador = document.getElementById('contador');

// Establecer el número máximo de caracteres permitidos
const maxCaracteres = 100;

// Función para actualizar el contador de caracteres
function actualizarContador() {
  const caracteresRestantes = maxCaracteres - textarea.value.length;
  contador.textContent = caracteresRestantes;
}

// Evento que se dispara al escribir en el textarea
textarea.addEventListener('input', actualizarContador);

// Actualizar el contador al cargar la página
actualizarContador();