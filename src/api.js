import Axios from 'axios';

export const booksApi = {
	search: () => api.get(''),
	detail: () => api.get(''),
	bestSeller: () => api.get(''),
	recommendation: () => api.get(''),
	newBook: () => api.get(''),
};
