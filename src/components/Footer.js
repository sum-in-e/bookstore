import React from 'react';
import styled from 'styled-components';
import { Books } from '@styled-icons/icomoon';

const Container = styled.div`
	display: flex;
	justify-content: center;
	padding: 0 10rem;
	width: 100%;
	height: 30vh;
	background-color: #00317d;
	font-family: 'Nanum Gothic Coding', monospace;
	@media ${props => props.theme.tabletM} {
		padding: 0 5rem;
		height: 20vh;
	}
	@media ${props => props.theme.tabletS} {
		padding: 0 2rem;
	}
`;

const Section = styled.section`
	display: flex;
	align-items: center;
	height: 100%;
`;

const Logo = styled(Books)`
	margin-right: 0.2rem;
	width: 4.5rem;
	height: 4.5rem;
	color: #e3900e;
	@media ${props => props.theme.tabletS} {
		width: 3rem;
		height: 3rem;
	}
`;

const Title = styled.h1`
	margin-right: 0.8rem;
	width: 5rem;
	font-size: 1.7rem;
	font-weight: 700;
	color: white;
	@media ${props => props.theme.tabletS} {
		width: 3rem;
		font-size: 1.2rem;
	}
`;

const MailSection = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const P = styled.p`
	color: white;
	font-size: 0.9rem;
	@media ${props => props.theme.tabletS} {
		font-size: 0.7rem;
	}
`;

const Input = styled.input`
	width: 40vw;
	height: 20%;
	outline: none;
	font-size: 1.2rem;
	border: none;
	border-bottom: 1px white solid;
	background: none;
	color: white;
	&::placeholder {
		font-size: 0.8rem;
		color: rgb(208, 210, 211, 0.5);
	}
	@media ${props => props.theme.tabletS} {
		height: 15%;
		font-size: 1.1rem;
	}
`;

const Footer = () => (
	<Container>
		<Section>
			<Logo />
			<Title>Book Store</Title>
		</Section>
		<MailSection>
			<P>Subscribe to Reading Newspapers</P>
			<Input type="text" placeholder="example@gmail.com"></Input>
		</MailSection>
	</Container>
);

export default Footer;
