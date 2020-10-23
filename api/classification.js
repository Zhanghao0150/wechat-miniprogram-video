import request from './request.js'
// 分类
export async function getCateList(){
	return await request({
		url:'/api/cate/list'
	})
}
// 列表
export async function getList(data){
	return await request({
		url:'/api/info/list',
		data
	})
}