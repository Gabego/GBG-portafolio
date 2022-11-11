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



const activeDM = document.querySelector('.btn__dm');
const fondoDM = document.querySelector('.particles__normal');
const fondoHD = document.querySelector('.home__data');
const fondoACT = document.querySelector('.about__container-text');
const btnDM = document.querySelector('.btn__dm-text');
const fondoTC1 = document.querySelector('.tecnologias1__container')
const fondoTC2 = document.querySelector('.tecnologias2__container')
const fondoTC3 = document.querySelector('.tecnologias3__container')
const fondoPC = document.querySelector('.portafolio__container')
const fondoCC = document.querySelector('.contacto__container')
const fondoIB = document.querySelector('.idiomas__box')




activeDM.addEventListener('click', (e) => {
    e.preventDefault();
    btnDM.classList.toggle('btn__dm-text-dm');
    fondoDM.classList.toggle('particles__dm');
    fondoHD.classList.toggle('dark__mode');
    fondoACT.classList.toggle('dark__mode');
    fondoTC1.classList.toggle('tecno__slider-dm');
    fondoTC2.classList.toggle('tecno__slider-dm');
    fondoTC3.classList.toggle('tecno__slider-dm');
    fondoPC.classList.toggle('portafolio__container-dm');
    fondoCC.classList.toggle('contacto__container-dm');
    fondoIB.classList.toggle('idiomas__box-dm');


})