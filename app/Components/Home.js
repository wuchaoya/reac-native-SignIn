import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View,  } from 'react-native';
import { getLocation } from '../util/GetLocation';
import Rand from '../util/Rand';

type Props = {
	navigation: PropTypes.object.isRequired,
}
export default class LoginScreen extends Component<Props> {
	
	render () {
		let { navigation } = this.props;
		return (
			<View style={styles.container}>
				<Button
					style={styles.loginButton}
					onPress={() => navigation.dispatch({ type: 'Login' })}
					title="登录"
				/>
			</View>
		)
	}
	
	componentDidMount () {
		getLocation()
		console.log(Rand(100));
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	loginButton: {
		fontSize: 20,
		width: 50,
		height: 30
	},
});

LoginScreen.navigationOptions = {
	title: '首页'
}