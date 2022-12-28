// const main = document.querySelector('main');
const btnMenu = document.querySelector('.btnMenu');
const btnMenuMovil = document.querySelector('.btnMenu-movil');
const body = document.getElementById('body');
const sidebar = document.querySelector('.sidebar');
const searchBtn = document.querySelector('.nav-search');
const search = document.querySelector('.search');
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
let activate = () => {
    if (window.innerWidth > 668) {
        // main.classList.toggle("body_move");
        body.classList.toggle("body_move");
        btnMenu.classList.toggle("toggle");
        sidebar.classList.toggle("sidebar_move");
        // console.log("Works!!");
        console.log('activate()')
    }
}
let activeSearch = () => {
    sidebar.classList.remove("sidebar_move");
    body.classList.add("body_move");
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


searchBtn.addEventListener("click", activeSearch);


if (window.innerWidth < 668) {
    let activate = () => {
        sidebar.classList.toggle("movil_menu");
        searchBtn.classList.remove("active");
        console.log('pipe3')

    }

    let activeSearch = () => {
        sidebar.classList.add("sidebar_move");
        searchBtn.classList.add('active');
        search.classList.toggle('active');
        body.classList.remove("body_move");
        console.log('activatesearch < 668')

    }

    searchBtn.addEventListener("click", activeSearch);

    btnMenuMovil.addEventListener("click", activate);
}


if (window.innerWidth > 920) {
    activate()
}

if (window.innerWidth < 668) {
    let activate = () => {
        console.log('ssss')
    }
    activate()
}

function resizeListener() {
    if (window.innerWidth < 668) {
        let activate = () => {
            sidebar.classList.toggle("movil_menu");
            searchBtn.classList.remove("active");
            console.log('pipe')
            activate()
        }
    }

    // aquí empieza el normal

    if (window.innerWidth < 668) {
    //     let activate = () => {
    //     if (window.innerWidth < 668) {
    //         // main.classList.toggle("body_move");
    //         body.classList.toggle("body_move");
    //         btnMenu.classList.add("toggle");
    //         sidebar.classList.toggle("sidebar_move");
    //         console.log("Works!!");
    //     }
    // }

    
        let activeSearch = () => {
            sidebar.classList.add("sidebar_move");
            searchBtn.classList.remove('active');
            search.classList.toggle('active');
            body.classList.remove("body_move");
            console.log('activatesearch < 668');
        }
    
        activeSearch()

        // searchBtn.addEventListener("click", activeSearch);

        // btnMenuMovil.addEventListener("click", activate);
    } else {
        // if (window.innerWidth < 668) {
        //     let activate = () => {
        //         sidebar.classList.toggle("movil_menu");
        //         searchBtn.classList.remove("active");
        //         console.log('pipe')
        
        //     }
        // }
        let activate = () => {
            if (window.innerWidth > 668) {
                // main.classList.toggle("body_move");
                body.classList.toggle("body_move");
                btnMenu.classList.toggle("toggle");
                sidebar.classList.toggle("sidebar_move");
                // console.log("Works!!");
                console.log('activate()')
            }
        }
        // let activeSearch = () => {
        //     sidebar.classList.add("sidebar_move");
        //     body.classList.remove("body_move");
        // }

    }

    // if (window.innerWidth < 668) {
    //     // main.classList.toggle("body_move");
    //     body.classList.toggle("body_move");
    //     btnMenu.classList.toggle("toggle");
    //     sidebar.classList.toggle("sidebar_move");
    //     // console.log("Works!!");
    //     console.log('Resize Works!!')
    // }
}

window.addEventListener("resize", resizeListener);
btnMenu.addEventListener("click", activate);

btnMenuMovil.addEventListener("click", activate);