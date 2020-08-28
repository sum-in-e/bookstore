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
`;

const Title = styled.h1`
	margin-right: 0.8rem;
	width: 5rem;
	font-size: 1.7rem;
	font-weight: 700;
	color: white;
`;

const MailSection = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const P = styled.p`
	color: white;
	font-size: 0.9rem;
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
		font-size: 0.9rem;
		color: rgb(208, 210, 211, 0.5);
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
