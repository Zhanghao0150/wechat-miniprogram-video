 const host = 'https://www.aabb123456.com'
 import Vue from 'vue'
 function is_success_message(res){
	return res.data.code == 0;
}
function msg(res) {
	uni.showToast({
		title:res.data.msg,
		icon:'none'
	})
}
export default function request({url, header, data, method}){
	let pData = {};
	if(url != '/api/user/init') {
		pData = {
			appid:Vue.prototype.$appid,
			token:Vue.prototype.$token
		}
	}
	return new Promise((resolve, reject) => {
		uni.request({
			url: host+url,
			data:{
				...data,
				...pData
			},
			header,
			method:method||'POST',
			success(res){
				if(is_success_message(res)){
					resolve(res.data)
				} else {
					reject(res.data)
				}
			},
			fail(res) {
				msg(res)
				reject(res);
			}
		})
	});
}