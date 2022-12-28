// const main = document.querySelector('main');
const btnMenu = document.querySelector('.btnMenu');
const btnMenuMovil = document.querySelector('.btnMenu-movil');
const body = document.getElementById('body');
const sidebar = document.querySelector('.sidebar');
const searchBtn = document.querySelector('.nav-search');
const searchBtnMovil = document.querySelector('.nav-search-movil');
const search = document.querySelector('.search');
const searchMovil = document.querySelector('.searchMovil')
const whereiam = document.querySelector('.whereiam');
const list = document.querySelectorAll('.list');
const where1 = document.querySelector('.where1');
const where2 = document.querySelector('.where2');
const where3 = document.querySelector('.where3');
const where4 = document.querySelector('.where4');
const where5 = document.querySelector('.where5');
const where6 = document.querySelector('.where6');
const where7 = document.querySelector('.where7');
const where9 = document.querySelector('.where9');
const where10 = document.querySelector('.where10');
const where11 = document.querySelector('.where11');

let menuNormal = () => {
    if (window.innerWidth > 668) {


        let activate = () => {
            if (window.innerWidth > 668) {
                body.classList.toggle("body_move");
                btnMenu.classList.add("toggle");
                sidebar.classList.toggle("sidebar_move");
                console.log('activate()');
            }
        }
        let activeSearch = () => {
            if (window.innerWidth > 668) {
                sidebar.classList.remove("sidebar_move");
                body.classList.add("body_move");
            }
        }
        console.log('menuNormal() Load')
    }
}

if (window.innerWidth > 668) {


    let activate = () => {
        if (window.innerWidth > 668) {
            body.classList.toggle("body_move");
            btnMenu.classList.add("toggle");
            sidebar.classList.toggle("sidebar_move");
            console.log('activate()');
        }
    }
    let activeSearch = () => {
        if (window.innerWidth > 668) {
            sidebar.classList.remove("sidebar_move");
            body.classList.add("body_move");
        }
    }
    // searchBtn.addEventListener("click", activeSearch);
    // btnMenu.addEventListener("click", activate);
    console.log('menuNormal() Load')
}
// change the innerText to the name that you want
let pipe = () => {
    if (where1.classList.contains("active")) {
        whereiam.innerHTML = 'Dashboard';
    } else if (where2.classList.contains("active")) {
        whereiam.innerHTML = 'Home';
    } else if (where3.classList.contains("active")) {
        whereiam.innerText = 'Notifications';
    } else if (where4.classList.contains("active")) {
        whereiam.innerText = 'Settings';
    } else if (where4.classList.contains("active")) {
        whereiam.innerText = 'Settings';
    } else if (where5.classList.contains("active")) {
        whereiam.innerText = 'Settings';
    } else if (where6.classList.contains("active")) {
        whereiam.innerText = 'Settings';
    } else if (where7.classList.contains("active")) {
        whereiam.innerText = 'Settings';
    } else if (where8.classList.contains("active")) {
        whereiam.innerText = 'Settings';
    } else if (where9.classList.contains("active")) {
        whereiam.innerText = 'Settings';
    } else if (where10.classList.contains("active")) {
        whereiam.innerText = 'Settings';
    } else if (where11.classList.contains("active")) {
        whereiam.innerText = 'Settings';
    }

    else {
        console.log('error');
    }
}

function activeLink() {
    list.forEach((item) =>
        item.classList.remove('active'));
    this.classList.add('active');
    pipe();
}

list.forEach((item) =>
    item.addEventListener('click', activeLink));



let movilMenu = () => {
    if (window.innerWidth < 668) {
        // let resetMovilMenuResize = ()=>{
        //     sidebar.classList.remove("movil_menu");
        //     sidebar.classList.add("sidebar_move");
        //     body.classList.remove("body_move");
        //     searchBtn.classList.remove("active");
        //     console.log('ResetMovilMenu')

        // }
        let activateMovil = () => {
            sidebar.classList.toggle("movil_menu");
            sidebar.classList.add("sidebar_move");
            searchBtnMovil.classList.remove("active");
            console.log(activateMovil);

        }
        let activeSearchMovil = () => {
            sidebar.classList.add("sidebar_move");
            searchBtn.classList.add('active');
            searchMovil.classList.toggle('active');
            body.classList.remove("body_move");
            console.log('Movils');
        }
    }
    console.log('movilMenu: Load');
}
if (window.innerWidth < 668) {
    let activateMovil = () => {
        sidebar.classList.toggle("movil_menu");
        sidebar.classList.add("sidebar_move");
        searchBtnMovil.classList.remove("active");
        console.log(activateMovil);

    }
    let activeSearchMovil = () => {
        sidebar.classList.add("sidebar_move");
        searchBtnMovil.classList.add('active');
        searchMovil.classList.toggle('active');
        body.classList.remove("body_move");
        console.log('Movils');
    }
}

function resizeListener() {
    if (window.innerWidth < 668) {
        // let activateMovil = () => {
        //     sidebar.classList.toggle("movil_menu");
        //     sidebar.classList.add("sidebar_move");
        //     searchBtn.classList.remove("active");
        //     console.log(activateMovil);

        // }
        let resetMovilMenuResize = () => {
            sidebar.classList.remove("movil_menu");
            sidebar.classList.add("sidebar_move");
            body.classList.remove("body_move");
            searchBtn.classList.remove("active");
            searchBtnMovil.classList.remove('active');
            searchMovil.classList.toggle('active');
            console.log('ResetMovilMenu');


        }
        movilMenu()
        resetMovilMenuResize()
        // movilMenu();
    } else {
        menuNormal();
    }
}
if (window.innerWidth > 668) {
    menuNormal()
} else {
    movilMenu()
}

window.addEventListener("resize", resizeListener);
let activateMovil = () => {
    sidebar.classList.toggle("movil_menu");
    sidebar.classList.add("sidebar_move");
    searchBtnMovil.classList.remove("active");
    console.log(activateMovil);

}
btnMenuMovil.addEventListener("click", activateMovil);

let activate = () => {
    if (window.innerWidth > 668) {
        body.classList.toggle("body_move");
        btnMenu.classList.add("toggle");
        sidebar.classList.toggle("sidebar_move");
        console.log('activate()');
    }
}
let activeSearch = () => {
    sidebar.classList.remove("sidebar_move");
    body.classList.add("body_move");
    console.log('activeSearch desktop')
}
btnMenu.addEventListener("click", activate);
searchBtn.addEventListener("click", activeSearch);

    let activeSearchMovil = () => {
        searchBtnMovil.classList.add('active');
        searchMovil.classList.toggle('active');
        body.classList.remove("body_move");
        console.log('Movils');
    }
searchBtnMovil.addEventListener("click", activeSearchMovil);