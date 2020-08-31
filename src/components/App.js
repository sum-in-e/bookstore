import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import Router from './Router';
import GlobalStyles from 'styles/GlobalStyles';
import theme from 'styles/theme';

class App extends Component {
	render() {
		return (
			<>
				<ThemeProvider theme={theme}>
					<Router />
					<GlobalStyles />
				</ThemeProvider>
			</>
		);
	}
}

export default App;
