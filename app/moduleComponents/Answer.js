/**
 * 抢答
 */
import React,{Component} from 'react';
import {StyleSheet, View, Text, Dimensions, Button, Image, TouchableOpacity,} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const {height, width} = Dimensions.get('window')

export default class Answer extends Component {
	constructor (props) {
		super(props)
		this.state = {
			text: '立即抢答',
			backgroundColor: '#1E90FF',
			color: '#fff'
		}
	}
	render() {
		return (
			<View style={styles.contaniner}>
				<Icon style={styles.close} onPress={this.props.close} name='remove' size={30} color="#000" />
				<TouchableOpacity activeOpacity={0.9} style={{
					backgroundColor: this.state.backgroundColor,
					height: 80,
					width: 80,
					borderRadius: 40,
					alignItems: 'center',
					justifyContent: 'center'
				}} onPress={() => {
					this.setState({
						text: '已抢答',
						backgroundColor: '#6C7B8B',
						color: '#aaa'
					})
				}}>
					<Text style={{color: this.state.color}}>{this.state.text}</Text>
				</TouchableOpacity>
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
	},
	text: {
		color: '#fff'
	},
	button: {
		backgroundColor: '#1E90FF',
		height: 80,
		width: 80,
		borderRadius: 40,
		alignItems: 'center',
		justifyContent: 'center'
	}
})