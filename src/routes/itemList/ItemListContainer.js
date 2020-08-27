import React from 'react';
import ItemListPresenter from './ItemListPresenter';
import { booksApi } from 'api';

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
			console.log(error);
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
