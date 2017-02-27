import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import Header from './Components/Header';
import Home from './Components/Home';
import Error from './Components/Error';
import Styles from './Style/index.scss';

class App extends React.Component {
	render() {
		return (
			<div id='app-container'>
				<Header />
				<main>
					{this.props.children}
				</main>
			</div>
		);
	}
}

ReactDOM.render((
	<Router history={browserHistory}>
		<Route component={App}>
			<Route path='/' component={Home} />
			<Route path='*' component={Error} />
  		</Route>
	</Router>
), document.getElementById('app'));
