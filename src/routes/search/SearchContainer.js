import React from 'react';
import SearchPresenter from './SearchPresenter';
import { booksApi } from 'api';

class SearchContainer extends React.Component {
	state = {
		results: null,
		params: null,
		searchTerm: null,
		loading: true,
	};

	handleSubmit = event => {
		event.preventDefault();
		const { searchTerm } = this.state;
		if (searchTerm !== '') {
			this.props.history.push(`/search/${searchTerm}`);
			this.searchByTerm(searchTerm);
		}
	};

	handleChange = event => {
		const {
			target: { value: searchTerm },
		} = event;
		this.setState({ searchTerm });
	};

	searchByTerm = async searchTerm => {
		this.setState({ loading: true });
		try {
			const {
				data: { item: results },
			} = await booksApi.search(searchTerm);
			this.setState({ results, params: searchTerm });
		} catch (error) {
			console.log(error);
		} finally {
			this.setState({ loading: false });
		}
	};

	async componentDidMount() {
		try {
			const params = this.props.match.params.item;
			const {
				data: { item: results },
			} = await booksApi.search(params);
			this.setState({ results, params });
			console.log(results);
		} catch (error) {
			console.log(error);
		} finally {
			this.setState({ loading: false });
		}
	}

	render() {
		const { results, params, loading } = this.state;
		return (
			<SearchPresenter
				results={results}
				loading={loading}
				params={params}
				handleSubmit={this.handleSubmit}
				handleChange={this.handleChange}
			/>
		);
	}
}

export default SearchContainer;
