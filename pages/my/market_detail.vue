<template>
	<view>
		<navbar :title="'我的设备'"></navbar>
		
		<view class="tab_swiper">
			<view class="tabs">
				<view class="tab_item" @click="tabIndex = 0" :class="tabIndex == 0 ? 'tab_selected' : ''">
					销售提成
				</view>
				<view class="tab_item" @click="tabIndex = 1" :class="tabIndex == 1 ? 'tab_selected' : ''">
					团队奖励
				</view>
				<view class="slider" :style="{ left: `${tabIndex * 50 + 25}%` }">
					
				</view>
			</view>
			
			<view class="tab_content">
				<view class="goods_list" v-if="tabIndex == 0">
					
					<view class="total_device">
							<view class="" style="font-size: 28rpx;color: #0D081A;">
								销售提成：
							</view>
							<view class="" style="font-weight: 700;font-size: 50rpx;color: #0D081A;">
								{{ total_tc }}
							</view>
					</view>
					
					<view class="title_text666">
						<span>市场明细</span>
					</view>
					
					<view class="empty" v-if="goodsList1.length == 0">
						<view class="">
							<image src="../../static/my/empty_img.png" mode=""></image>
						</view>
						<view class="empty_text">
							记录是空的呢~
						</view>
					</view>
					
					<view class="good_item" v-for="(item,index) in goodsList1" :key="index" v-if="goodsList1.length > 0">
						<view class="m_time">
							{{ item.time }}
						</view>
						<view class="m_price">
							{{ item.price }}
						</view>
					</view>
				</view>
				
				<view class="goods_list" v-if="tabIndex == 1">
					
					<view class="total_device">
							<view class="" style="font-size: 28rpx;color: #0D081A;">
								销售提成：
							</view>
							<view class="" style="font-weight: 700;font-size: 50rpx;color: #0D081A;">
								{{ total_tc2 }}
							</view>
					</view>
				
					
					<view class="title_text666">
						<span>市场明细</span>
					</view>
					
					<view class="empty" v-if="goodsList2.length == 0">
						<view class="">
							<image src="../../static/my/empty_img.png" mode=""></image>
						</view>
						<view class="empty_text">
							记录是空的呢~
						</view>
					</view>
					<view class="good_item" v-for="(item,index) in goodsList1" :key="index" v-if="goodsList2.length > 0">
						<view class="m_time">
							{{ item.time }}
						</view>
						<view class="m_price">
							{{ item.price }}
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
				total_tc: 12,
				total_tc2: 666,
				goodsList1: [
					{
						time: '2024年02月22日',
						price: '8 USDT'
					},
					{
						time: '2024年02月22日',
						price: '8 USDT'
					},
					{
						time: '2024年02月22日',
						price: '8 USDT'
					},
					{
						time: '2024年02月22日',
						price: '8 USDT'
					},
					{
						time: '2024年02月22日',
						price: '8 USDT'
					},
					{
						time: '2024年02月22日',
						price: '8 USDT'
					},
				],
				goodsList2: [
					{
						time: '2024年02月22日',
						price: '8 USDT'
					},
					{
						time: '2024年02月22日',
						price: '7 USDT'
					},
					{
						time: '2024年02月22日',
						price: '6 USDT'
					},
					{
						time: '2024年02月22日',
						price: '5 USDT'
					},
					{
						time: '2024年02月22日',
						price: '4 USDT'
					},
					{
						time: '2024年02月22日',
						price: '3 USDT'
					},
				],
			};
		},
		methods: {
			toPage(url) {
				uni.navigateTo({
					url: url
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.tab_swiper {
	display: flex;
	flex-direction: column;
	width: 690rpx;
	margin: 90rpx auto;
}
.tabs {
	// width: 450rpx;
	width: 100%;
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
		height: 90rpx;
		background: #110F20;
		border-radius: 15rpx 15rpx 15rpx 15rpx;
		padding: 30rpx;
		box-sizing: border-box;
		display: flex;
		// flex-direction: column;
		justify-content: space-between;
		position: relative;
		align-items: center;
		// border-bottom: 0.5px solid rgba(144, 143, 147, .3);
		color: #FFFFFF;
		margin: 30rpx 0;
	}
}
.device_item_info {
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
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

.total_device {
	width: 690rpx;
	height: 100rpx;
	padding: 30rpx;
	box-sizing: border-box;
	display: flex;
	justify-content: flex-start;
	border-radius: 10rpx!important;
	align-items: center;
	background: url(../../static/my/total_device2.png) no-repeat;
	background-size: 100% 100%;  
	font-family: PingFang SC, PingFang SC;
	font-weight: 400;
	font-size: 28rpx;
	color: #0D081A;
	line-height: 28rpx;
}


.device_count {
		height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	margin-right: 150rpx;
	.total_num {
		font-family: PingFang SC, PingFang SC;
		font-weight: 700;
		font-size: 50rpx;
		color: #0D081A;
		line-height: 50rpx;
		margin-top: 20rpx;
	}
}
.total_income {
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	.income_num {
		font-family: PingFang SC, PingFang SC;
		font-weight: 600;
		font-size: 30rpx;
		color: #0D081A;
		line-height: 30rpx;
		margin-top: 20rpx;
	}
}

.btn_group {
	width: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	margin-top: 40rpx;
}
.income_detail {
	border: 1rpx solid #FFFFFF;
	font-size: 26rpx;
	color: #FFFFFF;
	margin-right: 40rpx;
}
.device_detail {
	border: 1rpx solid #1CE89F;
	font-size: 26rpx;
	color: #1CE89F;
}
.btn {
	width: 201rpx;
	height: 60rpx;
	border-radius: 100rpx 100rpx 100rpx 100rpx;
}
.pending {
	color: #FF9900;
}
.error {
	color: red;
}
.status {
	font-size: 24rpx;
}

.title_text666 {
	font-family: PingFang SC, PingFang SC;
	font-weight: 400;
	font-size: 32rpx;
	color: #FFFFFF;
	line-height: 32rpx;
	width: 690rpx;
	margin: 50rpx auto;
}
.empty {
	display: flex;
	flex-direction: column;
	align-items: center;
	image {
		width: 270rpx;
		height: 210rpx;
	}
	.empty_text {
		font-family: PingFang SC, PingFang SC;
		font-weight: 400;
		font-size: 22rpx;
		color: #908F93;
		line-height: 28rpx;
	}
}

.m_time {
	
}
.m_price {
	font-weight: 600;
	font-size: 26rpx;
	color: #1CE89F;
}
</style>
