import React from 'react';
import styled from 'styled-components';
import { Books } from '@styled-icons/icomoon';
import { Link } from 'react-router-dom';

const Header = ({ handleSubmit, handleChange }) => (
	<Container>
		<SLink to={'/'}>
			<Logo />
			<Title>Book Store</Title>
		</SLink>
		<form onSubmit={handleSubmit}>
			<Input onChange={handleChange} type="text"></Input>
		</form>
	</Container>
);

const Container = styled.header`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 10rem;
	width: 100%;
	height: 20vh;
	font-family: 'Nanum Gothic Coding', monospace;
	@media ${props => props.theme.tabletM} {
		padding: 0 5rem;
		height: 15vh;
	}
	@media ${props => props.theme.tabletS} {
		padding: 0 2rem;
	}
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
	@media ${props => props.theme.tabletS} {
		width: 3.5rem;
		height: 3.5rem;
	}
`;

const Title = styled.h1`
	margin-right: 0.8rem;
	width: 5rem;
	font-size: 1.7rem;
	font-weight: 700;
	color: #00317d;
	@media ${props => props.theme.tabletS} {
		width: 3.5rem;
		font-size: 1.4rem;
	}
`;

const Input = styled.input`
	width: 35vw;
	height: 6vh;
	outline: none;
	font-size: 1.3rem;
	border: #9f9fa3 1px solid;
	@media ${props => props.theme.tabletL} {
		width: 45vw;
		height: 5vh;
	}
	@media ${props => props.theme.tabletS} {
		width: 50vw;
		height: 4vh;
	}
`;

export default Header;
