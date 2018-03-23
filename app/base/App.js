import React, { Component } from 'react';
import { Provider} from 'react-redux';

import AppReducer from '../reducers';
import AppWithNavigationState from '../navigators/AppNavigator';
import finalCreateStore from '../store/configureStore';

let store = finalCreateStore(AppReducer)

export default class App extends Component {
	
	render () {
		return (
			<Provider store={store} >
				<AppWithNavigationState/>
			</Provider>
		)
	}
}

