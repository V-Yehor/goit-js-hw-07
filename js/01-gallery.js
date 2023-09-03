import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const list = document.querySelector('.gallery');
const markUp = createMarcup(galleryItems);
list.addEventListener('click', handleListClick);
// list.addEventListener('keydown', pressEsc);

function createMarcup (arr) {
    return arr.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
        <a class="gallery__link" href="${original}" target="_self" rel="noopener norefferer nofollow">
        <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
        </a>
        </li>`
    }).join('');
}

list.innerHTML = markUp;

function handleListClick(event) {
    event.preventDefault();
    if (event.target === event.currentTarget) {
        return;
    }
    const targetElement = event.target;
    const originalUrl = targetElement.dataset.source;
    
    const instance = basicLightbox.create(
        `<div class="modal">
        <img src="${originalUrl}"/>
        </div>`
    )
    // console.log(instance);
    instance.show();
}

// function pressEsc (event) {
//     console.log(event.code);
// }
// pressEsc();
