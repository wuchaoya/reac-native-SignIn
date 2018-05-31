/**
 * 讨论
 */
import React,{Component} from 'react';
import {StyleSheet, View, Text, Dimensions, Button, Image, TextInput,TouchableOpacity,SectionList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const {height, width} = Dimensions.get('window')

export default class Discussion extends Component {
	constructor (props) {
		super(props)
		this.state = {
			textList: [
				{text: '你好'}
			],
		}
	}
	render() {
		return (
			<View style={styles.contaniner}>
				<Icon style={styles.close} onPress={this.props.close} name='remove' size={30} color="#000" />
				<View style={styles.textBox}>
					{this.state.textList.map(function (item, i) {
						return <Text key={i} style={styles.text}>{item.text}</Text>
					})}
				</View>
				<TextInput ref="input2"
				           style={styles.input}
				           value={this.state.text}
				           blurOnSubmit={false}
				           autoCorrect = {false}
				           autoFocus={true}
				           multiline={true}
				           keyboardType="default"
				           onChangeText={(text) => {this.setState({
					           text: text
				           })}}
				           underlineColorAndroid='transparent' />
				<TouchableOpacity onPress={() => {
					let data = this.state.textList
					data.push({text: this.state.text})
					this.setState({
						textList: data,
						text: ''
					})
					
				}} style={styles.button}>
					<Text>发送</Text>
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
		backgroundColor: '#CCCCCC',
		alignItems: 'center',
		justifyContent: 'center'
	},
	close: {
		position: 'absolute',
		right: 10,
		top: 10,
	},
	input: {
		width: width - 100,
		height: 40,
		position: 'absolute',
		bottom: 80,
		left: 20,
		backgroundColor: '#EDEDED',
		borderRadius: 8,
	},
	button: {
		height: 40,
		width: 50,
		position: 'absolute',
		bottom: 80,
		right: 20,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#1E90FF',
		borderRadius: 4,
	},
	buttonText: {
		color: '#fff',
		fontSize: 12
	},
	textStyle: {
		height: 60,
		backgroundColor: "#ffffff",
		width: width
	},
	textBox: {
		height: height,
		width: width,
		position: 'absolute',
		top: 40,
		left:0,
	},
	text: {
		height: 30,
		width: 40,
		marginLeft: 10,
		marginTop: 4
		},
})