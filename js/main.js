//-- JavaScript para Menu en mobile --//
/*-
const header = document.getElementById('header')
const menu = document.getElementById('nav-menu')

header.addEventListener('click', e => {
    const target = e.target
    if (e.target.closest('.btn__open')) {
        menu.classList.add('show__menu')
    }
    
    if (e.target.closest('.btn__close')) {
        menu.classList.remove('show__menu')
    }

    if (e.target.closest('.nav__link')) {
        menu.classList.remove('show__menu')
    }

})
-*/

//-- JavaScript ventana Modal para MENU NAVEGACION --//
const openMenu = document.querySelector('.open__menu-modal');
const menu = document.querySelector('.modal__menu');
const closeMenu = document.querySelector('.modal__menu-close');
const header = document.getElementById('header')

openMenu.addEventListener('click', (e) => {
    e.preventDefault();
    menu.classList.add('modal--menu-show');
})

closeMenu.addEventListener('click', (e) => {
    e.preventDefault();
    menu.classList.remove('modal--menu-show');
})

header.addEventListener('click', e => {
     if (e.target.closest('.nav__link')) {
        menu.classList.remove('modal--menu-show')
    }

})


//-- JavaScript ventana Modal para Marconi --//
const openModal = document.querySelector('.open__marconi-modal');
const modal = document.querySelector('.modal__marconi');
const closeModal = document.querySelector('.modal__marconi-close');

openModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('modal--marconi-show');
})

closeModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('modal--marconi-show');
})

//-- JavaScript ventana Modal para Ericsson --//
const openModal2 = document.querySelector('.open__ericsson-modal');
const modal2 = document.querySelector('.modal__ericsson');
const closeModal2 = document.querySelector('.modal__ericsson-close');

openModal2.addEventListener('click', (e) => {
    e.preventDefault();
    modal2.classList.add('modal--ericsson-show');
})

closeModal2.addEventListener('click', (e) => {
    e.preventDefault();
    modal2.classList.remove('modal--ericsson-show');
})

//-- JavaScript ventana Modal para Lenguajes de Programacion --//
const openModallen = document.querySelector('.open__lenguajes-modal');
const modallen = document.querySelector('.modal__lenguajes');
const closeModallen = document.querySelector('.modal__lenguajes-close');

openModallen.addEventListener('click', (e) => {
    e.preventDefault();
    modallen.classList.add('modal--lenguajes-show');
})

closeModallen.addEventListener('click', (e) => {
    e.preventDefault();
    modallen.classList.remove('modal--lenguajes-show');
})

//-- JavaScript ventana Modal para Sistemas Operativos --//
const openModalso = document.querySelector('.open__so-modal');
const modalso = document.querySelector('.modal__so');
const closeModalso = document.querySelector('.modal__so-close');

openModalso.addEventListener('click', (e) => {
    e.preventDefault();
    modalso.classList.add('modal--so-show');
})

closeModalso.addEventListener('click', (e) => {
    e.preventDefault();
    modalso.classList.remove('modal--so-show');
})

//-- JavaScript ventana Modal para Programas de Diseño --//
const openModaldiseño = document.querySelector('.open__diseño-modal');
const modaldiseño = document.querySelector('.modal__diseño');
const closeModaldiseño = document.querySelector('.modal__diseño-close');

openModaldiseño.addEventListener('click', (e) => {
    e.preventDefault();
    modaldiseño.classList.add('modal--diseño-show');
})

closeModaldiseño.addEventListener('click', (e) => {
    e.preventDefault();
    modaldiseño.classList.remove('modal--diseño-show');
})

//-- JavaScript ventana Modal para Idionas --//
const openModali = document.querySelector('.open__idiomas-modal');
const modali = document.querySelector('.modal__idiomas');
const closeModali = document.querySelector('.modal__idiomas-close');

openModali.addEventListener('click', (e) => {
    e.preventDefault();
    modali.classList.add('modal--idiomas-show');
})

closeModali.addEventListener('click', (e) => {
    e.preventDefault();
    modali.classList.remove('modal--idiomas-show');
})