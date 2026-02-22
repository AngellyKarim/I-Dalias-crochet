// ====== PRODUCTOS ======
const productos = [
  {
    id: 1,
    nombre: "Cartera Negra Elegante",
    precio: 219,
    imagen: "cartera1.jpg",
    categoria: "clasicas",
    descripcion: "Elegancia atemporal tejida a mano, ideal para cualquier ocasión."
  },
  {
    id: 2,
    nombre: "Cartera Rosa Mini",
    precio: 169,
    imagen: "cartera2.jpg",
    categoria: "clasicas",
    descripcion: "Pequeña y encantadora, perfecta para llevar lo esencial."
  },
  {
    id: 3,
    nombre: "Cartera Multicolor",
    precio: 239,
    imagen: "cartera3.jpg",
    categoria: "coloridas",
    descripcion: "Diseño vibrante y único que resalta el trabajo artesanal."
  },
  {
    id: 4,
    nombre: "Cartera Beige Minimal",
    precio: 199,
    imagen: "cartera4.jpg",
    categoria: "clasicas",
    descripcion: "Minimalista y versátil, combina con todo."
  },
  {
    id: 5,
    nombre: "Cartera Amarilla",
    precio: 189,
    imagen: "cartera5.jpg",
    categoria: "coloridas",
    descripcion: "Alegre y moderna, ideal para destacar tu estilo."
  }
];

// ====== CONTENEDOR ======
const contenedor = document.getElementById("contenedor-productos");
const botonesFiltro = document.querySelectorAll(".filtro-btn");

// ====== RENDER PRODUCTOS ======
function renderProductos(lista) {
  contenedor.innerHTML = "";

  lista.forEach(producto => {
    const card = document.createElement("div");
    card.classList.add("producto-card");

    card.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <h3>${producto.nombre}</h3>
      <p class="descripcion">${producto.descripcion}</p>
      <p class="precio">S/ ${producto.precio}</p>
      <button class="btn-comprar" data-id="${producto.id}">
        Comprar por WhatsApp
      </button>
    `;

    contenedor.appendChild(card);
  });
}

// ====== FILTROS ======
botonesFiltro.forEach(boton => {
  boton.addEventListener("click", () => {
    const categoria = boton.dataset.categoria;

    if (categoria === "todos") {
      renderProductos(productos);
    } else {
      const filtrados = productos.filter(
        p => p.categoria === categoria
      );
      renderProductos(filtrados);
    }
  });
});

// ====== WHATSAPP ======
contenedor.addEventListener("click", e => {
  if (e.target.classList.contains("btn-comprar")) {
    const id = e.target.dataset.id;
    const producto = productos.find(p => p.id == id);

    const mensaje = `Hola, quiero comprar la ${producto.nombre} por S/ ${producto.precio} 🧶`;

    const url = `https://wa.me/51994098296?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  }
});

// ====== ANIMACIÓN AL HACER SCROLL ======
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

document.querySelectorAll(".producto-card").forEach(el => {
  observer.observe(el);
});

// ====== INICIALIZAR ======
document.addEventListener("DOMContentLoaded", () => {
  renderProductos(productos);
});
