import React from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Home from 'pages/home';
import Search from 'pages/search';
import ItemList from 'pages/itemList';
import Detail from 'pages/detail';

export default () => (
	<Router>
		<>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/list/:queryType" component={ItemList} />
				<Route path="/search/:item" component={Search} />
				<Route path="/book/:id" component={Detail} />
				<Redirect from="*" to="/" />
			</Switch>
		</>
	</Router>
);
