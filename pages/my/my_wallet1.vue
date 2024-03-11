<template>
	<view>
		<!-- <navbar :title="titleZ"></navbar> -->
		<navbar :title="'BTC'"></navbar>
		
		<view class="account">
			<view class="account_info">
				<view class="" style="color: #FFFFFF;font-size: 24rpx;">
					资产余额
				</view>
				<view class="">
					<span style="font-size: 50rpx;color: #FFFFFF;font-weight: 600;">158</span><span style="font-size: 40rpx;color: #FFFFFF;font-weight: 600;">.32154789</span>
				</view>
				<view class="" style="font-family: PingFang SC, PingFang SC;font-weight: 400;font-size: 28rpx;color: #908F93;line-height: 26rpx;">
					≈<span>950.654CNY</span>
				</view>
			</view>
			
			<view class="check_icon fl-center" @click="toPage(account_id)">
				<!-- <image src="../../static/my/check.png" mode=""></image> -->
				<view class="">
					提现
				</view>
			</view>
		</view>
		
		<!-- <view class="account_list">
			<view class="account_item" v-for="(item,index) in accountList" :key="index">
				
			</view>
		</view> -->
		
		<view class="tab_swiper">
			<view class="tabs">
				<view class="tab_item" @click="tabIndex = 0" :class="tabIndex == 0 ? 'tab_selected' : ''">
					全部
				</view>
				<view class="tab_item" @click="tabIndex = 1" :class="tabIndex == 1 ? 'tab_selected' : ''">
					收入
				</view>
				<view class="tab_item" @click="tabIndex = 2" :class="tabIndex == 2 ? 'tab_selected' : ''">
					支出
				</view>
				<view class="slider" :style="{ left: `${tabIndex * 33 + 16.8}%` }">
					
				</view>
			</view>
			
			<view class="tab_content">
				<view class="goods_list" v-if="tabIndex == 0">
					<view class="good_item" v-for="(item,index) in goodsList1" :key="index">
						<view class="top_part">
							<view class="type">
								{{ item.type }}
							</view>
							<view class="pm" :class="item.pm.includes('+') ? 'plus' : 'minus'">
								{{ item.pm }}
							</view>
						</view>
						<view class="bottom_part">
							<view class="time">
								{{ item.time }}
							</view>
							<view class="status" v-if="item.status == 0">
								成功
							</view>
							<view class="status" v-if="item.status == 1">
								失败
							</view>
						</view>
					</view>
				</view>
				
				<view class="goods_list" v-if="tabIndex == 1">
					<view class="good_item" v-for="(item,index) in goodsList2" :key="index">
						<view class="top_part">
							<view class="type">
								{{ item.type }}
							</view>
							<view class="pm" :class="item.pm.includes('+') ? 'plus' : 'minus'">
								{{ item.pm }}
							</view>
						</view>
						<view class="bottom_part">
							<view class="time">
								{{ item.time }}
							</view>
							<view class="status" v-if="item.status == 0">
								成功
							</view>
							<view class="status" v-if="item.status == 1">
								失败
							</view>
						</view>
					</view>
				</view>
				
				<view class="goods_list" v-if="tabIndex == 2">
					<view class="good_item" v-for="(item,index) in goodsList3" :key="index">
						<view class="top_part">
							<view class="type">
								{{ item.type }}
							</view>
							<view class="pm" :class="item.pm.includes('+') ? 'plus' : 'minus'">
								{{ item.pm }}
							</view>
						</view>
						<view class="bottom_part">
							<view class="time">
								{{ item.time }}
							</view>
							<view class="status" v-if="item.status == 0">
								成功
							</view>
							<view class="status" v-if="item.status == 1">
								失败
							</view>
						</view>
					</view>
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
		props: {
			
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
				],
				titleZ: 'BTC',
				account_id: 0,
				tabIndex: 0,
				goodsList1: [
					{
						type: '工作收益',
						pm: '+0.236478585',
						time: '2024-02-25  12:37',
						status: 0,
						id: 0,
					},
					{
						type: '工作收益',
						pm: '+0.236478585',
						time: '2024-02-25  12:37',
						status: 0,
						id: 1,
					},
					{
						type: '工作收益',
						pm: '+0.236478585',
						time: '2024-02-25  12:37',
						status: 0,
						id: 2,
					},
					{
						type: '工作收益',
						pm: '-0.236478585',
						time: '2024-02-25  12:37',
						status: 1,
						id: 3,
					},
					{
						type: '工作收益',
						pm: '+0.236478585',
						time: '2024-02-25  12:37',
						status: 0,
						id: 4,
					},
				],
				goodsList2: [
					{
						type: '工作收益',
						pm: '-0.236478585',
						time: '2024-02-25  12:37',
						status: 0,
						id: 0,
					},
					{
						type: '工作收益',
						pm: '+0.236478585',
						time: '2024-02-25  12:37',
						status: 0,
						id: 1,
					},
					{
						type: '工作收益',
						pm: '+0.236478585',
						time: '2024-02-25  12:37',
						status: 0,
						id: 2,
					},
					{
						type: '工作收益',
						pm: '-0.236478585',
						time: '2024-02-25  12:37',
						status: 1,
						id: 3,
					},
					{
						type: '工作收益',
						pm: '+0.236478585',
						time: '2024-02-25  12:37',
						status: 0,
						id: 4,
					},
				],
				goodsList3: [
					{
						type: '工作收益',
						pm: '+0.236478585',
						time: '2024-02-25  12:37',
						status: 0,
						id: 0,
					},
					{
						type: '工作收益',
						pm: '-0.236478585',
						time: '2024-02-25  12:37',
						status: 0,
						id: 1,
					},
					{
						type: '工作收益',
						pm: '+0.236478585',
						time: '2024-02-25  12:37',
						status: 0,
						id: 2,
					},
					{
						type: '工作收益',
						pm: '-0.236478585',
						time: '2024-02-25  12:37',
						status: 1,
						id: 3,
					},
					{
						type: '工作收益',
						pm: '+0.236478585',
						time: '2024-02-25  12:37',
						status: 0,
						id: 4,
					},
				],
			};
		},
		methods: {
			toPage(id) {
				uni.navigateTo({
					url: '/pages/my/cashOut?account_id=' + id
				})
			}
		},
		
		onLoad(options) {
			this.titleZ = options.account_id
		}
	}
