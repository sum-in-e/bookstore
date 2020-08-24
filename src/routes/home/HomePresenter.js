import React from 'react';
import styled from 'styled-components';
import { Books } from '@styled-icons/icomoon';
import ArticleRecommend from 'components/Recommend';
import NewBookComponent from 'components/NewBook';
import Preview from 'components/Preview';

const Header = styled.header`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 8rem;
	width: 100%;
	height: 20vh;
`;

const Logo = styled(Books)`
	margin-right: 0.2rem;
	width: 4.5rem;
	height: 4.5rem;
	color: #e3900e;
	cursor: pointer;
`;

const Title = styled.h1`
	margin-right: 0.8rem;
	width: 5rem;
	font-size: 1.7rem;
	font-weight: 700;
	color: #00317d;
	cursor: pointer;
`;

const Input = styled.input`
	width: 35vw;
	height: 6vh;
	outline: none;
	font-size: 1.3rem;
	border: #9f9fa3 1px solid;
`;

const Main = styled.main``;
const ArticleBestseller = styled.div``;

const SectionTop = styled.section`
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

const Footer = styled.footer`
	padding: 0 8rem;
	width: 100%;
	height: 25vh;
	background-color: grey;
`;

const HomePresenter = ({ bestseller, recommendation, newBook, loading }) => (
	<>
		<Header>
			<Logo></Logo>
			<Title>Book Store</Title>
			<form>
				<Input type="text"></Input>
			</form>
		</Header>
		<Main>
			<SectionTop>
				<ArticleBestseller></ArticleBestseller>
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
								coverImageS={book.coverSmallUrl}
								coverImageL={book.coverLargeUrl}
								isbn={book.isbn}
								buyLink={book.link}
							/>
						))}
					</ArticleRecommend>
				)}
				{newBook && newBook.length > 0 && (
					<NewBookComponent title="신간 도서">
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
								coverImageS={book.coverSmallUrl}
								coverImageL={book.coverLargeUrl}
								isbn={book.isbn}
								buyLink={book.link}
							/>
						))}
					</NewBookComponent>
				)}
			</SectionBottom>
		</Main>
		<Footer></Footer>
	</>
);

export default HomePresenter;
