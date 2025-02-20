// Lista de carteras disponibles
let carrito = [];
let continuar = true;

// Función para mostrar las carteras disponibles
function mostrarCarteras() {
  const carterasdiv = document.getElementById("carteras");
  carterasDisponibles.forEach((cartera)=>{
    const carteraElement = document.createElement("div");
    carteraElement.classList.add("cartera");
    carteraElement.innerText = cartera;
    carteraElement.innerHTML = `
                <img src="${cartera.imagen}" alt="${cartera.nombre}">
                <h3>${cartera.nombre}</h3>
                <p>Precio: $${cartera.precio.toFixed(2)}</p>
            `;
    carterasdiv.appendChild(carteraElement);
  })
}

// Función para agregar una cartera al carrito
function agregarCarteraAlCarrito() {
  let seleccion = parseInt(prompt("Selecciona el número de la cartera que deseas comprar (1-4):"));
  if (seleccion >= 1 && seleccion <= carterasDisponibles.length) {
    let carteraSeleccionada = carterasDisponibles[seleccion - 1];
    carrito.push(carteraSeleccionada);
    alert(`Has agregado "${carteraSeleccionada}" a tu carrito.`);
  } else {
    alert("Selección inválida. Intenta de nuevo.");
  }
}

// Función para mostrar el contenido del carrito
function mostrarCarrito() {
  if (carrito.length > 0) {
    alert(`Tu carrito contiene: \n${carrito.join("\n")}`);
  } else {
    alert("Tu carrito está vacío.");
  }
}

// Función para iniciar el simulador de compras
function iniciarSimulador() {
  alert("Bienvenido a la tienda Angelic Carteras.");
  while (continuar) {
    mostrarCarteras();
    agregarCarteraAlCarrito();
    continuar = confirm("¿Deseas comprar otra cartera?");
  }

  if (carrito.length > 0) {
    mostrarCarrito();
    alert("Gracias por tu compra. ¡Vuelve pronto!");
  } else {
    alert("No realizaste ninguna compra. ¡Vuelve pronto!");
  }
}

// Iniciar el simulador de compras
iniciarSimulador();

