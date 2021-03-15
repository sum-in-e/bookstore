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
		} catch (error) {
			alert('데이터를 불러오는 도중 오류가 발생했습니다. 초기 화면으로 돌아갑니다.');
			this.props.history.push(`/`);
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
