import axios from 'axios';

export const booksApi = {
	search: item =>
		axios.post(`api/searchApi`, {
			item : item
		}),

	getList: category =>
		axios.post(`api/getListApi`, {
			category : category
		}) 
};
