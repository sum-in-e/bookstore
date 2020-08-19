import axios from 'axios';

const api = axios.create({
	baseURL: 'http://www.aladin.co.kr/ttb/api/',
	params: {
		ttbkey: 'ttbqpdjdhkrha1525001',
	},
});

export const booksApi = {
	search: item =>
		api.get('ItemSearch.aspx', {
			params: {
				Query: item,
			},
		}),
	detail: isbn =>
		api.get('ItemLookUp.aspx', {
			params: {
				itemIdType: 'ISBN13',
				ItemId: isbn,
			},
		}),
	getList: reqList =>
		api.get('ItemList.aspx', {
			params: {
				QueryType: reqList,
			},
		}),
};
