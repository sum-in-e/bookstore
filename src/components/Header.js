import React from 'react';
import styled from 'styled-components';
import { Books } from '@styled-icons/icomoon';
import { Link } from 'react-router-dom';

const Container = styled.header`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 8rem;
	width: 100%;
	height: 20vh;
`;

const SLink = styled(Link)`
	display: flex;
	align-items: center;
	text-decoration: none;
	cursor: pointer;
	&:focus,
	&:hover,
	&:visited,
	&:link,
	&:active {
		text-decoration: none;
	}
`;

const Logo = styled(Books)`
	margin-right: 0.2rem;
	width: 4.5rem;
	height: 4.5rem;
	color: #e3900e;
`;

const Title = styled.h1`
	margin-right: 0.8rem;
	width: 5rem;
	font-size: 1.7rem;
	font-weight: 700;

	color: #00317d;
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
		<SLink to={'/'}>
			<Logo></Logo>
			<Title>Book Store</Title>
		</SLink>
		<form>
			<Input type="text"></Input>
		</form>
	</Container>
);

export default Header;
