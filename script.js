'use strict'

let listImage = document.querySelector('#thumbs');
let headImage = document.querySelector('#largeImg');

listImage.addEventListener('click', addImage, true);

function addImage() {
    event.preventDefault();
    if (event.target.tagName === 'IMG') {
    headImage.src = event.target.parentElement.href;
    }
}