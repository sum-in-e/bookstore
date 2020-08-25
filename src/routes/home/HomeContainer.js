import React from 'react';
import HomePresenter from './HomePresenter';
import { booksApi } from 'api';

class HomeContainer extends React.Component {
	state = {
		bestseller: null,
		recommendation: null,
		newBook: null,
		loading: true,
	};

	async componentDidMount() {
		try {
			const {
				data: { item: getBestseller },
			} = await booksApi.getList('bestSeller');
			const {
				data: { item: getRecommendation },
			} = await booksApi.getList('recommend');
			const {
				data: { item: getNewBook },
			} = await booksApi.getList('newBook');
			this.setState({
				bestseller: getBestseller.slice(0, 10),
				recommendation: getRecommendation.slice(0, 6),
				newBook: getNewBook.slice(0, 3),
			});
		} catch (error) {
			console.log(error);
		} finally {
			this.setState({ loading: false });
		}
	}

	render() {
		const { bestseller, recommendation, newBook, loading } = this.state;
		return (
			<HomePresenter
				bestseller={bestseller}
				recommendation={recommendation}
				newBook={newBook}
				loading={loading}
			/>
		);
	}
}

export default HomeContainer;
