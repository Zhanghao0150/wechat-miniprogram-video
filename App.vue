<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	.header,.header-mark{
		/* position: absolute; */
		top: 0;
		background-color: rgba(242,90,113,.8);
		width: 90%;
		padding: 60rpx 5% 10rpx;
		color: white;
		height: 150rpx;
		display: flex;
		justify-content: space-between;
		/* align-items: center; */
		font-size: 50rpx;
		z-index: 998;
		flex-direction: column-reverse;
	}
	.header-mark{
		background-color: rgba(242,90,113,1);
		z-index: 997;
	}
	.about{
		font-size: 24rpx;
	}
	.return-btn{
		width: 48rpx;
		height: 48rpx;
		padding: 20rpx;
		margin: -20rpx;
	}
	/*每个页面公共css */
</style>
