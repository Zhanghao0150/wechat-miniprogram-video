import request from './request.js'
export async function getList(){
	return await request({
		url:'/api/cate/list'
	})
}