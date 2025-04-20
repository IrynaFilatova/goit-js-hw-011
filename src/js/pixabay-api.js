import axios from 'axios';
export function getImagesByQuery(query) {
  return axios('https://pixabay.com/api/', {
    params: {
      key: '49539312-1d6717d33bfa63c1c4ab44e48',
      q: `${query}`,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  })
    .then(response => response.data)
    .catch(error => {
      console.error(error.message);
      throw error;
    });
}
