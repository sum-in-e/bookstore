import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

const Container = styled.article`
	width: 100%;
`;

const Title = styled.h1`
	position: absolute;
	top: 2rem;
	font-size: 1.3rem;
`;

const SlideList = styled(Slider)`
	display: flex;
	justify-content: center;
	width: 100%;
	& div {
		outline: none;
	}
	& button:before {
		font-size: 3rem;
		color: #e3900e;
	}
	& .slick-list {
		width: 80%;
	}
	& > ul {
		bottom: -5rem;
	}
`;

const Btn = styled.button`
	position: absolute;
	top: 5rem;
	right: 7rem;
	width: 4rem;
	height: 1.5rem;
	background: none;
	border: 1px solid grey;
	border-radius: 5px;
	font-size: 0.9rem;
	color: grey;
	outline: none;
	cursor: pointer;

	&:hover {
		background-color: black;
		color: white;
	}
`;

const BestSeller = ({ title, children, settings }) => (
	<Container>
		<Title>{title}</Title>
		<SlideList {...settings}>{children}</SlideList>
		<Link to={'/list/bestSeller'}>
			<Btn>More</Btn>
		</Link>
	</Container>
);

export default BestSeller;
