const busqueda = document.getElementById('busqueda');
busqueda.addEventListener('input', () => {
    let cuadro = document.getElementsByClassName('caja-busqueda');
    cuadro[0].classList.toggle('abierto', busqueda.value.length != 0)
})