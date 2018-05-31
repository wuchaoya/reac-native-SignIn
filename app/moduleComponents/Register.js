/**
 * 注册
 */

import React, { Component } from 'react'
import {StyleSheet, TouchableOpacity, View,  TextInput, Dimensions, Text } from 'react-native';
import DeviceStorage from '../util/DeviceStorage';

const {height, width} = Dimensions;
const style = StyleSheet.create({
	input: {
		width: width - 40,
		height: 40,
		marginLeft: 20,
		marginRight: 20,
		marginTop: 20,
		borderRadius: 4,
		backgroundColor: '#e5e5e5'
	},
	Button: {
		marginLeft: 40,
		marginRight: 40,
		backgroundColor: '#634CDB',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 30,
		height: 40,
		borderRadius: 8
	},
	content: {
		marginTop: 100
	},
	title: {
		width: width,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 10
	},
	titleText: {
		color: '#000',
		fontSize: 16
	},
	textButton: {
		marginLeft: 20,
		marginTop: 20,
		color: '#32CD32'
	}
})

export default class Login extends Component {
	constructor (props) {
		super(props)
		this.state = {
		
		}
	}
	
	
	
	componentDidMount() {
	
	
	}
	
	componentWillUnmount() {
	
	}
	
	
	render() {
		return (
			<View style={style.content}>
				<View style={style.title}>
					<Text>注册</Text>
				</View>
				<TextInput ref="input1"
				           style={style.input}
				           blurOnSubmit={false}
				           autoCorrect = {false}
				           autoFocus={true}
				           multiline={true}
				           placeholder="请输入学号/工号"
				           keyboardType="default"
				           onChangeText={(number) => {this.setState({
					           number: number
				           })}}
				           underlineColorAndroid='transparent' />
				<TextInput ref="input2"
				           style={style.input}
				           blurOnSubmit={false}
				           autoCorrect = {false}
				           autoFocus={true}
				           multiline={true}
				           placeholder="请输入你的姓名"
				           keyboardType="default"
				           onChangeText={(name) => {this.setState({
					           name: name
				           })}}
				           underlineColorAndroid='transparent' />
				
				<TextInput ref="input2"
				           style={style.input}
				           blurOnSubmit={false}
				           autoCorrect = {false}
				           autoFocus={true}
				           multiline={true}
				           placeholder="请输入密码"
				           keyboardType="default"
				           secureTextEntry={true}
				           onChangeText={(passWord) => {this.setState({
					           passWord: passWord
				           })}}
				           underlineColorAndroid='transparent' />
				<TouchableOpacity onPress={() => {
					console.log(this.state)
						 DeviceStorage.save('userInfo',this.state)
						this.props.func()
				}} style={style.Button}>
					<Text>注册</Text>
				</TouchableOpacity>
				<Text onPress={() => this.props.func2()} style={style.textButton}>
					登录
				</Text>
			</View>
		)
	}
}