<template>
	<view class="w-1028-wrap">
		<view class="tools-bar">
			<view class="ret" @click="retClick"></view>
			<view class="share">
				<view class="share-img"></view>
				<view class="">
					<button  type="" class="share-btn" hover-class="none"  open-type="share">发送给好友</button>
				</view>
			</view>	
		</view>
		<swiper @change="changeEventHandle" :current="current"  class="swiper-wrap"  :indicator-dots="false" :autoplay="false" :vertical="true">
			<swiper-item class="swiper-item" v-for="(item,index) in videoDataList" :key="index">
				<view class="video">
					<!-- <image :src="item.Picture" mode="aspectFill"></image> -->
					<video
					v-if="current == index"
					:controls="true"
					:show-play-btn="true"
					:id="'myVideo-' +index"
					@play="playEventHandle"
					:src="item.Url"
					:loop="true"
					></video>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import { getVideoList } from '@/api/info.js'
	import { mapState } from 'vuex'
	export default {
		data(){
			return {
				pageNo:1,
				pageSize:5,
				videoDataList:[],
				isTop:false,
				current:0,
				isChangeSwiper:false,
				isFirstShow:true,
				isIos:uni.getSystemInfoSync().system.toLowerCase().indexOf('ios') != -1
			}
		},
		methods:{
			playEventHandle(e){
				const {id} = e.target
				// console.log('e',e);
				if(this.videoContext!=null && this.isChangeSwiper){
					this.videoContext.stop()
					this.isChangeSwiper = false
				}
				this.$store.commit('setVideoContext', uni.createVideoContext(id))
				// this.videoContext = uni.createVideoContext(id)
			},
			async changeEventHandle(event){
				const {current, source} = event.detail
				this.current = current
				console.log('test2020111',current,source)
				this.isTop = current == 0 
				if(current == 0) {
					await this.getVideoListData()
				} else if(current == this.videoDataList.length-4) {
					await this.getVideoListData()
				}
				const id = 'myVideo-' + current
				const tmpContext = uni.createVideoContext(id)
				this.isChangeSwiper = true
				tmpContext.play()
			},
			retClick(){
				uni.switchTab({
					url:'../home/index',
					success() {
						uni.showTabBar({})
					}
				})
			},
			async getVideoListData(){
				let data = {
					cate_id:7
					}
				if(this.shareVideoId!=null){
					data['id'] = this.shareVideoId
					this.$store.commit('setShareVideoId',null)
				}
				const res = await getVideoList(data)
				let videoList = res.data || []
				if(!this.isTop){
					this.videoDataList = this.videoDataList.concat(videoList)
				} else {
					this.videoDataList = videoList.concat(this.videoDataList)
					this.current += videoList.length - 1
				}
			}
		},
		computed:{
			...mapState(['videoContext','shareVideoId'])
		},
		onShow() {
			// console.log(this.videoContext)
			if(!this.isFirstShow){
				this.isChangeSwiper = false
				this.$store.commit('setVideoContext', uni.createVideoContext('myVideo-' + this.current))
			}
			uni.hideTabBar({
			})
		},
		onLoad(ops) {
			this.getVideoListData()
			this.isFirstShow = false
			console.log(ops)
			if(ops.shareVideoId) {
				this.Id = shareVideoId
			}
		},
		mounted() {
			
		},
		onUnload(){
		},
		onShareAppMessage(){
			return{
				title:'hi，这边有你喜欢看的内容哦。',
				path:'/pages/home/index?shareVideoId=' + this.videoDataList[this.current].Id,
				imageUrl:this.videoDataList[this.current].Picture
			}
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
	.tools-bar{
		position: fixed;
		bottom: 90rpx;
		left: 80rpx;
		right: 80rpx;	
		display: flex;
		justify-content: space-between;
		align-items: center;
		z-index: 999;
	}
	.tools-bar view {
		position: relative;
	}
	.ret{
		width: 60rpx;
		height: 60rpx;
		background:url(../../static/images/return.png) no-repeat;
		background-size: 100% 100%;
	}
	.share{
		display: flex;
		color: white;
		font-size: 40rpx;
		align-items: center;
		/* border: 1px white solid; */
		border-radius: 14rpx;
		padding: 0 30rpx;
		background-color: rgb(65,168,99);
		z-index: 999;
	}
	.share-img{
		/* padding: 20rpx 20rpx; */
		/* margin: 20rpx 20rpx; */
		width: 40rpx;
		height: 40rpx;
		background:url(../../static/images/WeChat.png) no-repeat;
		background-size: cover;
	}
	.swiper-item{
		position: relative;
		z-index: -1;
		width: 100%;
		height: 100vh;
	}
	.swiper-wrap{
		width: 100%;
		height: 100vh;
	}
	image, .video, video{
		position: absolute;
		width: 100%;
		height: 100vh;
		z-index: 0;
	}
	.share-btn {
		border: none; 
		background-color: transparent;
		padding: 0;
		margin: 0;
		margin-left: 10rpx;
		font-weight: bold;
		color: white;
		outline: none;
		font-size: 30rpx;
	}
	.share-btn::after {
	  border: none;
	}

</style>
