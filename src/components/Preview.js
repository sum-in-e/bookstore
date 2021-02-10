import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Preview = ({
	title,
	author,
	price,
	publisher,
	description,
	pubDate,
	saleStatus,
	reviewRank,
	coverImageS,
	coverImageL,
	isbn,
	buyLink,
}) => (
	<Container>
		<Img bgUrl={coverImageS ? coverImageS : require('../assets/image_not_found.jpg')} />
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
			<Author>{author}</Author>
			<Price>{`${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원`}</Price>
		</Info>
	</Container>
);

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

const Container = styled.div`
	display: flex;
	height: 100%;
	padding: 1rem;
`;

const Img = styled.div`
	width: 25%;
	height: auto;
	background-image: url(${props => props.bgUrl});
	background-size: contain;
	background-position: center center;
	background-repeat: no-repeat;
	@media ${props => props.theme.laptap} {
		width: 35%;
	}
`;

const Info = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 70%;
	padding-left: 1.5rem;
	@media ${props => props.theme.laptap} {
		width: 65%;
	}
`;

const Title = styled.h1`
	padding-bottom: 1rem;
	font-size: 1.1rem;
	line-height: 1.3rem;
	color: #00317d;
	@media ${props => props.theme.tabletM} {
		font-size: 1rem;
	}
`;

const Author = styled.p`
	padding-bottom: 0.6rem;
	color: black;
	@media ${props => props.theme.tabletM} {
		font-size: 0.9rem;
	}
`;

const Price = styled.p`
	color: #e3900e;
`;

export default Preview;
