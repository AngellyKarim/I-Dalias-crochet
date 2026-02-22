// ============================
// CONFIGURACIÓN GENERAL
// ============================

const WHATSAPP_NUMBER = "51994098296";

const MENSAJE_BASE =
  "Hola 😊 me encantó esta cartera de I'Dalias y quiero más información:";


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
// REFERENCIAS DOM
// ============================

const contenedor = document.getElementById("contenedor-productos");
const botonesFiltro = document.querySelectorAll(".filtro-btn");


// ============================
// CREAR LINK WHATSAPP
// ============================

function crearLinkWhatsApp(producto) {
  const mensaje = `${MENSAJE_BASE} ${producto.nombre} (S/ ${producto.precio})`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;
}


// ============================
// RENDER PRODUCTOS
// ============================

function renderProductos(lista) {
  if (!contenedor) return;

  contenedor.innerHTML = "";

  lista.forEach(producto => {
    const card = document.createElement("div");
    card.classList.add("producto-card");

    card.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <h3>${producto.nombre}</h3>
      <p class="descripcion">${producto.descripcion}</p>
      <p class="precio">S/ ${producto.precio}</p>
      <a href="${crearLinkWhatsApp(producto)}" target="_blank" class="btn-comprar">
        Comprar por WhatsApp
      </a>
    `;

    contenedor.appendChild(card);
  });

  activarAnimaciones();
}


// ============================
// FILTROS
// ============================

botonesFiltro.forEach(boton => {
  boton.addEventListener("click", () => {
    const categoria = boton.dataset.categoria;

    if (categoria === "todos") {
      renderProductos(productos);
      return;
    }

    const filtrados = productos.filter(
      producto => producto.categoria === categoria
    );

    renderProductos(filtrados);
  });
});


// ============================
// ANIMACIONES
// ============================

function activarAnimaciones() {
  const cards = document.querySelectorAll(".producto-card");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  });

  cards.forEach(card => observer.observe(card));
}


// ============================
// INICIALIZAR
// ============================

document.addEventListener("DOMContentLoaded", () => {
  renderProductos(productos);
});
