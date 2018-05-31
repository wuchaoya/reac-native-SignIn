import React, { Component } from 'react'
import { Image, StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import { MapView, Location,Initializer } from 'react-native-baidumap-sdk'
import icon from '../assets/ic_my_location.png'
Initializer.init()
const style = StyleSheet.create({
	button: {
		position: 'absolute',
		right: 16,
		bottom: 16,
		backgroundColor: '#fff',
		borderRadius: 40,
		elevation: 2,
	},
	icon: {
		width: 24,
		height: 24,
		margin: 12,
		tintColor: '#616161',
	},
  letButton: {
	  position: 'absolute',
	  left: 16,
	  bottom: 16,
	  backgroundColor: '#fff',
	  borderRadius: 40,
	  elevation: 2,
    width:60,
    height: 60,
    backgroundColor: '#4397EB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
	  color: '#fff'
  }
})

export default class Coding extends Component {
	static navigationOptions = { title: '签到' }
	
	state = {
	  text: '签到'
  }
	
	async componentDidMount() {
		await Location.init()
		Location.setOptions({ gps: true })
		this.listener = Location.addLocationListener(location => {
		  console.log(location)
			this.setState({ location })
			this.mapView.setStatus({ center: this.state.location }, 1000)
		})
		Location.start()
  
	}
	
	componentWillUnmount() {
		Location.stop()
		this.listener.remove()
	}
	
	location = () => this.mapView.setStatus({ center: this.state.location }, 1000)
	
	render() {
		return (
      <View style={StyleSheet.absoluteFill}>
        <MapView
          ref={ref => this.mapView = ref}
          style={StyleSheet.absoluteFill}
          zoomLevel={18}
          location={this.state.location}
          locationEnabled
          zoomControlsDisabled
        />
        <View style={style.button}>
          <TouchableOpacity refs="gps" onPress={this.location}>
            <Image style={style.icon} source={icon} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity activeOpacity={0.9} style={style.letButton}  onPress={() => {this.setState({text: '已签到'})}}>
          <Text style={style.text}>{this.state.text}</Text>
        </TouchableOpacity>
      </View>
		)
	}
}
