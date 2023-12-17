export const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '41307787-12b149ab119925a918fc798ea';

export const options = {
  params: {
    key: API_KEY,
    q: '',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: 1,
    per_page: 40,
  },
};
