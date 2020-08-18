import React, { Component } from 'react';
// react에서 제공하는 Class Component를 상속받아 사용하기 위해 import
// {Component} import 안하면 Component 없다는 에러 뜸
import Router from './Router';
import GlobalStyles from './GlobalStyleds';

class App extends Component {
	render() {
		return (
			<>
				<Router />
				<GlobalStyles />
			</>
		);
	}
}

export default App;
