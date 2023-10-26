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




const url = 'https://metalpriceapi.p.rapidapi.com/v1/latest?api_key=b2685b54d7c7d0313f1d05e8a8dc7761&base=USD&currencies=XAU';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'e7639d8764msh3ecaf10d2104778p1b0ca0jsnff915543a065',
        'X-RapidAPI-Host': 'metalpriceapi.p.rapidapi.com'
    }
};

getPrice();
async function getPrice() {
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
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