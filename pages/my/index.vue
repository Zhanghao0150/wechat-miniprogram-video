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
		<view class="list" v-if="!statementView">
			<button type="" hover-class="none" class="none-btn item" open-type="feedback">
				<view class="img-wrap">
					<image src="/static/images/my/pencil.png" mode=""></image>
				</view>
				<view class="item-title">
					意见反馈
				</view>
				<!-- 箭头 -->
				<view class="">
					>
				</view>
			</button>
			<button type="" class="none-btn item" open-type="contact" hover-class="none">
				<view class="img-wrap">
					<image src="/static/images/my/bulb.png" mode=""></image>
				</view>
				<view class="item-title">
					联系客服
				</view>
				<!-- 箭头 -->
				<view class="">
					>
				</view>
			</button>
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
			<view class="item" @click="showStatementView">
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
		<view class="statement-view list" v-else style="color: rgb(149,149,150);">
			<view class="item" style="margin: 0 20rpx;">
				<view class="item-title" style="text-align: center;">
					关于我们
				</view>
			</view>
			<view class="item" style="margin: 0 20rpx;flex-direction: row;height: auto; flex-wrap: wrap;font-size: 28rpx;">
				<view class="item-title"  style="width: 100%;">
					<text>\n1,本程序提供的在线资源均来自于网络，如有侵犯您的权益，请及时联系在线客服删除\n\n</text>
					<text>2,本程序仅供交流学习使用，请勿用于非法用途。如用于非法用途，请自行承担后果\n\n</text>
					<text>3,最终解释权归本小程序作者团队所有。\n\n</text>
				</view>
			</view>
			<view class="item"  style="margin: 0 20rpx;" @click="confirm">
				<view class="item-confirm">
					我知道了
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { host } from '@/api/request.js'
	export default{
		data(){
			return{
				statementView:false
			}
		},
		methods:{
			showStatementView() {
				this.statementView = true
			},
			contactauthor(){
				uni.previewImage({
					current:1,
					urls:[host + '/static/contactauthor.png?day='+new Date().getDay()]
				})
			},
			confirm(){
				this.statementView = false
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
		display: flex;
		align-items: center;
		justify-content: center;
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
	.item-confirm{
		width: 60%;
		background-color: rgb(242,90,113);
		color: white;
		font-size: 40rpx;
		margin-left: 20%;
		text-align: center;
		border-radius: 40rpx;
	}
</style>
