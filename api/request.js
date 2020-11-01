const host = 'https://www.aabb123456.com'
import Vue from 'vue'
export default function request({url, header, data, method}){
	let pData = {};
	if(url != '/api/user/init') {
		pData = {
			appid:Vue.prototype.$appid,
			token:Vue.prototype.$token
		}
	}
	const is_success_message = function(res){
		return res.data.code == 0;
	}
	const msg = function(res) {
		uni.showToast({
			title:res.data.msg,
			icon:'none'
		})
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
				msg(res);
				reject(res);
			}
		})
	});
}
export{
	host
}