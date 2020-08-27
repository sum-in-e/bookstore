import React from 'react';
import styled from 'styled-components';
import Loader from 'components/Loader';
import Header from 'components/Header';
import Footer from 'components/Footer';
import ArticleBestseller from 'components/BestSeller';
import ArticleRecommend from 'components/Recommend';
import ArticleNewBook from 'components/NewBook';
import Preview from 'components/Preview';
import SlideContent from 'components/SlideContent';

const Main = styled.main``;

const SectionTop = styled.section`
	display: flex;
	align-items: center;
	position: relative;
	padding: 0 10rem;
	width: 100%;
	height: 75vh;
	background-color: #f8f3ed;
`;

const SectionBottom = styled.section`
	display: flex;
	justify-content: space-between;
	padding: 2rem 10rem;
	width: 100%;
	height: 90vh;
`;

const HomePresenter = ({ bestseller, recommendation, newBook, loading, settings }) => (
	<>
		{loading ? (
			<Loader />
		) : (
			<>
				<Header />
				<Main>
					<SectionTop>
						{bestseller && bestseller.length > 0 && (
							<ArticleBestseller title={'베스트셀러'} settings={settings}>
								{bestseller.map(book => (
									<SlideContent
										key={book.itemId}
										title={book.title}
										author={book.author}
										publisher={book.publisher}
										price={book.priceSales}
										description={book.description}
										pubDate={book.pubDate}
										saleStatus={book.saleStatus}
										reviewRank={book.customerReviewRank}
										coverImageS={book.coverSmallUrl}
										coverImageL={book.coverLargeUrl}
										isbn={book.isbn}
										buyLink={book.link}
									/>
								))}
							</ArticleBestseller>
						)}
					</SectionTop>
					<SectionBottom>
						{recommendation && recommendation.length > 0 && (
							<ArticleRecommend title="추천 도서">
								{recommendation.map(book => (
									<Preview
										key={book.itemId}
										title={book.title}
										author={book.author}
										publisher={book.publisher}
										price={book.priceSales}
										description={book.description}
										pubDate={book.pubDate}
										saleStatus={book.saleStatus}
										reviewRank={book.customerReviewRank}
										coverImageS={book.coverSmallUrl}
										coverImageL={book.coverLargeUrl}
										isbn={book.isbn}
										buyLink={book.link}
									/>
								))}
							</ArticleRecommend>
						)}
						{newBook && newBook.length > 0 && (
							<ArticleNewBook title="신간 도서">
								{newBook.map(book => (
									<Preview
										key={book.itemId}
										title={book.title}
										author={book.author}
										publisher={book.publisher}
										price={book.priceSales}
										description={book.description}
										pubDate={book.pubDate}
										saleStatus={book.saleStatus}
										reviewRank={book.customerReviewRank}
										coverImageS={book.coverSmallUrl}
										coverImageL={book.coverLargeUrl}
										isbn={book.isbn}
										buyLink={book.link}
									/>
								))}
							</ArticleNewBook>
						)}
					</SectionBottom>
				</Main>
				<Footer />
			</>
		)}
	</>
);

export default HomePresenter;
