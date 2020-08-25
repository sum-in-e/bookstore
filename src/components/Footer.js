import React from 'react';
import styled from 'styled-components';
import { Books } from '@styled-icons/icomoon';

const Container = styled.div`
	display: flex;
	justify-content: center;
	padding: 0 10rem;
	width: 100%;
	height: 30vh;
	background-color: grey;
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

	color: #00317d;
`;

const MailSection = styled.section`
	display: flex;
	align-items: center;
`;

const Input = styled.input`
	width: 40vw;
	height: 20%;
	outline: none;
	font-size: 1.2rem;
	border: none;
	border-radius: 8px;
	&::placeholder {
		font-size: 1.2rem;
		color: #caccd1;
	}
`;

const Footer = () => (
	<Container>
		<Section>
			<Logo></Logo>
			<Title>Book Store</Title>
		</Section>
		<MailSection>
			<Input type="text" placeholder="독자 구독 서비스를 희망하시는 경우 메일을 기재해주세요."></Input>
		</MailSection>
	</Container>
);

export default Footer;
