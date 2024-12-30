
let talleres = [
    {
    "id" : 1,
    "name" : "Taller Expresion Creativa +7",
    "price" : 33.99,
    "description" : "Descubre el mundo del arte de manera divertida y ludica.Fomentamos la creatividad a traves de dinamicas y juegos creativos, culminando en una exposicion de fin de curso"
    },
    {
    "id" : 2,
    "name" : "Taller Comics y Manga",
    "price" : 33.99,
    "description" : "Descubriremos la anatomia y expresiones para el dibujo de personales. Aprenderemos la tecniica Manga y Comics"
    },
    {
    "id" : 3,
    "name" : "Kinder Creativo",
    "price" : 35.99,
    "description" : "Un taller 100% exploratorio.Dibujo y tecnicas mixtas"
    },
    {
    "id" : 4,
    "name" : "Pinta tu Mate - Pinta tu cuadro",
    "price" : 50.99,
    "description" : "Es ideal para ofrecer en Empresas y espacios gastronomicos. Costo por participante, cada uno decorara su propio mate de madera de calden, traido desde Cordoba. Y los cuadros sobre un MDF de 20x30 cm"
    }
];

let contenedortalleres = document.getElementById('talleres');


let contenedorIndividual = document.createElement('div');


contenedorIndividual.classList.add('card_container');


document.addEventListener("DOMContentLoaded", (event) => {
    talleres.forEach(producto => {
    contenedorIndividual.innerHTML += `
        <div class="card">
        <form id="my_form${producto.id}">
        <div>
            <output id="nombre" name="nombre">${producto.name}</output>
            <br>
            <output id="precio" name="precio">${producto.price}</output>
            <br>
            <button id="btnMasInfo${producto.id}" class="button" onclick="masInfo(${producto.id})">+ info</button>
            <div id="botonera${producto.id}">
            <button onclick="comprar(${producto.id})" class="button" value="Comprar">Comprar</button>
            </div>  
            <div>
            <output id="description${producto.id}" class="description">
                ${producto.description}
                <br>
                <button onclick="comprar(${producto.id})" class="button" value="Comprar">Comprar</button>
        </output>
        </div>
        </div>
        </div>
    `;
    contenedortalleres.append(contenedorIndividual);
    });
});


function masInfo(id) {
    event.preventDefault();
    let idx = id.toString();

    let param = 'description' + idx;
    let btnMasInfo = 'botonera' + idx;
    let btnComprar = 'btnMasInfo' + idx;
    let btnComprarDesc = 'comprar' + idx;


    document.getElementById(param).style.display = "block";
    document.getElementById(btnComprar).style.display = "none";
    document.getElementById(btnMasInfo).style.display = "none";
}

function comprar(id) {
    
    let idx = id.toString();
    let param = 'my_form' + idx;
    let form = document.getElementById(param);
    console.info('Tipo ' + typeof form);
    const nombre = form.elements['nombre'].value;
    const precio = form.elements['precio'].value; 
    
    console.log("Cantidad de elementos: "+ form.length);
    console.log("Nombre " + nombre);
    console.log("precio2 " + precio);


    let pedido = {
    "id" : Date.now(),
    "productoId" : idx,
    "name" : nombre,
    "price" : precio,
    "amount" : 1
    }

    if (typeof(Storage) !== "undefined") {
    localStorage.setItem(pedido.id, JSON.stringify(pedido));
    } 
    
    return false;
}



function insertDOM() {
    
    talleres.forEach(producto => {
    contenedorIndividual.innerHTML += `
        <div class="card">
        <form id="my_form${producto.id}">
        <div>
            <output id="nombre" name="nombre">${producto.name}</output>
            <br>
            <output id="precio" name="precio">${producto.price}</output>
            <br>
            <button id="btnMasInfo${producto.id}" class="button" onclick="masInfo(${producto.id})">+ info</button>
            <div id="botonera${producto.id}">
            <button onclick="comprar(${producto.id})" class="button" value="Comprar">Comprar</button>
            </div>  
            <div>
            <output id="description${producto.id}" class="description">
                ${producto.description}
                <br>
                <button id="comprar${producto.id}" class="button" type="submit" value="Comprar">
            </output>
            </div>
        </div>
        </div>
    `;
    contenedortalleres.append(contenedorIndividual);
    });
}


let lista = document.getElementById("listaDeseados");
Object.keys(localStorage).forEach(function(key){
    lista.innerHTML += localStorage.getItem(key);
});

function eliminarPedidos() {
    localStorage.clear();
}