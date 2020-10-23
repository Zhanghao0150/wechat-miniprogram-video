<template>
	<view class="wrap">
		<view class="list">
			<view class="item" @click="goInfo(item.id)" v-for="(item, index) in listData" :key="index">
				<image :src="item.icon" mode="" style="position: absolute;z-index: -1;width: 100%;height: 100%;"></image>
				<text>{{item.name}}</text>
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
			goInfo(index){
				console.log(index)
				uni.navigateTo({
					url:'../index/index?id='+index,
					success() {
						console.log('111')
					},
					fail(res) {
						console.log(222,res)
					}
					
				})
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
	.wrap{
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 100vh;
	}	
	.list{
		display: flex;
		flex-wrap: wrap;
	}
	.item{
		position: relative;
		display: flex;
		width: 345rpx;
		margin: 20rpx 15rpx;
		height:  420rpx;
		/* background-color: #007AFF; */
		border-radius: 15rpx;
		justify-content: center;
		align-items: center;
		/* background-repeat: no-repeat;
		background-size: 100% 100%; */
	}
	.item:nth-child(1){
		/* background-color: #4CD964; */
	}
</style>
