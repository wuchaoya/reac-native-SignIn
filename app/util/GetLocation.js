function getLocation () {
	navigator.geolocation.getCurrentPosition(
		location => {
			var result = "速度：" + location.coords.speed +
				"\n经度：" + location.coords.longitude +
				"\n纬度：" + location.coords.latitude +
				"\n准确度：" + location.coords.accuracy +
				"\n行进方向：" + location.coords.heading +
				"\n海拔：" + location.coords.altitude +
				"\n海拔准确度：" + location.coords.altitudeAccuracy +
				"\n时间戳：" + location.timestamp;
			console.log(result)
		},
		error => {
			console.log("获取位置失败："+ error)
		}, {
		// 提高精确度，但是获取的速度会慢一点
		enableHighAccuracy: true,
			// 设置获取超时的时间20秒
			timeout: 20000,
			// 示应用程序的缓存时间，每次请求都是立即去获取一个全新的对象内容
			maximumAge: 1000
	})
}

export {
	getLocation
}