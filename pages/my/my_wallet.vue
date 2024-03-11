<template>
	<view>
		<navbar :title="'我的钱包'"></navbar>
		
		<view class="account">
			<view class="account_info">
				<view class="">
					账户总资产折合 (USTD)
				</view>
				<view class="">
					<span style="font-size: 50rpx;color: #0D081A;font-weight: 600;">158</span><span style="font-size: 40rpx;color: #0D081A;font-weight: 600;">.32154789</span>
				</view>
				<view class="" style="font-family: PingFang SC, PingFang SC;font-weight: 400;font-size: 28rpx;color: #0D081A;line-height: 26rpx;">
					≈<span>950.654CNY</span>
				</view>
			</view>
			
			<view class="check_icon">
				<image src="../../static/my/check.png" mode=""></image>
			</view>
		</view>
		
		<view class="account_list">
			<view class="account_item" v-for="(item,index) in accountList" :key="index" @click="toPage(item.account_id)">
				<view class="account_item_icon">
					<image :src="item.imgUrl" mode=""></image>
				</view>
				<view class="account_detail">
					<view class="acc_num">
						<span style="font-size: 40rpx;color: #FFFFFF;">{{ item.account_num }}</span>
						<span style="margin-left: 10rpx;">USDT</span>
					</view>
					<view class="eqCNY">
						≈<span>{{ item.eqCNY }}</span>  CNY
					</view>
				</view>
				<view class="todetail">
					<image src="../../static/my/arrow_right.png" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import navbar from '@/components/navbar/navbar.vue'
	export default {
		components: {
			navbar
		},
		data() {
			return {
				accountList: [
					{
						imgUrl: '../../static/my/icon1.png',
						account_num: '56.41320214',
						acc_type: 'USDT',
						eqCNY: '950.654',
						account_id: 0,
					},
					{
						imgUrl: '../../static/my/icon2.png',
						account_num: '56.41320214',
						acc_type: 'USDT',
						eqCNY: '950.654',
						account_id: 1,
					},
					{
						imgUrl: '../../static/my/icon3.png',
						account_num: '56.41320214',
						acc_type: 'USDT',
						eqCNY: '950.654',
						account_id: 2,
					},
					{
						imgUrl: '../../static/my/icon4.png',
						account_num: '56.41320214',
						acc_type: 'USDT',
						eqCNY: '950.654',
						account_id: 3,
					},
				]
			};
		},
		methods: {
			toPage(id) {
				uni.navigateTo({
					url: '/pages/my/my_wallet1?account_id=' + id
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.account {
	width: 690rpx;
	height: 260rpx;
	border-radius: 10rpx;
	background: url(../../static/my/account.png) no-repeat;
	padding: 38rpx 30rpx;
	box-sizing: border-box;
	margin: 0 auto 30rpx;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	position: relative;
}

.check_icon {
	width: 46rpx;
	height: 46rpx;
	position: absolute;
	right: 32rpx;
	top: 50%;
	transform: translateY(-50%);
	
	image {
		width: 46rpx;
		height: 46rpx;
	}
}
.account_info {
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
}

.account_list {
	display: flex;
	flex-direction: column;
	
	.account_item {
		width: 690rpx;
		height: 160rpx;
		background: #110F20;
		border-radius: 15rpx 15rpx 15rpx 15rpx;
		border: 1rpx solid #1E192A;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 30rpx;
		box-sizing: border-box;
		margin: 0 auto 30rpx;
		font-family: PingFang SC, PingFang SC;
		font-weight: 400;
		font-size: 28rpx;
		color: #908F93;
		line-height: 26rpx;
	}
}
.account_detail {
	height: 96rpx;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	margin-left: -80rpx;
}
.account_item_icon {
	width: 70rpx;
	height: 70rpx;
	image {
		width: 70rpx;
		height: 70rpx;
	}
}

.todetail {
	width: 35rpx;
	height: 35rpx;
	image {
		width: 35rpx;
		height: 35rpx;
	}
}
</style>
