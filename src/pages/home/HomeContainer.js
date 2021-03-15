import React from 'react';
import HomePresenter from './HomePresenter';
import { booksApi } from 'api';

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
			const promises = [booksApi.getList('bestSeller'), booksApi.getList('recommend'), booksApi.getList('newBook')];
			Promise.all(promises).then(result => 
				this.setState({
					bestseller: result[0].data.item.slice(0, 10),
					recommendation: result[1].data.item.slice(0, 6),
					newBook: result[2].data.item.slice(0, 3),
					loading: false
				}) 
			);
			window.scrollTo(0, 0);
			} catch (error) {
				alert('데이터를 불러오는 도중 오류가 발생했습니다. 화면을 다시 불러옵니다.');
				this.props.history.push(`/`);
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
