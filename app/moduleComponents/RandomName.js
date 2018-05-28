/**
 * 提问
 */

import React,{Component} from 'react';
import {StyleSheet, View, Text, Dimensions, Button, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Rand from '../util/Rand';
import icon0 from '../assets/0.jpg';
import icon1 from '../assets/1.jpg'
import icon2 from '../assets/2.jpg'
import icon3 from '../assets/3.jpg'
import icon4 from '../assets/4.jpg'
import icon5 from '../assets/5.jpg'


const {height, width} = Dimensions.get('window');
const nameArr = [
	{
		name: '舔不知屎',
		icon: icon0
	},
	{
		name: '扛枪灭婊',
		icon: icon1
	},
	{
		name: '半醉人间',
		icon: icon2
	},
	{
		name: '福尔康',
		icon: icon3
	},{
		name: '赵日天',
		icon: icon4
	},{
		name: '窃·格瓦拉',
		icon: icon5
	}
]
export default class RandomName extends Component {
	constructor (props) {
		super(props)
		this.state = {
			nameArr: nameArr,
			name: '小明',
			buttonDisabled: false,
			icon: icon0
		}
	}
	render() {
		return (
			<View style={styles.contaniner}>
				<Image style={styles.icon} source={this.state.icon}/>
				<Text style={styles.text}>{this.state.name}</Text>
				<Button disabled={this.state.buttonDisabled} title="开始" onPress={() => {
					let randTime = setInterval(() => {
						let number = Rand(this.state.nameArr.length) - 1
						this.setState({
							name: this.state.nameArr[number].name,
							icon: this.state.nameArr[number].icon,
							buttonDisabled: true
						})
					}, 200)
					setTimeout(() => {
						clearInterval(randTime);
						this.setState({
							buttonDisabled: false
						})
					}, 6000)
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
		justifyContent: 'center'
	},
	text: {
		fontSize: 12,
		color: '#000',
		marginBottom: 20
	},
	icon: {
		height: 160,
		width: 160
	},
	close: {
		position: 'absolute',
		right: 10,
		top: 10,
	}
})