
import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';


type Props = {
	name: PropTypes.string.isRequired ,
}
export default class Title extends Component<Props> {
	
	render () {
		const { name } = this.props;
		return (
			<Text style={styles.titleText}>{name}</Text>
		)
	}
}

const styles = StyleSheet.create({
	titleText: {
		color: '#000',
		fontSize: 16,
		fontWeight: '800',
		
	}
})