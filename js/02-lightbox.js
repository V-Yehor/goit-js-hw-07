import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const list = document.querySelector('.gallery');
const markUp = createMarcup(galleryItems);
// list.addEventListener('click', handleListClick);

function createMarcup (arr) {
    return arr.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
        <a class="gallery__link" href="${original}" target="_self" rel="noopener norefferer nofollow">
        <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
        </a>
        </li>`
    }).join('');
}

list.insertAdjacentHTML('beforeend', markUp);

const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionSelector: 'img',
    captionType: 'attr',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250
});