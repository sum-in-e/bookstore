import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

const Container = styled.article`
	width: 100%;
`;

const SlideList = styled(Slider)`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 50vh;
	& div {
		outline: none;
	}
	& button:before {
		font-size: 3rem;
		color: #e3900e;
	}
	& .slick-list {
		width: 80%;
		@media ${props => props.theme.tabletL} {
			width: 100%;
		}
		@media ${props => props.theme.tabletM} {
			height: 100%;
		}
	}
	& > ul {
		bottom: -5rem;
		@media ${props => props.theme.tabletL} {
			bottom: 2rem;
		}
		@media ${props => props.theme.tabletS} {
			bottom: -1rem;
		}
	}
`;

const Btn = styled.button`
	position: absolute;
	top: 6rem;
	right: 13rem;
	padding: 0.3rem 0;
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
		background-color: #f8f3ed;
		color: #e3900e;
	}

	@media ${props => props.theme.tabletL} {
		right: 11rem;
	}
	@media ${props => props.theme.tabletM} {
		top: 5rem;
		right: 5rem;
	}
`;

const BestSeller = ({ title, children, settings }) => (
	<Container>
		<SlideList {...settings}>{children}</SlideList>
		<Link to={'/list/bestSeller'}>
			<Btn>More</Btn>
		</Link>
	</Container>
);

export default BestSeller;
