import { combineReducers} from 'redux';
import { NavigationActions } from 'react-navigation';

import { AppNavigator } from '../navigators/AppNavigator';

const firstAction = AppNavigator.router.getActionForPathAndParams('Coding');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const secondAction = AppNavigator.router.getActionForPathAndParams('Home');
const initialNavState = AppNavigator.router.getStateForAction(
	secondAction,
	tempNavState
);

function nav (state = initialNavState, action) {
	let nextState;
	switch (action.type) {
		case 'Home':
			nextState = AppNavigator.router.getStateForAction(
				NavigationActions.navigate({ routeName: 'User' }),
				state
			);
			break;
		case 'User':
			nextState = AppNavigator.router.getStateForAction(
				NavigationActions.navigate({ routeName: 'Home ' }),
				state
			);
			break;
		default:
			nextState = AppNavigator.router.getStateForAction(action, state);
			break;
	}
	// if `nextState` is null or undefined. return `state`
	return nextState || state;
}

const initialAuthState = { isLoggedIn: false };

function auth (state = initialAuthState, action) {
	switch (action.type) {
		case 'Login':
			return { ...state, isLoggedIn: true };
		case 'Logout':
			return { ...state, isLoggedIn: false };
		default:
			return state;
	}
}

// Combining multiple functions
const AppReducer = combineReducers({
	nav,
	auth
});

export default AppReducer;