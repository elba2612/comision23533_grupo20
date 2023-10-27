const section = document.querySelector('.flex-container');

function crearArticulo(img, textoHeader, textoFooter, textoPrecio) {
    let art = document.createElement('article');
    let a = document.createElement('a');
    let header = document.createElement('header');
    let precio = document.createElement('p');
    let footer = document.createElement('footer');
    let imagen = document.createElement('img');
    let imgCont = document.createElement('div');
    let desc=document.createElement('p');
    desc.style.position='relative'
    precio.style.position = 'relative'
    desc.innerHTML=textoFooter
    imgCont.appendChild(imagen);
    imgCont.classList.add('marco')
    console.log(imgCont)
    a.href = img;
    header.innerText = textoHeader;
    header.classList.add('producto')
    imagen.src = img;
    precio.innerHTML = textoPrecio + " mangos";
    footer.style.display='flex';
    footer.appendChild(desc);
    footer.appendChild(precio)
    a.appendChild(imgCont);
    art.appendChild(header);
    art.appendChild(a);
    art.appendChild(footer);
    art.classList.add('flex-item');
    section.appendChild(art)
}

crearArticulo("../Sources/Bici2.jpeg", "Bicicleta rodado 26", "Casi nueva", "126");
crearArticulo("../Sources/tv.jpg","Tv 32 pulgadas","Usada, en buen estado","150");
crearArticulo("../Sources/YerbaSalus2.jpg","Yerba Salus 1Kg","Bulto por 10 paquetes","30")
const modales=["modal-agregar","modal-editar","modal-eliminar"];
const botones = ["boton-agregar", "boton-editar", "boton-eliminar"];
const spans =document.getElementsByClassName("close");
for (let i=0;i<spans.length;i++){
    let modal = document.getElementById(modales[i]);
    let btn = document.getElementById(botones[i]);
    btn.addEventListener('click',()=>{
        modal.style.display = "block";
    });
    window.addEventListener('click', (event)=>{
        if (event.target == modal) {
            cerrarModal();
        }
    })
    spans[i].addEventListener('click',()=>{
        cerrarModal();
    })

}







function cerrarModal(){
    for (let i = 0; i < 3; i++) {
        document.getElementById(modales[i]).style.display = 'none';
    }
}
