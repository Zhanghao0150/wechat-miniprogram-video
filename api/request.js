 const host = 'https://www.aabb123456.com'
 
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
	return new Promise((resolve, reject) => {
		uni.request({
			url: host+url,
			data,
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