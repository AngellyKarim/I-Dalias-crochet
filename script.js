<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>I’Dalias | Carteras Tejidas a Mano</title>
  <meta name="description" content="Carteras tejidas a mano en Perú. Diseños únicos, elegantes y artesanales.">

  <!-- Favicon -->
  <link rel="icon" href="idalias-icono.jpg">

  <!-- CSS -->
  <link rel="stylesheet" href="estilos.css">

  <!-- Fuente -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>

<body>

  <!-- ================= HEADER ================= -->
  <header class="header">
    <div class="container header-content">

      <!-- Logo principal -->
      <img src="idalias-logo.jpg" alt="Logo I'Dalias" class="logo">

      <div class="header-text">
        <h1>I’Dalias</h1>
        <p>Carteras tejidas a mano con elegancia ✨</p>
      </div>

    </div>
  </header>


  <!-- ================= HERO ================= -->
  <section class="hero">
    <div class="container hero-content">
      <h2>Accesorios hechos con amor y detalle</h2>
      <p>
        Descubre carteras únicas, tejidas a mano, diseñadas para resaltar tu estilo
        con un toque artesanal y sofisticado.
      </p>
    </div>
  </section>


  <!-- ================= FILTROS ================= -->
  <section class="filtros container">
    <button class="filtro-btn activo" data-categoria="todos">Todas</button>
    <button class="filtro-btn" data-categoria="clasicas">Clásicas</button>
    <button class="filtro-btn" data-categoria="coloridas">Coloridas</button>
  </section>


  <!-- ================= PRODUCTOS ================= -->
  <main class="container">
    <div id="contenedor-productos" class="grid-productos"></div>
  </main>


  <!-- ================= BENEFICIOS ================= -->
  <section class="beneficios">
    <div class="container beneficios-grid">

      <div class="beneficio">
        <h3>🧶 Hecho a mano</h3>
        <p>Cada cartera es tejida cuidadosamente con atención al detalle.</p>
      </div>

      <div class="beneficio">
        <h3>✨ Diseño único</h3>
        <p>Piezas exclusivas que resaltan tu estilo personal.</p>
      </div>

      <div class="beneficio">
        <h3>💖 Calidad premium</h3>
        <p>Materiales seleccionados para durabilidad y elegancia.</p>
      </div>

    </div>
  </section>


  <!-- ================= SOBRE LA MARCA ================= -->
  <section class="sobre">
    <div class="container sobre-content">
      <h2>Sobre I’Dalias</h2>
      <p>
        I’Dalias nace del amor por lo artesanal y el deseo de crear piezas únicas que acompañen tu estilo.
        Cada cartera está tejida a mano con dedicación, buscando transmitir elegancia, calidez y autenticidad.
      </p>
    </div>
  </section>


  <!-- ================= FOOTER ================= -->
  <footer class="footer">
    <div class="container footer-content">

      <img src="idalias-logo.jpg" alt="Logo I'Dalias" class="logo-footer">

      <p>© 2026 I’Dalias</p>
      <p>Hecho a mano en Perú 🇵🇪</p>
      <p>Pedidos por WhatsApp 💬</p>

    </div>
  </footer>


  <!-- ================= BOTÓN WHATSAPP ================= -->
  <a 
    href="https://wa.me/51994098296?text=Hola%20quiero%20información%20sobre%20las%20carteras%20I’Dalias"
    class="whatsapp-float"
    target="_blank"
  >
    💬
  </a>


  <!-- JS -->
  <script src="script.js"></script>

</body>
</html>
