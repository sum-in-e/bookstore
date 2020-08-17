import React from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Home from 'routes/home';
import Search from 'routes/search';
import ItemList from 'routes/itemList';
import Detail from 'routes/detail';

export default () => (
	<Router>
		<>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/list/:queryType" component={ItemList} />
				<Route path="/search" component={Search} />
				<Route path="/book/:id" component={Detail} />
				<Redirect from="*" to="/" />
			</Switch>
		</>
	</Router>
);
