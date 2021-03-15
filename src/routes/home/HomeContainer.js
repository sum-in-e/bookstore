import React from 'react';
import HomePresenter from './HomePresenter';
import { booksApi } from 'api/api';

class HomeContainer extends React.Component {
	state = {
		bestseller: null,
		recommendation: null,
		newBook: null,
		loading: true,
		searchTerm: null,
		settings: {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			autoplay: true,
			autoplaySpeed: 3000,
		},
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
			const {
				data: { item: getBestseller },
			} = await booksApi.getList('bestSeller');
			const {
				data: { item: getRecommendation },
			} = await booksApi.getList('recommend');
			const {
				data: { item: getNewBook },
			} = await booksApi.getList('newBook');
			if (getBestseller && getRecommendation && getNewBook) {
				this.setState({
					bestseller: getBestseller.slice(0, 10),
					recommendation: getRecommendation.slice(0, 6),
					newBook: getNewBook.slice(0, 3),
				});
			}
			window.scrollTo(0, 0);
		} catch (error) {
			console.log(error);
		} finally {
			this.setState({ loading: false });
		}
	}

	render() {
		const { bestseller, recommendation, newBook, loading, settings } = this.state;
		return (
			<HomePresenter
				bestseller={bestseller}
				recommendation={recommendation}
				newBook={newBook}
				loading={loading}
				settings={settings}
				handleSubmit={this.handleSubmit}
				handleChange={this.handleChange}
			/>
		);
	}
}

export default HomeContainer;
