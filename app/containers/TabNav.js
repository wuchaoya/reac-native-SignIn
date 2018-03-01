/**
 * Created by chao on 2018/2/27.
 */


import { TabNavigator, TabBarBottom } from 'react-navigation';
import { Home, User} from './index'
export default TabNavigator(
	{
		Home: { screen: Home },
		Settings: { screen: User },
	},
	{
		tabBarOptions: {
			activeTintColor: 'tomato',
			inactiveTintColor: 'gray',
			
			tabStyle: {
				backgroundColor: '#fff',
				justifyContent: 'center',
				alignItems: 'center',
				height: 16
			},
			labelStyle: {
				backgroundColor: '#000',
				justifyContent: 'center',
				alignItems: 'center',
				textAlign: 'center',
				height: '100%',
			}
		},
		tabBarComponent: TabBarBottom,
		tabBarPosition: 'bottom',
		animationEnabled: false,
		swipeEnabled: false,
		activeTintColor: 'green',//活动选项卡的标签和图标颜色
		activeBackgroundColor: '',//活动选项卡的背景颜色。
		inactiveTintColor: '', //非活动选项卡的标签和图标颜色。
		inactiveBackgroundColor: '', //- 非活动选项卡的背景颜色。
	}
)
