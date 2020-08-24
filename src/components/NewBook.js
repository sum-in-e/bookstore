import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 30%;
	height: 95%;
`;

const Title = styled.h1`
	font-size: 1.3rem;
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
`;

const NewBook = ({ title, children }) => (
	<Container>
		<Title>{title}</Title>
		<Grids>{children}</Grids>
	</Container>
);

export default NewBook;
