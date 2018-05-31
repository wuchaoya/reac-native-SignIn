/**
 * 用户信息
 */
import React, { Component } from 'react'
import { Image, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import userIcon from '../assets/5.jpg';
import DeviceStorage from '../util/DeviceStorage';
const style = StyleSheet.create({
	userIconStyle: {
		height: 100,
		width: 100,
		marginTop: 30,
		borderRadius: 40,
	},
	content: {
		alignItems: 'center',
	},
	name: {
		color: '#111',
		fontSize: 14,
		marginTop: 20
	},
	Button: {
		backgroundColor: '#e5e5e5',
		marginTop: 250,
	},
	ButtonText: {
		color: '#000'
	}
})

export default class UserInfo extends Component {
	
	state = {
		name: '未登录',
		icon: userIcon
	}
	
	 componentDidMount() {
		 DeviceStorage.get('userInfo').then((data) => {
		 	this.setState({
			  name: data.name
		  })
		 })
		 
	}
	
	componentWillUnmount() {
	
	}
	
	
	render() {
		return (
			<View style={style.content}>
				<Image style={style.userIconStyle} source={this.state.icon}></Image>
				<Text style={style.name}>{this.state.name}</Text>
				<TouchableOpacity activeOpacity={0.9} style={style.Button}  onPress={() =>this.props.func()}>
					<Text style={style.ButtonText}>退出登录</Text>
				</TouchableOpacity>
			</View>
		)
	}
}



