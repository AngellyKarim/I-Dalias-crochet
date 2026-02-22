// ================================
// CONFIGURACIÓN GENERAL
// ================================

const WHATSAPP_NUMBER = "51994098296";

const MENSAJE_BASE =
  "Hola 😊 me encantó esta cartera de I'Dalias y quiero más información:";


// ================================
// LISTA DE PRODUCTOS
// ================================

const productos = [
  {
    id: 1,
    nombre: "Valentina",
    precio: 219,
    imagen: "cartera1.jpg",
    categoria: "clasicas",
    descripcion: "Elegante, fuerte y sofisticada."
  },
  {
    id: 2,
    nombre: "Lía Mini",
    precio: 169,
    imagen: "cartera2.jpg",
    categoria: "clasicas",
    descripcion: "Dulce, delicada y moderna."
  },
  {
    id: 3,
    nombre: "Alma Bohemia",
    precio: 239,
    imagen: "cartera3.jpg",
    categoria: "coloridas",
    descripcion: "Artística, vibrante y única."
  },
  {
    id: 4,
    nombre: "Clara",
    precio: 199,
    imagen: "cartera4.jpg",
    categoria: "clasicas",
    descripcion: "Minimalista, suave y versátil."
  },
  {
    id: 5,
    nombre: "Mía Sol",
    precio: 189,
    imagen: "cartera5.jpg",
    categoria: "coloridas",
    descripcion: "Luminosa, alegre y juvenil."
  }
];


// ================================
// REFERENCIAS DOM
// ================================

const contenedor = document.getElementById("contenedor-productos");
const botonesFiltro = document.querySelectorAll(".filtro-btn");
const btnVer = document.getElementById("btn-ver");
const whatsappFijo = document.getElementById("whatsapp-fijo");
const ctaWhatsapp = document.getElementById("cta-whatsapp");
const contactoWhatsapp = document.getElementById("contacto-whatsapp");


// ================================
// CREAR LINK WHATSAPP
// ================================

function crearLinkWhatsApp(producto) {
  const mensaje = `${MENSAJE_BASE} ${producto.nombre} (S/ ${producto.precio})`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;
}


// ================================
// RENDER DE PRODUCTOS
// ================================

function renderProductos(lista) {
  if (!contenedor) return;

  contenedor.innerHTML = "";

  lista.forEach(producto => {
    const card = document.createElement("div");
    card.classList.add("producto-card");

    card.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <div class="producto-info">
        <h3>${producto.nombre}</h3>
        <p>${producto.descripcion}</p>
        <p class="precio">S/ ${producto.precio}</p>
        <a href="${crearLinkWhatsApp(producto)}" target="_blank" class="btn-comprar">
          Pedir por WhatsApp
        </a>
      </div>
    `;

    contenedor.appendChild(card);
  });

  activarAnimaciones();
}


// ================================
// FILTROS
// ================================

botonesFiltro.forEach(boton => {
  boton.addEventListener("click", () => {

    botonesFiltro.forEach(btn => btn.classList.remove("activo"));
    boton.classList.add("activo");

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


// ================================
// SCROLL SUAVE
// ================================

if (btnVer) {
  btnVer.addEventListener("click", () => {
    document.getElementById("productos")
      .scrollIntoView({ behavior: "smooth" });
  });
}


// ================================
// LINKS GENERALES WHATSAPP
// ================================

const mensajeGeneral =
  "Hola 😊 quiero información sobre las carteras de I'Dalias";

const linkGeneral =
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensajeGeneral)}`;

if (whatsappFijo) whatsappFijo.href = linkGeneral;
if (ctaWhatsapp) ctaWhatsapp.href = linkGeneral;
if (contactoWhatsapp) contactoWhatsapp.href = linkGeneral;


// ================================
// ANIMACIÓN APARICIÓN PRODUCTOS
// ================================

function activarAnimaciones() {
  const cards = document.querySelectorAll(".producto-card");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => observer.observe(card));
}


// ================================
// EFECTO HEADER SCROLL
// ================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("header-scroll");
  } else {
    header.classList.remove("header-scroll");
  }
});


// ================================
// INICIALIZAR
// ================================

document.addEventListener("DOMContentLoaded", () => {
  renderProductos(productos);
});
