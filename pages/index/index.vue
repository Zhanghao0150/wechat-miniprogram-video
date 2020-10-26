<template>
	<view class="content">
		<view class="header" style="position: fixed;">
			<view class="about">
				图片收集自网络
			</view>
			<view class="">
				{{title}}
			</view>
			<view class="return-btn" @click="$ret">
				<image src="/static/return.png" mode="" style="width: 48rpx;height: 48rpx;"></image>
			</view>
		</view>
		<view class="header-mark" />
		<view class="" v-for="(item,index) in imgs" :key="index" @click="checkList(item)">
			<view class="item">
				<image :src="item.Picture" mode="aspectFill"></image>
			</view>
		</view>
		<rich-text :nodes="content" class="img-list"></rich-text>
	</view>
</template>

<script>
	import { getList } from '@/api/classification.js'
	export default {
		data() {
			return {
				title: 'Hello',
				imgs:[],
				// cate_id
				cate_id: 0,
				title:'',
				content:''
			}
		},
		async onLoad(ops) {
			const { name, id } = ops;
			this.cate_id = id;
			this.title = name;
			// uni.setNavigationBarTitle({title:`${name}`})
			const res = await this.getImgList();
		},
		methods: {
			checkList(item){
				// const list = imgs.slice(id,-1);
				const { Content } = item
				const imgList = Content.match(new RegExp('<img src="(.*?)"','g'));
				for(const i in imgList){
					imgList[i] = imgList[i].replace('<img src="','').replace('"','')
				}
				// const imgList = list.getElementsByTagNameNS('img');
				uni.previewImage({
					current:0,
					urls:imgList,
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
				this.imgs = res.data.data;
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
		width:371rpx;
		margin: 0.5rpx 1rpx;
		display: flex;
		justify-content: center;
	}
	image{
		width:371rpx;
	}
	.img-list div,.img-list view{
		display: flex;
		flex-wrap: wrap;
	}
	.img-list p{
		width:345rpx;
		margin: 5rpx 15rpx;
	}
</style>
