/**
 * 评论
 */

import React,{Component} from 'react';
import {StyleSheet, View, TextInput, Dimensions, Button,Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const {height, width} = Dimensions.get('window')

export default class Criticism extends Component {
	constructor (props) {
		super(props)
		this.state = {
			value: ''
		}
	}
	render() {
		return (
			<View style={styles.contaniner}>
				<TextInput
					ref="input1"
					blurOnSubmit={false}
					autoCorrect = {false}
					autoFocus={true}
					multiline={true}
					placeholder="请输入你的评价"
					keyboardType="default"
					onChangeText={(text) => {this.setState({
						value: text
					})}}
					underlineColorAndroid='transparent'
					style={styles.textInputStyle} />
				<Button style={styles.button } title="评论" onPress={() => {
					console.log(this.state.value)
					if (this.state.value) {
						this.refs.input1.clear()
						this.setState({
							value: ''
						})
						Alert.alert('提交成功')
					} else {
						Alert.alert('请输入内容')
					}
				}}/>
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
	},
	close: {
		position: 'absolute',
		right: 10,
		top: 10,
	},
	textInputStyle: {
		width: width - 20,
		height: 100,
		backgroundColor: '#eee',
		margin: 10,
		marginTop: 50,
		borderRadius: 10,
	},
	button: {
		width: 40,
		height: 30,
		borderRadius: 6,
		marginTop: 10
	}
})