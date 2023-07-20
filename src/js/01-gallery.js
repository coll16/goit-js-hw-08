// Add imports above this line
import { galleryItems } from './gallery-items';
import "simplelightbox/dist/simple-lightbox.min.css"
import SimpleLightbox from "simplelightbox"
// Change code below this line
 
const gallery = document.querySelector('.gallery');

const createItems = ({ preview, original, description }) => {
    return `
      <li class="gallery__item" style="list-style-type: none;">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}"/>
        </a>
      </li>
    `;
  };

  const galleryItemsMarkup = galleryItems
  .map(item => createItems(item))
  .join('');

  gallery.insertAdjacentHTML('afterbegin', galleryItemsMarkup);

  const images = gallery.querySelectorAll('.gallery__image');
images.forEach(image => {
  const text = image.getAttribute('alt');
  image.setAttribute('title', text);
});