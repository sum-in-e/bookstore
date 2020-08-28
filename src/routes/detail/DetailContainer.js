import React from 'react';
import DetailPresenter from './DetailPresenter';

class DetailContainer extends React.Component {
	state = {
		bookDetail: null,
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
		const {
			bookDetail: { buyLink },
		} = this.state;
		window.open(buyLink);
	};

	async componentDidMount() {
		try {
			const bookDetail = await this.props.location.state;
			this.setState({ bookDetail });
			window.scrollTo(0, 0);
			window.onbeforeunload = () => {
				return 'Stop this event';
			};
		} catch (error) {
			console.log(error);
		} finally {
			this.setState({ loading: false });
		}
	}

	render() {
		const { bookDetail, loading } = this.state;
		return (
			<DetailPresenter
				bookDetail={bookDetail}
				loading={loading}
				handleClick={this.handleClick}
				handleSubmit={this.handleSubmit}
				handleChange={this.handleChange}
			/>
		);
	}
}

export default DetailContainer;
