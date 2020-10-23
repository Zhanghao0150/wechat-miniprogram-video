<template>
	<view class="content">
		<view class="" v-for="(item,index) in imgs" :key="index">
			<view class="item" @click="checkList(index)">
				<image :src="item.src" mode="aspectFill"></image>
			</view>
		</view>
	</view>
</template>

<script>
	import {imgs} from '@/api/images.js'
	import { getList } from '@/api/classification.js'
	export default {
		data() {
			return {
				title: 'Hello',
				imgs,
				// cate_id
				cate_id: 0,
			}
		},
		async onLoad(ops) {
			const { name, id } = ops;
			this.cate_id = id;
			uni.setNavigationBarTitle({title:`${name}`})
			const res = await this.getImgList();
		},
		methods: {
			checkList(id){
				// const list = imgs.slice(id,-1);
				const list =[]
				imgs.map((item)=>{
					list.push(item.src)
				})
				uni.previewImage({
					current:id,
					urls:list,
					success(){
						console.log(111)
					},
					fail(res){
						console.log(222,res)
					}
				})
			},
			async getImgList(){
				const res = await getList({
					page:this.pageNo,
					pageSize:this.pageSize,
					cate_id: this.cate_id
				});
				console.log(res);
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-wrap: wrap;
	}
	.item{
		width:345rpx;
		margin: 16rpx 15rpx;
	}
	image{
		width: 345rpx;
	}
</style>
