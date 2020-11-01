<template>
	<view class="">
		<view class="header" style="position: fixed;">
			<view class="about">
				<open-data type="userNickName"></open-data>,祝您开心每一天~
			</view>
			<view class="avatar-content">
				<view class="avatar-wrap">
					<view class="avatar-img-wrap">
						<open-data type="userAvatarUrl"></open-data>
					</view>
				</view>
			</view>
			
		</view>
		<view class="header-mark" />
		<view class="list">
			<view class="item">
				<view class="img-wrap">
					<image src="/static/images/my/pencil.png" mode=""></image>
				</view>
				<view class="item-title">
					<button type="" hover-class="none" class="none-btn" open-type="feedback">意见反馈</button>
				</view>
				<!-- 箭头 -->
				<view class="">
					>
				</view>
			</view>
			<view class="item">
				<view class="img-wrap">
					<image src="/static/images/my/bulb.png" mode=""></image>
				</view>
				<view class="item-title">
					<button type="" class="none-btn" open-type="contact" hover-class="none">联系客服</button>
				</view>
				<!-- 箭头 -->
				<view class="">
					>
				</view>
			</view>
			<view class="item" @click="contactauthor">
				<view class="img-wrap">
					<image src="/static/images/my/msg.png" mode=""></image>
				</view>
				<view class="item-title">
					联系作者
				</view>
				<!-- 箭头 -->
				<view class="">
					>
				</view>
			</view>
			<view class="item" v-if="false">
				<view class="img-wrap">
					<image src="/static/images/my/notice.png" mode=""></image>
				</view>
				<view class="item-title">
					关于我们
				</view>
				<!-- 箭头 -->
				<view class="">
					>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { host } from '@/api/request.js'
	export default{
		methods:{
			contactauthor(){
				uni.previewImage({
					current:1,
					urls:[host + '/static/contactauthor.png']
				})
			}
		}
	}
</script>

<style>
	page{
		background-color: rgb(245,245,247);
	}
	.avatar-wrap{
		flex-grow: 1;
		width: 100%;
		height: 110rpx;
	}
	.avatar-img-wrap{
		width: 110rpx;
		height: 100%;
		overflow: hidden;
		border-radius: 50%;
	}
	.avatar-content{
		display: flex;
		align-items: center;
	}
	.title{
		width: 220rpx;
	}
	.list{
		margin: 40rpx 20rpx;
		display: flex;
		flex-direction: column;
		background-color: white;
		border-radius: 7px;
	}
	.item{
		display: flex;
		height: 100rpx;
		font-size: 32rpx;
		align-items: center;
		border-bottom: rgb(238,238,238) 1px solid;
	}
	.img-wrap{
		margin:0 10rpx;
		width: 40rpx;
		height: 40rpx;
	}
	
	.img-wrap image{
		width: 100%;
		height: 100%;
	}
	.item-title{
		margin: 0 10rpx;
		flex-grow: .9;
	}
	.item view:nth-child(3){
		flex-grow: .1;
	}
	
</style>
