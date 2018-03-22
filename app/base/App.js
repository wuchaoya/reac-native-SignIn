import React, { Component } from 'react';
import { Provider} from 'react-redux';
import { createStore, applyMiddleware} from 'redux';

import AppReducer from '../reducers';
import AppWithNavigationState from '../navigators/AppNavigator';
import { middleware } from '../util/redux';

const store = createStore(
	AppReducer,
	applyMiddleware(middleware)
);

export default class App extends Component {
	
	render () {
		return (
			<Provider store={store} >
				<AppWithNavigationState/>
			</Provider>
		)
	}
}

