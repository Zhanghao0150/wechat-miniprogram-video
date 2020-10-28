<template>
	<view class="w-1028-wrap">
		<view class="ret" @click="retClick">
			
		</view>
		<view class="share">
			<view class="share-img">
				
			</view>
			<view class="">
				分享给好友
			</view>
		</view>
	</view>
</template>

<script>
	import { getList } from '@/api/classification.js'
	export default {
		app(){
			return {
				pageNo:1,
				pageSize:20,
				isShow:true
			}
		},
		methods:{
			retClick(){
				uni.switchTab({
					url:'../home/index',
					success() {
						uni.showTabBar({})
					}
				})
			}
		},
		onShow() {
			// this.isShow = false
			uni.hideTabBar({
			})
			// this.$nextTick(()=>{
			// 	console.log(this);
			// 	this.isShow = true
			// })
		},
		async onLoad() {
			const res = await getList({
				page:this.pageNo,
				pageSize:this.pageSize,
				cate_id: 7
			})
			console.log(res);
		},
		onUnload(){
		}
	}
</script>

<style>
	page{
		background-color: black;
	}
	.w-1028-wrap{
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.ret{
		position: fixed;
		bottom: 90rpx;
		left: 80rpx;
		width: 60rpx;
		height: 60rpx;
		background:url(../../static/images/return.png) no-repeat;
		background-size: 100% 100%;
	}
	.share{
		position: fixed;
		bottom: 90rpx;
		right: 80rpx;	
		display: flex;
		color: white;
		font-size: 40rpx;
		align-items: center;
		/* border: 1px white solid; */
		border-radius: 50rpx;
		padding: 0 30rpx;
		background-color: rgb(65,168,99);
	}
	.share-img{
		/* padding: 20rpx 20rpx; */
		/* margin: 20rpx 20rpx; */
		width: 40rpx;
		height: 40rpx;
		background:url(../../static/images/share.png) no-repeat;
		background-size: cover;
	}
</style>
