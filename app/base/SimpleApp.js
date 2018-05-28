/**
 * Created by chao on 2018/5/18.
 */

import { StackNavigator} from 'react-navigation';
import { connect } from 'react-redux';

import {Login,} from '../Components';
const SimpleApp = StackNavigator(
	{
		Login: {
			screen: Login,
			navigationOptions: {
				title: '',//设置标题
				header: null,//设置一些导航的属性,null为隐藏
				headerTitle: '登录',//设置导航栏标题
				headerBackTitle: null,//设置跳转页面左侧返回箭头后面的文字
				headerTruncatedBackTitle: '返回',
			}
		},
	},
	{initialRouteName: 'Login'}
)


export default connect()(SimpleApp);