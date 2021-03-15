import axios from 'axios';

module.exports = (req, res) => {
  const { name = 'World' } = req.query
  res.status(200).send(`Hello ${name}!`)
}
/* 
const api = axios.create({
	baseURL: '/api/',
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
 */