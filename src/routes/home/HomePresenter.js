import React from 'react';
import styled from 'styled-components';
import { Books } from '@styled-icons/icomoon';

const Header = styled.header`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 8rem;
	width: 100%;
	height: 20vh;
	font-family: 'Nanum Gothic Coding', monospace;
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

const Form = styled.form``;

const Input = styled.input`
	width: 35vw;
	height: 6vh;
	outline: none;
	font-size: 1.3rem;
	border: #9f9fa3 1px solid;
`;

const Main = styled.main``;

const SectionTop = styled.section`
	padding: 0 8rem;
	width: 100%;
	height: 75vh;
	background-color: #f8f3ed;
`;
const ArticleBestseller = styled.article``;

const SectionBottom = styled.section`
	display: flex;
	justify-content: space-between;
	padding: 0 8rem;
	width: 100%;
	height: 85vh;
`;
const ArticleRecommend = styled.article`
	width: 70%;
`;
const SixGrids = styled.div`
	display: grid;
	grid-template-rows: repeat(3, 1fr);
	grid-template-columns: repeat(2, 1fr);
	height: 100%;
`;

const ArticleAttention = styled.article`
	width: 20%;
`;
const ThreeGrids = styled.div`
	display: grid;
	grid-template-rows: repeat(4, 1fr);
	grid-template-columns: 1fr;
	height: 100%;
`;

const H2 = styled.h2`
	color: #00317d;
`;

const Item = styled.div`
	display: flex;
	padding: 2rem;
`;
const Cover = styled.div`
	background-image: url('https://images.unsplash.com/photo-1537495329792-41ae41ad3bf0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80');
	background-size: cover;
	width: 30%;
	height: auto;
`;
const Info = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-left: 1rem;
`;
const H3 = styled.h3`
	padding-bottom: 1rem;
	color: #00317d;
`;
const P = styled.p`
	color: #e3900e;
`;

const Footer = styled.footer`
	padding: 0 8rem;
	width: 100%;
	height: 25vh;
	background-color: grey;
`;
const HomePresenter = () => {
	return (
		<>
			<Header>
				<Logo></Logo>
				<Title>Book Store</Title>
				<Form>
					<Input type="text"></Input>
				</Form>
			</Header>
			<Main>
				<SectionTop>
					<ArticleBestseller></ArticleBestseller>
				</SectionTop>
				<SectionBottom>
					<ArticleRecommend>
						<H2>편집장 추천 도서</H2>
						<SixGrids>
							<Item>
								<Cover></Cover>
								<Info>
									<H3>여자 둘이 살고 있습니다.</H3>
									<P>15,350원</P>
								</Info>
							</Item>
							<Item>
								<Cover></Cover>
								<Info>
									<H3>여자 둘이 살고 있습니다.</H3>
									<P>15,350원</P>
								</Info>
							</Item>
							<Item>
								<Cover></Cover>
								<Info>
									<H3>여자 둘이 살고 있습니다.</H3>
									<P>15,350원</P>
								</Info>
							</Item>
							<Item>
								<Cover></Cover>
								<Info>
									<H3>여자 둘이 살고 있습니다.</H3>
									<P>15,350원</P>
								</Info>
							</Item>
							<Item>
								<Cover></Cover>
								<Info>
									<H3>여자 둘이 살고 있습니다.</H3>
									<P>15,350원</P>
								</Info>
							</Item>
							<Item>
								<Cover></Cover>
								<Info>
									<H3>여자 둘이 살고 있습니다.</H3>
									<P>15,350원</P>
								</Info>
							</Item>
						</SixGrids>
					</ArticleRecommend>
					<ArticleAttention>
						<H2>주목할만한 신간</H2>
						<ThreeGrids>
							<Item>
								<Cover></Cover>
								<Info>
									<H3>여자 둘이 살고 있습니다.</H3>
									<P>15,350원</P>
								</Info>
							</Item>
							<Item>
								<Cover></Cover>
								<Info>
									<H3>여자 둘이 살고 있습니다.</H3>
									<P>15,350원</P>
								</Info>
							</Item>
							<Item>
								<Cover></Cover>
								<Info>
									<H3>여자 둘이 살고 있습니다.</H3>
									<P>15,350원</P>
								</Info>
							</Item>
						</ThreeGrids>
					</ArticleAttention>
				</SectionBottom>
			</Main>
			<Footer></Footer>
		</>
	);
};

export default HomePresenter;
