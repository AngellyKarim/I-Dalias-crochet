content
"const productos = [
    {nombre:""Cartera Negra Elegante"", precio:""S/ 160"", img:""img/cartera1.jpg"", categoria:""clasica""},
    {nombre:""Cartera Rosa Mini"", precio:""S/ 120"", img:""img/cartera2.jpg"", categoria:""clasica""},
    {nombre:""Cartera Multicolor"", precio:""S/ 180"", img:""img/cartera3.jpg"", categoria:""colorida""},
    {nombre:""Cartera Beige"", precio:""S/ 150"", img:""img/cartera4.jpg"", categoria:""clasica""},
    {nombre:""Cartera Amarilla"", precio:""S/ 140"", img:""img/cartera5.jpg"", categoria:""colorida""},
];

const contenedor = document.getElementById(""productos"");

function mostrarProductos(lista){
    contenedor.innerHTML = """";
    lista.forEach(p=>{
        contenedor.innerHTML += `
        <div class=""card"" onclick=""abrirModal('${p.img}','${p.nombre}','${p.precio}')"">
            <img src=""${p.img}"">
            <h3>${p.nombre}</h3>
            <p>${p.precio}</p>
        </div>`;
    });
}

mostrarProductos(productos);

function filtrar(cat){
    if(cat===""todos"") mostrarProductos(productos);
    else mostrarProductos(productos.filter(p=>p.categoria===cat));
}

function abrirModal(img,nombre,precio){
    document.getElementById(""modal"").style.display=""flex"";
    document.getElementById(""modal-img"").src=img;
    document.getElementById(""modal-nombre"").textContent=nombre;
    document.getElementById(""modal-precio"").textContent=precio;
}

function cerrarModal(){
    document.getElementById(""modal"").style.display=""none"";
}"
