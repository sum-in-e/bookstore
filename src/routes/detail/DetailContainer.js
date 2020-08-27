import React from 'react';
import DetailPresenter from './DetailPresenter';

class DetailContainer extends React.Component {
	state = {
		title: null,
		author: null,
		saleStatus: null,
		publisher: null,
		pubDate: null,
		price: null,
		description: null,
		reviewRank: null,
		coverImageS: null,
		coverImageL: null,
		isbn: null,
		buyLink: null,
		loading: true,
		searchTerm: null,
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

	handleClick = event => {
		event.preventDefault();
		window.open(this.state.buyLink);
	};

	async componentDidMount() {
		try {
			const book = await this.props.location.state;
			this.setState({
				title: book.title,
				author: book.author,
				saleStatus: book.saleStatus,
				publisher: book.publisher,
				pubDate: book.pubDate,
				price: book.price,
				description: book.description,
				reviewRank: book.reviewRank,
				coverImageS: book.coverImageS,
				coverImageL: book.coverImageL,
				isbn: book.isbn,
				buyLink: book.buyLink,
			});
			window.scrollTo(0, 0);
		} catch (error) {
			console.log(error);
		} finally {
			this.setState({ loading: false });
		}
	}

	render() {
		const {
			title,
			author,
			saleStatus,
			publisher,
			pubDate,
			price,
			description,
			reviewRank,
			coverImageL,
			isbn,
			loading,
		} = this.state;
		return (
			<DetailPresenter
				title={title}
				author={author}
				saleStatus={saleStatus}
				publisher={publisher}
				pubDate={pubDate}
				price={price}
				description={description}
				reviewRank={reviewRank}
				coverImageL={coverImageL}
				isbn={isbn}
				loading={loading}
				handleClick={this.handleClick}
				handleSubmit={this.handleSubmit}
				handleChange={this.handleChange}
			/>
		);
	}
}

export default DetailContainer;
