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
	export default {
		data() {
			return {
				title: 'Hello',
				imgs
			}
		},
		onLoad(ops) {
			const { id } = ops;
			uni.setNavigationBarTitle({title:`分类${id}`})
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
