import React from 'react';
import styled from 'styled-components';

const Loader = () => (
	<Container>
		<span role="img" aria-label="Loading">
			⏳
		</span>
	</Container>
);

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 20px;
	height: 100vh;
	width: 100%;
	font-size: 28px;
`;

export default Loader;
