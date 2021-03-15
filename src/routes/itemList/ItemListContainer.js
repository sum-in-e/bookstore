import React from 'react';
import ItemListPresenter from './ItemListPresenter';
import { booksApi } from 'api/api';

class ItemListContainer extends React.Component {
	state = {
		items: null,
		params: null,
		searchTerm: null,
		loading: true,
	};

	handleSubmit = event => {
		event.preventDefault();
		const { searchTerm } = this.state;
		if (searchTerm !== '') {
			this.props.history.push(`/search/${searchTerm}`);
		}
	};

	handleChange = event => {
		const {
			target: { value: searchTerm },
		} = event;
		this.setState({ searchTerm });
	};

	async componentDidMount() {
		try {
			const params = this.props.match.params.queryType;
			const {
				data: { item: items },
			} = await booksApi.getList(params);
			this.setState({ items, params });
			window.scrollTo(0, 0);
		} catch (error) {
			alert('데이터를 불러오는 도중 오류가 발생했습니다. 초기 화면으로 돌아갑니다.');
			this.props.history.push(`/`);
		} finally {
			this.setState({ loading: false });
		}
	}

	render() {
		const { items, params, loading } = this.state;
		return (
			<ItemListPresenter
				items={items}
				params={params}
				loading={loading}
				handleSubmit={this.handleSubmit}
				handleChange={this.handleChange}
			/>
		);
	}
}

export default ItemListContainer;
