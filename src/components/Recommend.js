import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 60%;
`;

const Title = styled.h1`
	font-size: 1.3rem;
`;

const Grids = styled.div`
	display: grid;
	grid-template-rows: repeat(3, 1fr);
	grid-template-columns: repeat(2, 1fr);
	height: 100%;
`;

const Recommend = ({ title, children }) => (
	<Container>
		<Title>{title}</Title>
		<Grids>{children}</Grids>
	</Container>
);

export default Recommend;
