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
    if (!wide.matches) {
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
    }

});

var myHeaders = new Headers();
myHeaders.append("x-access-token", "goldapi-dxjqzrlo8nrtiu-io");
myHeaders.append("Content-Type", "application/json");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};
let apiFuncionando = false;
let res=1000.00

if (apiFuncionando) {
    fetch("https://www.goldapi.io/api/XAU/USD", requestOptions)
        .then(response => response.text())
        .then(result => {
            const res = JSON.parse(result)
            console.log(res)
            document.querySelector('#precio').textContent = `Precio del oro: $${(res.open_price).toFixed(2)} por onza de oro 
            Por lo tanto, el valor del mango es US$${res / 10000}`;
        })
        .catch(error => console.log('error', error));
} else {
    document.querySelector('#precio').textContent = `Precio del oro: $${(res).toFixed(2)} por onza de oro 
    Por lo tanto, el valor del mango es US$${res / 10000}`;
}

 



let wide = window.matchMedia("(min-width: 550px");
function wideSize(wide) {
    let nav = document.getElementsByTagName('nav');
    let menu = document.getElementsByClassName('menu');
    if (wide.matches) {
        menu[0].style.display = 'flex';
        menu[0].classList.add('visible');
        menu[0].style.position = 'static';
    } else {
        menu[0].style.display = 'none';
        menu[0].classList.remove('visible');
        menu[0].style.position = 'absolute';
        nav[0].classList.remove('para-hamburguesa');
    }
}
wideSize(wide);
wide.addListener(wideSize);

// Obtener una referencia al video
const video = document.getElementById('responsive-video');

// Función para cambiar la fuente del video
function changeVideoSource() {
    const screenWidth = window.innerWidth;

    if (screenWidth < 768) {
        // Dispositivo móvil
        video.src = 'Sources/registrateVertical FULL (375 x 667 px).mp4';
    } else if (screenWidth >= 768 && screenWidth < 1024) {
        // Tableta
        video.src = 'Sources/registrateHorizontal FULL (1366 x 768 px).mp4';
    } else {
        // Pantalla grande (PC)
        video.src = 'Sources/registrateHorizontal FULL (1440 x 900 px).mp4';
    }
}

// Ejecutar la función al cargar la página y en cambios de tamaño de ventana
window.addEventListener('load', changeVideoSource);
window.addEventListener('resize', changeVideoSource);

// Deshabilita los controles
video.controls = false;