</script>

<style lang="scss" scoped>
.account {
	width: 690rpx;
	height: 260rpx;
	border-radius: 10rpx;
	// background: url(../../static/my/account.png) no-repeat;
	background-color: #161424;
	padding: 38rpx 30rpx;
	box-sizing: border-box;
	margin: 0 auto 30rpx;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	position: relative;
}

.check_icon {
	width: 130rpx;
	height: 50rpx;
	background: #1CE89F;
	box-shadow: 0rpx 0rpx 10rpx 0rpx rgba(255,255,255,0.1);
	border-radius: 100rpx 100rpx 100rpx 100rpx;
	position: absolute;
	right: 32rpx;
	top: 50%;
	transform: translateY(-50%);
	font-family: PingFang SC, PingFang SC;
	font-weight: 400;
	font-size: 28rpx;
	color: #0D081A;
	line-height: 39rpx;
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

.tab_swiper {
	display: flex;
	flex-direction: column;
	width: 690rpx;
	margin: 90rpx auto;
}
.tabs {
	display: flex;
	align-items: flex-start;
	height: 85rpx;
	position: relative;
	margin-bottom: 40rpx;
	.tab_item {
		width: 50%;
		height: 30rpx;
		font-family: PingFang SC, PingFang SC;
		font-weight: 400;
		font-size: 28rpx;
		color: #FFFFFF;
		line-height: 28rpx;
		text-align: center;
	}
}
.tab_selected {
	color: #1CE89F!important;
	font-weight: 500;
}

.slider {
	width: 70rpx;
	height: 6rpx;
	background: #1CE89F;
	border-radius: 100rpx 100rpx 100rpx 100rpx;
	position: absolute;
	bottom: 0;
	// left: var(tabIndex);
	transform: translateX(-50%);
	 transition: left 0.3s ease; 
}

.tab_content {
	display: flex;
	flex-direction: column;
	
	.good_item {
		width: 690rpx;
		height: 165rpx;
		padding: 40rpx 0;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: relative;
		align-items: center;
		border-bottom: 0.5px solid rgba(144, 143, 147, .3);
		color: #FFFFFF;
	}
}
.top_part {
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 12rpx;
	.type {
		font-family: PingFang SC, PingFang SC;
		font-weight: 400;
		font-size: 30rpx;
		color: #FFFFFF;
		line-height: 42rpx;
	}
	.pm {
		font-family: PingFang SC, PingFang SC;
		font-weight: 400;
		font-size: 28rpx;
		// color: #FF9900;
		line-height: 39rpx;
	}
}
.bottom_part {
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-family: PingFang SC, PingFang SC;
	font-weight: 400;
	font-size: 24rpx;
	color: #908F93;
	line-height: 34rpx;
}
.line {
	width: 690rpx;
	height: 1rpx;
	background-color: rgba(144, 143, 147, .3);
	margin: 0 auto;
	position: absolute;
	bottom: 0;
	left: 0;
}

.good_img {
	width: 160rpx;
	height: 160rpx;
	border-radius: 15rpx 15rpx 15rpx 15rpx;
	margin-right: 25rpx;
	image {
		width: 160rpx;
		height: 160rpx;
	}
}

.good_info {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	height: 100%;
	padding: 5rpx 0;
	box-sizing: border-box;
	.good_name {
		font-family: PingFang SC, PingFang SC;
		font-weight: 400;
		font-size: 28rpx;
		color: #FFFFFF;
		line-height: 30rpx;
	}
	.good_tip {
		font-family: PingFang SC, PingFang SC;
		font-weight: 400;
		font-size: 24rpx;
		color: #1CE89F;
		line-height: 26rpx;
	}
	.good_price {
		font-family: PingFang SC, PingFang SC;
		font-weight: 400;
		font-size: 26rpx;
		color: #FFFFFF;
		line-height: 26rpx;
	}
}

.plus {
	color: #FF9900;
}
.minus {
	color: #1CE89F;
}

</style>
