<template>
	<view class="navbar">
		<view class="back fl-center" @click="toBack">
			<image src="../../static/market/back.png" mode=""></image>
		</view>
		<view class="title">
			<view class="title_text">
				{{ title }}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"navbar",
		props: {
			title: ''
		},
		data() {
			return {
				
			};
		},
		methods: {
			toBack() {
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss">
.navbar {
	width: 750rpx;
	height: 117rpx;
	display: flex;
	align-items: center;
	padding: 0 30rpx;
	box-sizing: border-box;
	position: sticky;
	top: 0;
	z-index: 99;
	background-color: #0D081A;
}
.back {
	width: 44rpx;
	height: 44rpx;
	margin-right: 70rpx;
	image {
		width: 44rpx;
		height: 44rpx;
	}
}
.title {
	flex: 1;
	.title_text {
		font-family: PingFang SC, PingFang SC;
		font-weight: normal;
		font-size: 36rpx;
		color: #FFFFFF;
		line-height: 40rpx;
	}
}
</style>