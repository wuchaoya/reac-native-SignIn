import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View,  } from 'react-native';
import { getLocation } from '../util/GetLocation';
import Rand from '../util/Rand';
import { UtensilButton, RandomName, Charts, Criticism, Discussion, Answer} from '../moduleComponents';

type Props = {
	navigation: PropTypes.object.isRequired,
}
export default class Home extends Component<Props> {
	constructor (props) {
		super(props)
		this.state = {
			randomName: false,
			charts: false,
			criticism: true,
			discussion: false,
			answer: false
		}
	}
	render () {
		let { navigation } = this.props;
		return (
			<View style={styles.container} onPress={()=> console.log(2)}>
				<UtensilButton name="android" title='提问' onPress={()=>{
					this.setState({
						randomName: true
					})
				}}/>
				<UtensilButton name="signal" title='统计' onPress={()=> {
					this.setState({
						charts: true
					})
				
				}}/>
				<UtensilButton name="child" title='抢答' onPress={()=> {
					this.setState({
						answer: true
					})
				}}/>
				<UtensilButton  name="thumbs-o-up" title='评价' onPress={()=> {
					this.setState({
						criticism: true
					})
				}}/>
				<UtensilButton name="comment" title='讨论' onPress={()=> {
					this.setState({
						discussion: true
					})
				}}/>
				{this.state.randomName ? <RandomName close={() => this.setState({randomName: false})} /> : null}
				{this.state.charts ? <Charts close={() => this.setState({charts: false})} /> : null}
				{this.state.criticism ? <Criticism close={() => this.setState({criticism: false})} /> : null}
				{this.state.discussion ? <Discussion close={() => this.setState({discussion: false})} /> : null}
				{this.state.answer ? <Answer close={() => this.setState({answer: false})} /> : null}
			
			
			</View>
		)
	}
	
	componentDidMount () {
		getLocation()
		console.log(Rand(100));
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#F5FCFF',
		flexWrap:'wrap',
	},
	loginButton: {
		fontSize: 20,
		width: 50,
		height: 30
	},
});

Home.navigationOptions = {
	title: '首页'
}