const WHATSAPP = "51994098296";

const productos = [
  {
    nombre: "Valentina",
    precio: 219,
    imagen: "cartera1.jpg",
    categoria: "clasicas",
    descripcion: "Elegante, fuerte y sofisticada."
  },
  {
    nombre: "Lía Mini",
    precio: 169,
    imagen: "cartera2.jpg",
    categoria: "clasicas",
    descripcion: "Dulce, delicada y moderna."
  },
  {
    nombre: "Alma Bohemia",
    precio: 239,
    imagen: "cartera3.jpg",
    categoria: "coloridas",
    descripcion: "Artística, vibrante y única."
  },
  {
    nombre: "Clara",
    precio: 199,
    imagen: "cartera4.jpg",
    categoria: "clasicas",
    descripcion: "Minimalista y versátil."
  },
  {
    nombre: "Mía Sol",
    precio: 189,
    imagen: "cartera5.jpg",
    categoria: "coloridas",
    descripcion: "Luminosa, alegre y juvenil."
  }
];

const contenedor = document.getElementById("contenedor-productos");
const botones = document.querySelectorAll(".filtro-btn");

function linkWhatsApp(prod) {
  const mensaje = `Hola 😊 quiero info de la cartera ${prod.nombre} (S/ ${prod.precio})`;
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensaje)}`;
}

function render(lista) {
  contenedor.innerHTML = "";

  lista.forEach(prod => {
    const card = document.createElement("div");
    card.className = "producto-card";

    card.innerHTML = `
      <img src="${prod.imagen}">
      <div class="producto-info">
        <h3>${prod.nombre}</h3>
        <p>${prod.descripcion}</p>
        <p class="precio">S/ ${prod.precio}</p>
        <a href="${linkWhatsApp(prod)}" target="_blank" class="btn-comprar">
          Pedir por WhatsApp
        </a>
      </div>
    `;

    contenedor.appendChild(card);
  });
}

botones.forEach(btn => {
  btn.addEventListener("click", () => {
    botones.forEach(b => b.classList.remove("activo"));
    btn.classList.add("activo");

    const cat = btn.dataset.categoria;
    if (cat === "todos") render(productos);
    else render(productos.filter(p => p.categoria === cat));
  });
});

document.getElementById("btn-ver").addEventListener("click", () => {
  document.getElementById("productos").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("whatsapp-fijo").href =
  `https://wa.me/${WHATSAPP}?text=Hola%20quiero%20información%20de%20las%20carteras`;

render(productos);
