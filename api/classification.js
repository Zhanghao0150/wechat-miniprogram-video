import request from './request.js'
// 分类
export async function getCateList(){
	const _this = this;
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
