import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'react-native';
import { NavigationActions } from 'react-navigation';


type Props = {
	islogin: PropTypes.bool.isRequired,
	state: PropTypes.bool.isRequired
}
class CodingButton extends Component<Props> {
	constructor (props) {
		super(props)
		this.state = {
			state: props.state,
			title: this.props.isLogin ? (this.props.state ? '已签到' : '签到') : '请登录'
		}
	}
	render () {
		let { isLogin } = this.props;
		return (
			<Button
				title={this.state.title}
				onPress= {
				() => {
					if (isLogin) {
						this.setState({
							title: '已签到'
						})
					}
				}
			}/>
		)
	}
}

export default CodingButton;