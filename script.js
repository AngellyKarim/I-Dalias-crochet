// ============================
// CONFIGURACIÓN GENERAL
// ============================

const CONFIG = {
  whatsappNumber: "51994098296",
  moneda: "S/",
  mensajeBase:
    "Hola 😊 me encantó esta cartera de I'Dalias y quiero más información:"
};


// ============================
// LISTA DE PRODUCTOS
// ============================

const productos = [
  {
    id: 1,
    nombre: "Valentina",
    precio: 219,
    imagen: "cartera1.jpg",
    categoria: "clasicas",
    descripcion:
      "Elegante y atemporal, tejida a mano para un estilo sofisticado."
  },
  {
    id: 2,
    nombre: "Lía Mini",
    precio: 169,
    imagen: "cartera2.jpg",
    categoria: "clasicas",
    descripcion:
      "Pequeña y encantadora, perfecta para llevar lo esencial con estilo."
  },
  {
    id: 3,
    nombre: "Alma Bohemia",
    precio: 239,
    imagen: "cartera3.jpg",
    categoria: "coloridas",
    descripcion:
      "Diseño vibrante que destaca por su esencia artesanal."
  },
  {
    id: 4,
    nombre: "Clara",
    precio: 199,
    imagen: "cartera4.jpg",
    categoria: "clasicas",
    descripcion:
      "Minimalista y versátil, combina con cualquier outfit."
  },
  {
    id: 5,
    nombre: "Mía Sol",
    precio: 189,
    imagen: "cartera5.jpg",
    categoria: "coloridas",
    descripcion:
      "Alegre y luminosa, ideal para darle vida a tu estilo."
  }
];


// ============================
// ESTADO GLOBAL
// ============================

let productosActivos = [...productos];


// ============================
// REFERENCIAS DOM
// ============================

const contenedor = document.getElementById("contenedor-productos");
const botonesFiltro = document.querySelectorAll(".filtro-btn");


// ============================
// UTILIDADES
// ============================

function formatearPrecio(precio) {
  return `${CONFIG.moneda} ${precio.toFixed(2)}`;
}

function crearLinkWhatsApp(producto) {
  const mensaje = `
${CONFIG.mensajeBase}

👜 Modelo: ${producto.nombre}
💰 Precio: ${formatearPrecio(producto.precio)}

¿Está disponible? ✨
  `.trim();

  return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(
    mensaje
  )}`;
}


// ============================
// CREAR CARD
// ============================

function crearCard(producto) {
  const card = document.createElement("article");
  card.className = "producto-card";

  card.innerHTML = `
    <div class="producto-img-container">
      <img src="${producto.imagen}" alt="${producto.nombre}">
    </div>

    <div class="producto-info">
      <h3>${producto.nombre}</h3>
      <p class="descripcion">${producto.descripcion}</p>
      <p class="precio">${formatearPrecio(producto.precio)}</p>

      <a href="${crearLinkWhatsApp(producto)}"
         target="_blank"
         class="btn-comprar">
        Comprar por WhatsApp
      </a>
    </div>
  `;

  return card;
}


// ============================
// RENDER PRODUCTOS
// ============================

function renderProductos(lista) {
  if (!contenedor) return;

  contenedor.innerHTML = "";

  const fragment = document.createDocumentFragment();

  lista.forEach(producto => {
    fragment.appendChild(crearCard(producto));
  });

  contenedor.appendChild(fragment);

  activarAnimaciones();
}


// ============================
// FILTROS
// ============================

function activarFiltros() {
  botonesFiltro.forEach(boton => {
    boton.addEventListener("click", () => {
      const categoria = boton.dataset.categoria;

      // actualizar estado visual
      botonesFiltro.forEach(b => b.classList.remove("activo"));
      boton.classList.add("activo");

      productosActivos =
        categoria === "todos"
          ? [...productos]
          : productos.filter(p => p.categoria === categoria);

      renderProductos(productosActivos);
    });
  });
}


// ============================
// ANIMACIONES SCROLL
// ============================

function activarAnimaciones() {
  const cards = document.querySelectorAll(".producto-card");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  cards.forEach(card => observer.observe(card));
}


// ============================
// INICIALIZAR
// ============================

document.addEventListener("DOMContentLoaded", () => {
  renderProductos(productos);
  activarFiltros();
});
