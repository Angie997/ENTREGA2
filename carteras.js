let carrito = JSON.parse(localStorage.getItem('carrito')) || [];  // Recuperar carrito desde localStorage o inicializarlo vacío
let continuar = true;

// Función para mostrar las carteras disponibles
function mostrarCarteras() {
  const carterasDiv = document.getElementById("carteras");
  if (!carterasDisponibles || carterasDisponibles.length === 0) {
    carterasDiv.innerHTML = "<p>No hay carteras disponibles en este momento.</p>";
    return;
  }

  carterasDisponibles.forEach((cartera, index) => {
    const carteraElement = document.createElement("div");
    carteraElement.classList.add("col-md-3", "mb-4");

    carteraElement.innerHTML = `
        <div class="card">
            <img src="${cartera.imagen}" class="card-img-top" alt="${cartera.nombre}" onerror="this.src='imagenes/default.jpg'">
            <div class="card-body">
                <h5 class="card-title">${cartera.nombre}</h5>
                <p class="card-text">${cartera.descripcion}</p>
                <p class="card-text"><strong>Precio:</strong> $${cartera.precio.toFixed(2)}</p>
                <button class="btn btn-primary" onclick="agregarCarteraAlCarrito(${index})">Agregar al carrito</button>
            </div>
        </div>
    `;

    carterasDiv.appendChild(carteraElement);
  });
}

// Función para agregar una cartera al carrito
function agregarCarteraAlCarrito(index) {
  let carteraSeleccionada = carterasDisponibles[index];
  carrito.push(carteraSeleccionada);
  localStorage.setItem('carrito', JSON.stringify(carrito));  // Guardar el carrito en localStorage
  mostrarmensaje(`Has agregado "${carteraSeleccionada.nombre}" a tu carrito.`);
}

// Función para mostrar el contenido del carrito
function mostrarCarrito() {
  const mensajeCarrito = carrito.length > 0 
    ? `Tu carrito contiene: \n${carrito.map(cartera => `${cartera.nombre} - $${cartera.precio.toFixed(2)}`).join("\n")}`
    : "Tu carrito está vacío.";
  mostrarmensaje(mensajeCarrito);
}

// Función para mostrar mensajes en la página
function mostrarmensaje(mensaje) {
  const mensajeDiv = document.getElementById("mensaje");
  if (mensajeDiv) {
    mensajeDiv.textContent = mensaje;
    mensajeDiv.style.display = "block";

    setTimeout(() => {
      mensajeDiv.style.display = "none";
    }, 3000);
  } else {
    console.log("El div 'mensaje' no existe");
  }
}

// Función para iniciar el simulador de compras
function iniciarSimulador() {
  mostrarCarteras();
  const botonMostrarCarrito = document.getElementById("mostrarCarrito");
  if (botonMostrarCarrito) {
    botonMostrarCarrito.style.display = 'block';  // Mostrar botón para ver carrito
  }
}

// Iniciar el simulador de compras cuando el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
  const mensajeDiv = document.getElementById("mensaje");
  mensajeDiv.textContent = "Tu mensaje aquí";
  iniciarSimulador();
});

// Evento para mostrar el carrito al hacer clic en el botón
document.getElementById("mostrarCarrito")?.addEventListener("click", function () {
  mostrarCarrito();
});
