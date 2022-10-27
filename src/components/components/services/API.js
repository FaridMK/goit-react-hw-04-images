import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api/';

const searchParams = new URLSearchParams({
  key: '30078306-2ba5f79c85dc6ca60b6a24118',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 12,
});

export default async function searchImages(searchQuery = '', page = 1) {
  const url = `${BASE_URL}?${searchParams}&q=${searchQuery}&page=${page}`;
  return await axios.get(url);
}
