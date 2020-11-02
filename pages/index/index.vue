<template>
	<view class="content">
		<view class="header" style="position: fixed;">
			<view class="about">
				图片收集自网络
			</view>
			<view class="">
				{{title}}
			</view>
			<view class="return-btn" @click="indexRet">
				<image src="/static/return.png" mode="" style="width: 48rpx;height: 48rpx;"></image>
			</view>
		</view>
		<view class="header-mark" />
		<view class="" v-if="!isPreviewImg">
			<view class="content">
				<view class="item" v-for="(item,index) in imgs" :key="index" @click="checkList(item)">
					<image :src="item.Picture" mode="aspectFill"></image>
				</view>
			</view>
		</view>
		<view class=""v-if="isPreviewImg">
			<view v-if="index <= currentPageNo * 3" class="" v-for="(item,index) in imgs2" :key="index" @click="checkList(index)">
				<view class="item i2">
					<image :src="item" mode="widthFix"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { getImgList, getImgDetail} from '@/api/info.js'
	export default {
		data() {
			return {
				title: 'Hello',
				imgs:[],
				imgs2:[],
				isPreviewImg:false,
				// cate_id
				cate_id: 0,
				title:'',
				content:'',
				pageNo:1,
				pageSize:20,
				isNext:false,
				currentPageNo:1
			}
		},
		computed:{
			img2L(){
				return   parseInt(this.imgs2.length / 3) + 1
			}
		},
		async onLoad(ops) {
			const { name, id } = ops;
			this.cate_id = id;
			this.title = name;
			// uni.setNavigationBarTitle({title:`${name}`})
			const res = await this.getImgListData();
		},
		onReachBottom(){
			if(this.img2L > this.currentPageNo) {
				this.currentPageNo += 1
				console.log(this.currentPageNo)
			}
		},
		methods: {
			indexRet(){
				if(this.isPreviewImg) {
					this.isPreviewImg = false
				} else {
					this.$ret();
				}
			},
			checkList(item){
				if(!this.isPreviewImg){
					const { Content } = item
					const imgList = Content.match(new RegExp('<img src="(.*?)"','g'));
					for(const i in imgList){
						imgList[i] = imgList[i].replace('<img src="','').replace('"','')
					}
					console.log(imgList);
					console.log('length', imgList.length);
					this.imgs2 = Array.from(new Set(imgList));
					this.isPreviewImg = true;
				}

				// const imgList = list.getElementsByTagNameNS('img');
				uni.previewImage({
					current:0,
					urls:[this.imgs2[item]],
					success(){
						console.log(111)
					},
					fail(res){
						console.log(222,res)
					}
				})
			},
			async getImgListData(){
				const res = await getImgList({
					page:this.pageNo,
					pageSize:this.pageSize,
					cate_id: this.cate_id
				});
				const imgRes = res.data.data
				if(this.pageNo == 1) {
					this.imgs = imgRes
				} else {
					this.imgs = this.imgs.concat(imgRes)
				}
				this.isNext = res.data.last_page >this.pageNo
				if(this.isNext) {
					this.pageNo += 1
				}
			},
			
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
		height: 550rpx;
		/* height: auto; */
		border-radius: 7px;
	}
	.i2{
		width: 746rpx;
		/* display: block; */
		/* height: 1110rpx; */
		height:auto;
		margin: 0;
	}
	image{
		width:100%;
		height: auto;
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
