import React from 'react';
import styled from 'styled-components';
import Loader from 'components/Loader';
import Header from 'components/Header';
import Footer from 'components/Footer';

const DetailPresenter = ({ bookDetail, loading, handleClick, handleSubmit, handleChange }) => {
	const formatNumber = () => {
		return bookDetail.price
			.toString()
			.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
	}
 return (
	<>
		{loading ? (
			<Loader />
		) : (
			<>
				<Header handleSubmit={handleSubmit} handleChange={handleChange} />
				<Main>
					{bookDetail ? (
						<>
							<HeaderSection>
								<Title>{bookDetail.title}</Title>
								<Article>
									<Author>{bookDetail.author ? bookDetail.author : '저자 미상'}</Author>
									<Publisher>{bookDetail.publisher}</Publisher>
									<PubDate>
										{`${bookDetail.pubDate.slice(0, 4)}-${bookDetail.pubDate.slice(
											4,
											6,
										)}-${bookDetail.pubDate.slice(6, 8)}`}
									</PubDate>
								</Article>
							</HeaderSection>
							<InfoSection>
								<Cover
									url={
										bookDetail.coverImageL
											? bookDetail.coverImageL
											: require('../../assets/image_not_found.jpg')
									}
								/>
								<Info>
									<SaleStatus>{bookDetail.saleStatus}</SaleStatus>
									<Price>{`판매가 ${formatNumber()}원`}</Price>
									<Isbn>{`ISBN       ${bookDetail.isbn}`}</Isbn>
									<Description>{bookDetail.description}</Description>
									<span role="img" aria-label="rank">{`⭐️ ${bookDetail.reviewRank}/10`}</span>
									<BuyBtn onClick={handleClick}>구매하기</BuyBtn>
								</Info>
							</InfoSection>
						</>
					) : (
						'데이터를 가져올 수 없습니다.'
					)}
				</Main>
				<Footer />
			</>
		)}
	</>
)};

const Main = styled.main`
	width: 100%;
	padding: 0 10rem 2rem 10rem;
	@media ${props => props.theme.tabletM} {
		height: 100vh;
		padding: 0 5rem;
	}
	@media ${props => props.theme.mobile} {
		padding: 0 2rem;
	}
`;

const HeaderSection = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	height: 15%;
	padding: 1rem 0;
	border-bottom: 1px solid grey;
`;

const Title = styled.h1`
	padding-bottom: 1rem;
	font-size: 2rem;
	font-weight: bold;
	@media ${props => props.theme.mobile} {
		font-size: 1.7rem;
	}
`;

const Article = styled.article`
	display: flex;
	padding-bottom: 0.4rem;
	font-size: 1.1rem;
	@media ${props => props.theme.mobile} {
		font-size: 0.9rem;
		flex-direction: column;
	}
`;

const Author = styled.p`
	padding-right: 0.5rem;
	border-right: 1px solid black;
	@media ${props => props.theme.mobile} {
		padding: 0;
		border: none;
	}
`;

const Publisher = styled.p`
	padding: 0 0.5rem;
	border-right: 1px solid black;
	@media ${props => props.theme.mobile} {
		padding: 0.3rem 0;
		border: none;
	}
`;

const PubDate = styled.p`
	padding: 0 0.5rem;
	@media ${props => props.theme.mobile} {
		padding: 0;
		border: none;
	}
`;

const InfoSection = styled.section`
	display: flex;
	position: relative;
	width: 90%;
	height: 70%;
	margin: 2rem 0;
	@media ${props => props.theme.tabletM} {
		flex-direction: column;
		width: 90%;
	}
`;

const Cover = styled.div`
	width: 70rem;
	height: auto;
	margin-left: 1rem;
	background-image: url(${props => props.url});
	background-repeat: no-repeat;
	background-size: contain;

	@media ${props => props.theme.laptap} {
		width: 110rem;
	}
	@media ${props => props.theme.tabletL} {
		width: 130rem;
	}
	@media ${props => props.theme.tabletM} {
		width: auto;
		height: 50%;
		margin-bottom: 2rem;
		background-position: center center;
	}
`;

const Info = styled.article`
	display: flex;
	flex-direction: column;
	padding-left: 2rem;
`;

const SaleStatus = styled.p`
	width: 5rem;
	height: 2rem;
	margin-bottom: 1.5rem;
	padding: 0.5rem 0;
	border: 1px grey solid;
	border-radius: 3px;
	text-align: center;
`;

const Price = styled.p`
	padding-bottom: 1rem;
	font-size: 1.3rem;
	color: #e3900e;
`;

const Isbn = styled.p`
	padding-bottom: 3rem;

	@media ${props => props.theme.tabletL} {
		padding-bottom: 1.5rem;
	}
`;

const Description = styled.p`
	line-height: 1.3rem;
	padding-bottom: 1.5rem;
`;

const BuyBtn = styled.button`
	width: 7.5rem;
	height: 3rem;
	margin-top: 1rem;
	border: 1px solid grey;
	background-color: #00317d;
	color: white;
	font-size: 1.1rem;
	outline: none;
	cursor: pointer;
`;

export default DetailPresenter;
