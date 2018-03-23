import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, TabNavigator, TabBarBottom} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import LoginScreen from '../Components/Home';
import MainScreen from '../Components/coding';
import ProfileScreen from '../Components/User';
import { addListener } from '../util/redux';

export const AppNavigator = TabNavigator(
  {
    Login: { screen: LoginScreen },
    Main: { screen: MainScreen },
    Profile: { screen: ProfileScreen }
  },
	{
		navigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused, tintColor }) => {
				const { routeName } = navigation.state;
				let iconName;
				if (routeName === 'Login') {
					iconName = `ios-home-outline`;
				}else if(routeName == 'Main') {
					iconName = 'ios-finger-print-outline'
				}
				else if (routeName === 'Profile') {
					iconName = `md-person`;
				}
				
				// You can return any component that you like here! We usually use an
				// icon component from react-native-vector-icons
				return <Ionicons name={iconName} size={25} color={tintColor} />;
			},
		}),
		tabBarOptions: {
			activeTintColor: 'tomato',
			inactiveTintColor: 'gray',
		},
		tabBarComponent: TabBarBottom,
		tabBarPosition: 'bottom',
		animationEnabled: false,
		swipeEnabled: false,
	}
);

type Props = {
	dispatch: PropTypes.func.isRequired,
	nav: PropTypes.object.isRequired,
};
class AppWithNavigationState extends Component<Props> {

  render() {
    const { dispatch, nav } = this.props;
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch,
          state: nav,
          addListener,
        })}
      />
    )
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
})

export default connect(mapStateToProps)(AppWithNavigationState);