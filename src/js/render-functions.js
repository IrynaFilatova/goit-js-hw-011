import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      image => `
    <li class="gallery-item">
      <a href="${image.largeImageURL}" class="gallery-link">
        <img src="${image.webformatURL}" alt="${image.tags}" class="gallery-img"/>
        </a>
      <ul class="info-list">
        <li class="info-item"><span><b>Likes</b>${image.likes}</span></li>
        <li class="info-item"><span><b>Views</b>${image.views}</span></li>
        <li class="info-item"><span><b>Comments</b>${image.comments}</span></li>
        <li class="info-item"><span><b>Downloads</b>${image.downloads}</span></li>
      </ul>
    </li>
  `
    )
    .join('');

  gallery.innerHTML = markup;
  lightbox.refresh();
}

export function showLoader() {
  loader.classList.add('visible');
}
export function hideLoader() {
  loader.classList.remove('visible');
}

export function clearGallery() {
  gallery.innerHTML = '';
}
