/* =====================================================
   SCRIPT PRINCIPAL — WEB SERVICIO EJECUTIVO
   Autor: configuración completa
   ===================================================== */

/* =========================
   1️⃣ MENÚ RESPONSIVE
   ========================= */

const menuToggle = document.querySelector("#menu-toggle");
const navMenu = document.querySelector("#nav-menu");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

/* Cerrar menú al hacer click en un enlace (móvil) */
const navLinks = document.querySelectorAll("#nav-menu a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});


/* =========================
   2️⃣ SCROLL SUAVE
   ========================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});


/* =========================
   3️⃣ HEADER CAMBIO EN SCROLL
   ========================= */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});


/* =========================
   4️⃣ ANIMACIONES AL HACER SCROLL
   ========================= */

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15
  }
);

document.querySelectorAll(".animate").forEach(el => observer.observe(el));


/* =========================
   5️⃣ VALIDACIÓN FORMULARIO
   ========================= */

const form = document.querySelector("#contact-form");

if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const phone = document.querySelector("#phone").value.trim();
    const message = document.querySelector("#message").value.trim();

    if (name === "" || phone === "" || message === "") {
      alert("Por favor completa todos los campos.");
      return;
    }

    if (!/^[0-9+ ]+$/.test(phone)) {
      alert("Ingresa un número de teléfono válido.");
      return;
    }

    alert("Mensaje enviado correctamente ✅");
    form.reset();
  });
}


/* =========================
   6️⃣ BOTÓN WHATSAPP DINÁMICO
   ========================= */

const whatsappBtn = document.querySelector("#whatsapp-btn");

if (whatsappBtn) {
  whatsappBtn.addEventListener("click", () => {
    const phoneNumber = "51994098296"; // Cambia si deseas
    const message = encodeURIComponent(
      "Hola, quiero información sobre el servicio de movilidad ejecutiva."
    );

    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");
  });
}


/* =========================
   7️⃣ CAMBIO AUTOMÁTICO DE LOGO (OPCIONAL)
   Si el header tiene fondo oscuro o claro
   ========================= */

const logo = document.querySelector("#logo");

function updateLogo() {
  if (!logo) return;

  if (window.scrollY > 50) {
    logo.src = "img/logo-negro.jpg"; // cuando fondo es claro
  } else {
    logo.src = "img/logo-blanco.jpg"; // cuando fondo es oscuro
  }
}

window.addEventListener("scroll", updateLogo);


/* =========================
   8️⃣ BOTÓN VOLVER ARRIBA
   ========================= */

const backToTop = document.querySelector("#back-to-top");

if (backToTop) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTop.classList.add("visible");
    } else {
      backToTop.classList.remove("visible");
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}


/* =========================
   9️⃣ PRELOADER (SI LO USAS)
   ========================= */

window.addEventListener("load", () => {
  const preloader = document.querySelector("#preloader");
  if (preloader) {
    preloader.style.opacity = "0";
    setTimeout(() => {
      preloader.style.display = "none";
    }, 500);
  }
});


/* =========================
   🔟 CONSOLA DE CONTROL
   ========================= */

console.log("✅ Script cargado correctamente");
console.log("🚗 Sistema de web ejecutiva activo");
