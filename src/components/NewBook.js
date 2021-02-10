import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NewBook = ({ title, children }) => (
	<Container>
		<Title>{title}</Title>
		<Grids>{children}</Grids>
		<Link to={'/list/newBook'}>
			<Btn>More</Btn>
		</Link>
	</Container>
);

const Container = styled.article`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	position: relative;
	width: 30%;
	height: 95%;
	@media ${props => props.theme.tabletM} {
		width: 100%;
		height: 40%;
	}
	@media ${props => props.theme.tabletS} {
		align-items: center;
		height: 45%;
	}
`;

const Title = styled.h1`
	width: 100%;
	font-size: 1.5rem;
	@media ${props => props.theme.tabletS} {
		position: absolute;
		top: -2rem;
		left: 1rem;
	}
`;

const Grids = styled.div`
	display: grid;
	grid-template-rows: repeat(3, 1fr);
	grid-template-columns: 1fr;
	height: 100%;
	width: 100%;
	margin-top: 1.2rem;
	background-color: #f8f3ed;
	border-radius: 12px;
	@media ${props => props.theme.tabletM} {
		grid-template-rows: 1fr;
		grid-template-columns: repeat(3, 1fr);
	}
	@media ${props => props.theme.tabletS} {
		grid-template-rows: repeat(3, 1fr);
		grid-template-columns: 1fr;
		width: 90%;
	}
`;

const Btn = styled.button`
	position: absolute;
	top: 0rem;
	right: 1rem;
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
	@media ${props => props.theme.tabletS} {
		top: -2rem;
	}
`;

export default NewBook;
