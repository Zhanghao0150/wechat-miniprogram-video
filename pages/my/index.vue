<template>
	<view class="">
		<view class="header" style="position: fixed;">
			<view class="about">
				<open-data type="userNickName"></open-data>,祝您开心每一天~
			</view>
			<view class="avatar-content">
				<view class="avatar-wrap">
					<view class="img-wrap">
						<open-data type="userAvatarUrl"></open-data>
					</view>
				</view>
			</view>
			
		</view>
		<view class="header-mark" />
		<view class="list">
			
		</view>
	</view>
</template>

<script>
</script>

<style>
	.avatar-wrap{
		flex-grow: 1;
		width: 100%;
		height: 110rpx;
	}
	.img-wrap{
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
</style>
