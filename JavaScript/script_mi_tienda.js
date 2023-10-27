const section = document.querySelector('.flex-container');

function crearArticulo(img, textoHeader, textoFooter, textoPrecio) {
    let art = document.createElement('article');
    art.classList.add('flex-item');
    art.innerHTML = `<a href=${img}>
            <img src=${img} alt="Imagen de producto">
                <header class="image-header">
                    <h2 class="image-title1">${textoHeader}</h2>
                </header>
                <footer class="image-info">
                    <h2 class="image-title2">${textoFooter}</h2>
                    <p class="image-description">ლ${textoPrecio}</p>
                </footer>
        </a>`
    section.appendChild(art)
}

crearArticulo("../Sources/Bici2.jpeg", "Bicicleta rodado 26", "Casi nueva", "126");
crearArticulo("../Sources/tv.jpg", "Tv 32 pulgadas", "Usada, en buen estado", "150");
crearArticulo("../Sources/YerbaSalus2.jpg", "Yerba Salus 1Kg", "Bulto por 10 paquetes", "30")
const modales = ["modal-agregar", "modal-editar", "modal-eliminar"];
const botones = ["boton-agregar", "boton-editar", "boton-eliminar"];
const spans = document.getElementsByClassName("close");
for (let i = 0; i < spans.length; i++) {
    let modal = document.getElementById(modales[i]);
    let btn = document.getElementById(botones[i]);
    btn.addEventListener('click', () => {
        modal.style.display = "block";
    });
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            cerrarModal();
        }
    })
    spans[i].addEventListener('click', () => {
        cerrarModal();
    })

}
document.body.addEventListener('click', (e) => {
    let ids = [];
    let opciones=document.getElementById('opciones-nav')
    ids.push(e.target);
    ids.push(e.target.parentNode);
    ids.push(e.target.parentNode.parentNode);
    let esId = false;
    for (const id of ids) {
        if (id.id == 'menu-hamburguesa') {
            esId = true;
        }

    }
    if (esId&&opciones.style.display!='block') {
        opciones.style.display = 'block';
    }else if(esId&&opciones.style.display=='block'){
        console.log('esta');
        opciones.style.display='none';
    }else{
        opciones.style.display='none';
    }
})







function cerrarModal() {
    for (let i = 0; i < 3; i++) {
        document.getElementById(modales[i]).style.display = 'none';
    }
}
