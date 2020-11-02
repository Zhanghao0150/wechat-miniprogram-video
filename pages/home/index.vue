<template>
	<view class="wrap">
		<view class="header" style="position: fixed;">
			<view class="about">
				图片收集自网络
			</view>
			<view class="">
				首页
			</view>
		</view>
		<view class="header-mark" />
		<!-- <open-data type="userAvatarUrl"></open-data>
		<open-data type="userNickName"></open-data> -->
		<view class="list">
			<view class="item" @click="goInfo(item)" v-for="(item, index) in listData" :key="index">
				<view class="img">
					<image :src="item.icon" mode="aspectFill" style="width: 100%;height: 100%;"></image>
				</view>
				<view class="item-text">
					<text>{{item.name}}</text>
				</view>
			</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { getCateList } from '@/api/classification.js'
	export default {
		data(){
			return{
				listData:[]
			}
		},
		methods:{
			goInfo(item){
				if(item.id == 7) {
					uni.switchTab({
						url:'../video/index'
					})
				}else{
					uni.navigateTo({
						url:'../index/index?name='+item.name +"&id="+item.id,
						success() {
							// console.log('111')
						},
						fail(res) {
							// console.log(222,res)
						}
						
					})
				}
			},
			getRandom(){
				return parseInt(Math.random() * 10000 % 255)+1;
			}
		},
		async onLoad(ops) {
			await this.$init();
			const res = await getCateList();
			this.listData = res.data;
		}
	}
</script>

<style>
	page{
		 background-color: rgb(244,244,244);
	}
	.wrap{
		display: flex;
		flex-direction: column;
		/* justify-content: center; */
		/* height: 100vh; */
	}	
	.list{
		display: flex;
		flex-wrap: wrap;
	}
	.item{
		position: relative;
		display: flex;
		width: 371rpx;
		margin: 1rpx 1rpx;
		/* height:  420rpx; */
		/* background-color: rgb(30,159,255); */
		color: white;
		/* border-radius: 15rpx; */
		justify-content: center;
		align-items: center;
		/* background-repeat: no-repeat;
		background-size: 100% 100%; */
		flex-direction: column;
		overflow: hidden;
		font-size: 36rpx;
	}
	.img{
		width: 100%;
		height: 380rpx;
	}
	.item-text{
		position: absolute;
		bottom: 20rpx;
		left: 20rpx;
	}
	.item:nth-child(1){
		/* background-color: #4CD964; */
	}
</style>
