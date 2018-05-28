/**
 * 讨论
 */
import React,{Component} from 'react';
import {StyleSheet, View, Text, Dimensions, Button, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const {height, width} = Dimensions.get('window')

export default class Discussion extends Component {
	constructor (props) {
		super(props)
		this.state = {
		}
	}
	render() {
		return (
			<View style={styles.contaniner}>
				<Icon style={styles.close} onPress={this.props.close} name='remove' size={30} color="#000" />
			</View>
		)
	}
	
}

const styles = StyleSheet.create({
	contaniner: {
		height: height,
		width: width,
		position: 'absolute',
		top: 0,
		left:0,
		backgroundColor: 'rgba(255, 255, 255, 0.9)',
		alignItems: 'center',
		justifyContent: 'center'
	},
	close: {
		position: 'absolute',
		right: 10,
		top: 10,
	}
})