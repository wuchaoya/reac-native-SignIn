import React, { Component } from 'react'
import {View, StyleSheet } from 'react-native'
import { UserInfo, Login, Register } from '../moduleComponents'
export default class User extends Component {
	static navigationOptions = { title: 'Circle' }
	state = {
		status: 2
	}
	_render (type) {
		switch (type) {
			case 1 :
				return <UserInfo func={() => {
					this.setState({
						status: 2
					})
				}}/>
			case 2 :
				return <Login func={() => {
					this.setState({
						status: 1
					})
				}} func2={() => {
					this.setState({
						status: 3
					})
				}
				}/>
			case 3 :
				return <Register func={() => {
					this.setState({
						status: 2
					})
				}}
				 func2={() =>{
					 this.setState({
						 status: 2
					 })
				 }}
				/>
		}
		
	}
	render() {
		return (
			<View>
				{this._render(this.state.status)}
			</View>
		)
	}
}
User.navigationOptions = {
  title: '我的',
};

