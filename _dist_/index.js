/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
import { registerImage } from './lazy.js';

console.log('Happy hacking :)')
const minimum = 1;
const maximum = 122;

const random = () => Math.floor(Math.random() * (maximum - minimum)) + minimum;
const createImageNode = () => {
    const container = document.createElement("div");
    container.className = "p-4";

    const image = document.createElement("img");
    image.className = "mx-auto shadow-xl";
    image.width = "320";
    image.height = "300";
    image.style.background = 'grey';
    image.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;

    container.appendChild(image);

    return container;
}

const newImage = createImageNode();
const mountNode = document.getElementById("images");

const addButton = document.querySelector('#btnAdd');
const addImage = () => {
    const newImage = createImageNode();
    mountNode.append(newImage);
    registerImage(newImage);
};
addButton.addEventListener("click", addImage);


const cleanButton = document.querySelector('#btnRemove');
const cleanImages = () => {
    const nodeElementsImages = mountNode.children;
    const listaElements = [...nodeElementsImages];
    listaElements.forEach((element) => element.remove());
}

//Agregamos el evento
cleanButton.addEventListener('click', cleanImages);

