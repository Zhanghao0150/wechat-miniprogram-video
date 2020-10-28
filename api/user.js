import request from './request.js'
import Vue from 'vue'
// 分类
export async function init(){
	return await request({
		url:'/api/user/init',
		data:{
			appid:Vue.prototype.$appid
		}
	})
}