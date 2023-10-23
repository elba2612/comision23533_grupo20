const busqueda = document.getElementById('busqueda');
busqueda.addEventListener('input', () => {
    let cuadro = document.getElementsByClassName('caja-busqueda');
    cuadro[0].classList.toggle('visible', busqueda.value.length != 0)
    cuadro[0].classList.toggle('para-caja', busqueda.value.length != 0)
})

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.getElementById('menu-hamburguesa').addEventListener('click', () => {
    
    



})

document.body.addEventListener('click', function (e) {
    let ids=[];
    ids.push(e.target);
    ids.push(e.target.parentNode);
    ids.push(e.target.parentNode.parentNode);
    let esId=false;
    let esClass=false;
    for (const id of ids) {
        if (id.id=='menu-hamburguesa'){
            esId=true;
        }
        if (id.classList&&id.classList.contains('boton-nav')){
            esClass=true;
        }
    }
    let nav = document.getElementsByTagName('nav');
    let menu = document.getElementsByClassName('menu');
    if ((!esClass && menu[0].classList.contains('visible'))||(esId && menu[0].classList.contains('visible'))) {
        menu[0].classList.remove('visible');
        nav[0].classList.remove('para-hamburguesa');
        menu[0].style.position = 'absolute';
        menu[0].style.display = 'none';
    } else if (esId && !menu[0].classList.contains('visible')) {
        menu[0].style.display = 'flex';
        sleep(50).then(() => {
            nav[0].classList.toggle('para-hamburguesa');
            menu[0].classList.add('visible');
            menu[0].style.position = 'static';
        })
    } 
});