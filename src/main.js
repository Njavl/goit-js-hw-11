import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import getImagesByQuery from './js/pixabay-api.js';
import { createGallery } from './js/render-functions.js';

/** @type {HTMLFormElement}  */
const form = document.querySelector('.form');

form.addEventListener('submit', searchImg);

function searchImg(event) {
  event.preventDefault();

  const searchBy = form.elements['search-text'].value;

  getImagesByQuery(searchBy).then(data => {
    console.log(data.hits);

    if (data.hits.length === 0) {
      iziToast.error({
        title: 'Nth were find',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }

    createGallery(data.hits);

    const modal = new SimpleLightbox(`.gallery li a`, {
      captions: true,
      captionsData: 'alt',
      captionPosition: 'bottom',
      captionDelay: 250,
    });
  });
}
