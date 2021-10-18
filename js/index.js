'use strict'

const cta = document.getElementById('btn-cta');
const topBar = document.querySelector('.header-top');
const content = document.querySelector('.header__content');

cta.addEventListener('click', () => {

    topBar.style.border = "2px solid white"
    content.style.border = "2px solid white"
})