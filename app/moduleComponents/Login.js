/**
 * 登录
 */

import React, { Component } from 'react'
import {StyleSheet, TouchableOpacity, View,  TextInput, Dimensions, Text } from 'react-native';
import DeviceStorage from '../util/DeviceStorage';

const {width, height} = Dimensions
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
					<Text>登录</Text>
				</View>
				<TextInput style={style.input} ref="input1"
				           blurOnSubmit={false}
				           autoCorrect = {false}
				           autoFocus={true}
				           multiline={true}
				           placeholder="请输入你的账号"
				           keyboardType="default"
				           onChangeText={(number) => {this.setState({
					           number: number
				           })}}
				           underlineColorAndroid='transparent' />
				<TextInput style={style.input} ref="input2"
				           blurOnSubmit={false}
				           autoCorrect = {false}
				           autoFocus={true}
				           multiline={true}
				           placeholder="请输入你的密码"
				           keyboardType="default"
				           secureTextEntry={true}
				           onChangeText={(passWord) => {this.setState({
					           passWord: passWord
				           })}}
				           underlineColorAndroid='transparent' />
				<TouchableOpacity onPress={
					() => {
							let userInfo
								DeviceStorage.get('userInfo').then((data) => {
								console.log(data)
									userInfo= data
									console.log(this.state)
									if(userInfo.number == this.state.number && userInfo.passWord == this.state.passWord) {
										console.log('登录成功')
										this.props.func()
									}
								})
						
						}
				} style={style.Button}>
					<Text>登录</Text>
				</TouchableOpacity>
				<Text onPress={() => this.props.func2()} style={style.textButton}>
					注册
				</Text>
			</View>
		)
	}
}