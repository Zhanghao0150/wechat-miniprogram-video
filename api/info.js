import request from './request.js'
// 视频详情 
export async function getVideoList(data){
	return await request({
		url:'/api/info/detail',
		data
	})
}
// 图片详情
export async function getImgDetail(data){
	return await request({
		url:'/api/info/detail',
		data
	})
}

// 列表
export async function getImgList(data){
	return await request({
		url:'/api/info/list',
		data
	})
}
