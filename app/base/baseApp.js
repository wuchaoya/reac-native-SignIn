/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {StackNavigator} from "react-navigation";
import { Home, User, TabNav } from '../containers/index';
const SimpleApp = StackNavigator(
	{
		Nav: {
			screen: TabNav, // stack 嵌套 tab
			navigationOptions: {
				header: {
					title: '互助',
					style: {
						backgroundColor: '#fff'
					},
					backTitle: null
				}
			}
		},
	},
	{initialRouteName: 'Nav'});

export default SimpleApp;
