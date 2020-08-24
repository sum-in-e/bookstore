import React from 'react';
import styled from 'styled-components';
import { Books } from '@styled-icons/icomoon';

const Container = styled.header`
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

const Header = () => (
	<Container>
		<Logo></Logo>
		<Title>Book Store</Title>
		<form>
			<Input type="text"></Input>
		</form>
	</Container>
);

export default Header;
