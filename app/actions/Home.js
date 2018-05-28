/**
 * Created by chao on 2018/3/21.
 */
export function   fetchData(isRefreshing , loading, isLoadMore = false) {
	console.log('ActionTypes.HOME_FETCH');
	return {
		type: ActionTypes.HOME_FETCH,
		isRefreshing,
		loading,
		isLoadMore
	};
}
//请求结束 发送action
export function receiveData(data) {
	console.log('ActionTypes.HOME_RECEIVE');
	return {
		type: ActionTypes.HOME_RECEIVE,
		data,
	};
}
//请求数据的action
export function requestData(url,params){
	console.log('ActionTypes.HOME_REQUEST');
	console.log('home url',url);
	console.log('home params',params);
	return {
		type: ActionTypes.HOME_REQUEST,
		url,
		params
	};
}
//请求数据的action
export function ClickNotification(){
	return {
		type: ActionTypes.HOME_NOTIFICATION,
	};
}