import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Echarts from 'native-echarts';
const {height, width} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/FontAwesome';


const styles = StyleSheet.create({
	container: {
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
});
const option = {
	title: {
		text: '平时成绩统计'
	},
	tooltip: {},
	legend: {
		data:['成绩']
	},
	xAxis: {
		data: ["小明","小红","小张","小王","大李","老吴"]
	},
	yAxis: {},
	series: [{
		name: '成绩',
		type: 'bar',
		data: [5, 20, 36, 10, 10, 20]
	}]
};
export default class Charts extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Echarts option={option} height={300} width={300}/>
				<Icon style={styles.close} onPress={this.props.close} name='remove' size={30} color="#000" />
			</View>
		)
	}
}



