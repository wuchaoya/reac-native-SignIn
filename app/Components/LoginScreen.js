import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View } from 'react-native';

type Props = {
	navigation: PropTypes.object.isRequired,
}
export default class LoginScreen extends Component<Props> {
	
	render () {
		let { navigation } = this.props;
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>
					Screen A
				</Text>
				<Text style={styles.instructions}>
					This is great
				</Text>
				<Button
					onPress={() => navigation.dispatch({ type: 'Login' })}
					title="Log in"
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
});

LoginScreen.navigationOptions = {
	title: 'Log In'
}