import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
	display: flex;
	margin-bottom: 2rem;
	width: 80%;
	height: 30vh;
	padding: 1rem;
	background-color: #f8f3ed;
	border: 1px solid #caccd1;
	border-radius: 10px;
`;

const Img = styled.div`
	background-image: url(${props => props.url});
	background-repeat: no-repeat;
	background-size: contain;
	width: 15%;
	height: auto;
`;

const Info = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 75%;
	padding: 1rem 1rem 1rem 1.5rem;
`;

const SLink = styled(Link)`
	text-decoration: none;
	&:focus,
	&:hover,
	&:visited,
	&:link,
	&:active {
		text-decoration: none;
	}
`;

const Title = styled.h1`
	padding-bottom: 1rem;
	font-size: 1.3rem;
	color: #00317d;
	cursor: pointer;
`;

const Section = styled.div`
	display: flex;
	padding-bottom: 0.4rem;
`;

const Author = styled.p`
	padding-right: 0.5rem;
	border-right: 1px solid black;
`;

const Publisher = styled.p`
	padding: 0 0.5rem;
	border-right: 1px solid black;
`;

const PubDate = styled.p`
	padding: 0 0.5rem;
`;

const Price = styled.p`
	padding-bottom: 1rem;
	color: #e3900e;
`;

const Rank = styled.span``;

const SaleStatus = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 10%;
`;

const Item = ({
	title,
	author,
	saleStatus,
	publisher,
	pubDate,
	price,
	description,
	reviewRank,
	coverImageS,
	coverImageL,
	isbn,
	buyLink,
}) => (
	<Container>
		<Img url={coverImageS ? coverImageS : require('../assets/image_not_found.jpg')} />
		<Info>
			<SLink
				to={{
					pathname: `/book/${title}`,
					state: {
						title,
						author,
						price,
						publisher,
						description,
						pubDate,
						saleStatus,
						reviewRank,
						coverImageL,
						isbn,
						buyLink,
					},
				}}
			>
				<Title>{title}</Title>
			</SLink>
			<Section>
				<Author>{author ? author : '저자 미상'}</Author>
				<Publisher>{publisher}</Publisher>
				<PubDate>{`${pubDate.slice(0, 4)}년 ${pubDate.slice(4, 6)}월`}</PubDate>
			</Section>
			<Price>{`${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원`}</Price>
			<Rank role="img" aria-label="rank">{`⭐️ ${reviewRank}/10`}</Rank>
		</Info>
		<SaleStatus>
			<span>{saleStatus}</span>
		</SaleStatus>
	</Container>
);

export default Item;
