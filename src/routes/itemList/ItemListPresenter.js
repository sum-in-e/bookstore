import React from 'react';
import styled from 'styled-components';
import Header from 'components/Header';
import Item from 'components/Item';
import Footer from 'components/Footer';
import Loader from 'components/Loader';

const Main = styled.main`
	padding: 0 10rem;
	background-color: #f8f3ed;
`;

const Title = styled.h1`
	padding: 2rem 0 2rem 7.5rem;
	font-size: 1.6rem;
`;

const Section = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const ItemListPresenter = ({ items, params, loading }) => (
	<>
		{loading ? (
			<Loader />
		) : (
			<>
				<Header />
				<Main>
					{params && params.length > 0 && params === 'bestSeller' && <Title>베스트셀러</Title>}
					{params && params.length > 0 && params === 'recommend' && <Title>추천 도서</Title>}
					{params && params.length > 0 && params === 'newBook' && <Title>신작 도서</Title>}
					{items && items.length > 0 && (
						<Section>
							{items.map(item => (
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

export default ItemListPresenter;
