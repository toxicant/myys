let url = ''
if (process.env.NODE_ENV === 'development') {
	url = "/api"
} else {
	// #ifdef APP-PLUS
	url = 'http://flt.78654321.com/'
	// url = 'https://htzl.fun/'
	// #endif

	// #ifdef H5
	url = 'http://flt.78654321.com/'
	// #endif

}

export const baseUrl = url;
let whiteArr = []
export function http(url, data, header = {
	'content-type': 'application/x-www-form-urlencoded',
	'token': uni.getStorageSync('token') || '',
}, method = 'POST') {
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseUrl + url,
			data,
			header,
			method,
			success: (res) => {
				if (res.statusCode == 0) {

					reject(res.data.msg);
				}
				if (res.statusCode == 401) {
					uni.navigateTo({
						url: "/pages/login/index"
					})
					reject(res.data.msg);
				}
				if (res.statusCode == 200) {
					if (res.data.code == 1) {
						
						resolve(res.data.data)
					} else if (res.data.code == 2) {
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						})
						resolve(res.data.data)
					} else if (res.data.code == 0) {
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						})
						reject(res.data.msg)
					} else if (res.data.code == 401) {
						uni.navigateTo({
							url: "/pages/login/index"
						})
						reject(res.data.msg);
					}
				} else {
					// uni.showToast({
					// 	title: "活动火爆进行中,请稍后重试!",
					// 	icon: 'none'
					// })
				}
			},
			fail: (res) => {
				// uni.showToast({
				// 	title: '活动火爆进行中,请稍后重试!',
				// 	icon: 'none'
				// })
			},
			complete: () => {

			}
		});
	})
}