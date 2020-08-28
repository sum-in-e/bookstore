import React from 'react';
import styled from 'styled-components';
import Loader from 'components/Loader';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Item from 'components/Item';

const Main = styled.main`
	padding: 0 10rem;
	background-color: #f8f3ed;
`;

const Title = styled.h1`
	padding: 2rem 7.5rem;
	font-size: 1.6rem;
`;

const Section = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const NoResults = styled.h1`
	height: 50vh;
	padding: 2rem 0 2rem 7.5rem;
	font-size: 1.6rem;
`;

const SearchPresenter = ({ results, params, loading, handleSubmit, handleChange }) => (
	<>
		{loading ? (
			<Loader />
		) : (
			<>
				<Header handleSubmit={handleSubmit} handleChange={handleChange} />
				<Main>
					{results && results.length === 0 && (
						<NoResults>{`'${params}'에 대한 검색 결과가 없습니다.`}</NoResults>
					)}
					{results && results.length > 0 && <Title>{`'${params}'에 대한 검색 결과`}</Title>}
					{results && results.length > 0 && (
						<Section>
							{results.map(item => (
								<Item
									key={item.itemId}
									title={item.title}
									author={item.author}
									publisher={item.publisher}
									price={item.priceSales}
									description={item.description}
									pubDate={item.pubDate}
									saleStatus={item.saleStatus}
									reviewRank={item.customerReviewRank}
									coverImageS={item.coverSmallUrl}
									coverImageL={item.coverLargeUrl}
									isbn={item.isbn}
									buyLink={item.link}
								/>
							))}
						</Section>
					)}
				</Main>
				<Footer />
			</>
		)}
	</>
);

export default SearchPresenter;
