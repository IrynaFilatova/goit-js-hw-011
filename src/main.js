import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.form');
const input = document.querySelector('[name="search-text"]');
const submitBtn = document.querySelector('[type="submit"]');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

form.addEventListener('submit', e => {
  e.preventDefault();
  const query = e.target.elements[0].value.trim();
  if (!query) {
    hideLoader();
    showAlert('Please enter a search term.');
    return;
  }
  clearGallery();
  getImagesByQuery(query)
    .then(data => {
      if (data.hits.length === 0) {
        showAlert(
          'Sorry, there are no images matching your search query. Please try again!'
        );
        return;
      }
      createGallery(data.hits);
      showLoader();
    })
    .catch(error => {
      showAlert('Something went wrong. Try again later.');
      console.error(error);
    })
    .finally(() => {
      hideLoader();
    });
});

function showAlert(message) {
  iziToast.show({
    message,
    messageColor: '#fff',
    backgroundColor: '#EF4040',
    position: 'topRight',
  });
}
