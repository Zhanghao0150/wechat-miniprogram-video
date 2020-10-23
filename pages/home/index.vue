<template>
	<view class="wrap">
		<view class="header">
			首页
		</view>
		<view class="list">
			<view class="item" @click="goInfo(item.name)" v-for="(item, index) in listData" :key="index" :style="'background-color: rgb('+ getRandom() +','+ getRandom() +','+ getRandom() +');'">
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
	import { getList } from '@/api/classification.js'
	export default {
		data(){
			return{
				listData:[]
			}
		},
		methods:{
			goInfo(name){
				console.log(name)
				uni.navigateTo({
					url:'../index/index?name='+name,
					success() {
						console.log('111')
					},
					fail(res) {
						console.log(222,res)
					}
					
				})
			},
			getRandom(){
				return parseInt(Math.random() * 10000 % 255)+1;
			}
		},
		async onLoad(ops) {
			const res = await getList();
			this.listData = res.data;
			console.log(this.listData.data);
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
		width: 360rpx;
		margin: 5rpx 6rpx;
		/* height:  420rpx; */
		background-color: rgb(30,159,255);
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
	.header{
		/* position: absolute; */
		top: 0;
		background-color: rgb(242,90,113);
		width: 100%;
		color: white;
		height: 160rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
