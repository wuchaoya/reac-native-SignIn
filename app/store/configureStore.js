import { createStore, applyMiddleware, compose} from 'redux';
import {createLogger} from 'redux-logger'; // 利用redux-logger打印日志
import thunk from 'redux-thunk'; // redux-thunk 支持 dispatch function，并且可以异步调用它




import { middleware } from '../util/redux';

// 调用日志打印方法
const loggerMiddleware = createLogger();

// 创建中建件集合
const middlewares = [middleware, loggerMiddleware, thunk];

// 利用compose增强store

let finalCreateStore = compose(
	applyMiddleware(...middlewares),
)(createStore);

export default finalCreateStore