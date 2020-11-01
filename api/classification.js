import request from './request.js'
// 分类
export async function getCateList(){
	return await request({
		url:'/api/cate/list'
	})
}
