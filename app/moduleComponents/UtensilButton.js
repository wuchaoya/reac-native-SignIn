/**
 * 功能图标
 */

import React,{Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class UtensilButton extends Component {
	constructor (props) {
		super(props)
		this.state = {}
	}
	render() {
		return (
			<TouchableOpacity style={styles.container}  onPress={this.props.onPress}>
				<View style={styles.button}>
					<Icon name={this.props.name} size={30} color="#fff" />
				</View>
				<Text style={styles.text}>{this.props.title}</Text>
			</TouchableOpacity>
		)
	}
	
}

const styles = StyleSheet.create({
	container: {
	 margin: 40,
		alignItems: 'center',
	},
	button: {
		width: 40,
		height: 40,
		borderRadius: 8,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'orange',
		marginBottom: 4
	},
	text: {
		fontSize: 12,
		color: '#000',
	}
})