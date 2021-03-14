import axios from 'axios';

const api = axios.create({
	baseURL: 'http://book.interpark.com/api/',
});

export const booksApi = {
	search: item =>
		api.get('search.api', {
			params: {
				key: process.env.REACT_APP_API_KEY,
				query: item,
				output: 'json',
			},
		}),
	getList: category =>
		api.get(`${category}.api`, {
			params: {
				key: process.env.REACT_APP_API_KEY,
				categoryId: '100',
				output: 'json',
			},
		}),
};
