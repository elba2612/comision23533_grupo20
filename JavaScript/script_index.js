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
    let ids = [];
    ids.push(e.target);
    ids.push(e.target.parentNode);
    ids.push(e.target.parentNode.parentNode);
    let esId = false;
    let esClass = false;
    for (const id of ids) {
        if (id.id == 'menu-hamburguesa') {
            esId = true;
        }
        if (id.classList && id.classList.contains('boton-nav')) {
            esClass = true;
        }
    }
    let nav = document.getElementsByTagName('nav');
    let menu = document.getElementsByClassName('menu');
    if ((!esClass && menu[0].classList.contains('visible')) || (esId && menu[0].classList.contains('visible'))) {
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


// const params = {
//     access_key: ''
// }

// fetch('http://api.marketstack.com/v1/eod?access_key=' + params.access_key + '&symbols=AAPL').then(response => {
//     const apiResponse = response.formData;
//     console.log(apiResponse)
// }).catch(err => console.log(err))

// Obtener una referencia al iframe
const iframe = document.getElementById('responsive-iframe');

// Función para cambiar la fuente del iframe
function changeVideoSource() {
    const screenWidth = window.innerWidth;

    if (screenWidth < 768) {
        // Dispositivo móvil
        iframe.src = 'Sources/registrateVertical FULL (375 x 667 px).mp4';
    } else if (screenWidth >= 768 && screenWidth < 1024) {
        // Tableta
        iframe.src = 'Sources/registrateHorizontal FULL (1366 x 768 px).mp4';
    } else {
        // Pantalla grande (PC)
        iframe.src = 'Sources/registrateHorizontal FULL (1440 x 900 px).mp4';
    }
}

// Ejecutar la función al cargar la página y en cambios de tamaño de ventana
window.addEventListener('load', changeVideoSource);
window.addEventListener('resize', changeVideoSource);
