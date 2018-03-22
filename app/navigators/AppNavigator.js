import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator} from 'react-navigation';

import LoginScreen from '../Components/LoginScreen';
import MainScreen from '../Components/MainScreen';
import ProfileScreen from '../Components/ProfileScreen';
import { addListener } from '../util/redux';

export const AppNavigator = StackNavigator({
  Login: { screen: LoginScreen },
  Main: { screen: MainScreen },
  Profile: { screen: ProfileScreen }
});

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