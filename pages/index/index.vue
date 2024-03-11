<template>
	<view>
		<page-header :isIndex="true"></page-header>

		<view class="notice">
			<view class="notice_icon">
				<image src="../../static/index/notice.png" mode=""></image>
			</view>
			<view class="notice_content">
				<u-notice-bar bg-color="" color="#D4CEE0" icon="" :text="notice_text"></u-notice-bar>
				<!-- <span>{{ notice_text }}</span> -->
			</view>
		</view>

		<view class="swiper fl-center">
			<view class="swiper_img">
				<image :src="banner" mode=""></image>
			</view>
		</view>

		<view class="idx_menu fl-center">
			<view class="menu_list">
				<view class="menu_item">
					<view class="menu_icon">
						<image src="../../static/index/wallet.png" mode=""></image>
					</view>
					<view class="menu_text">
						我的钱包
					</view>
				</view>

				<view class="menu_item">
					<view class="menu_icon">
						<image src="../../static/index/market.png" mode=""></image>
					</view>
					<view class="menu_text">
						我的市场
					</view>
				</view>

				<view class="menu_item">
					<view class="menu_icon">
						<image src="../../static/index/custom.png" mode=""></image>
					</view>
					<view class="menu_text">
						我的订单
					</view>
				</view>

				<view class="menu_item">
					<view class="menu_icon">
						<image src="../../static/index/invite.png" mode=""></image>
					</view>
					<view class="menu_text">
						邀请好友
					</view>
				</view>
			</view>
		</view>

		<view class="least_dynamic">
			<view class="dy_title">
				实时行情
			</view>
			<view class="list_head">
				<view class="list_head_item1">
					名称
				</view>
				<view class="list_head_item2">
					最新价
				</view>
				<view class="list_head_item3">
					涨跌幅
				</view>
			</view>
			<view class="least_list">
				<view class="least_item" v-for="(item,index) in least_list" :key="index">
					<view class="bz_icon">
						<image :src="item.image" mode=""></image>
					</view>
					<view class="bz_data">
						<view class="bz_name">
							<view class="bz_key">
								{{ item.name }}
							</view>
							<view class="bz_value">
								24H 量 {{ item.volume }} 亿
							</view>
						</view>
						<view class="bz_lprice">
							<view class="bz_key">
								${{ item.price }}
							</view>
							<view class="bz_value">
								¥{{ item.price_cny }}
							</view>
						</view>
						<view class="bz_rf fl-center" :class="item.change.includes('-') ? 'df' : 'zf'">
							<view class="rf_data">
								{{ item.change }}%
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import pageHeader from '@/components/pageHeader/pageHeader.vue'
	export default {
		components: {
			pageHeader
		},
		data() {
			return {
				banner: '',
				notice_text: '比特币市场迎来价格“狂飙”的春节行情！2月10日，比迎来价格“狂飙”的春节迎来价格“狂飙”的春节',
				least_list: []
			};
		},
		onLoad() {
			// this.init()
			this.getBanner()
			this.getLive()
		},
		methods: {
			init() {
				this.$http('api/user/info', {
					address: uni.getStorageSync("account")
				}).then(res => {
					uni.setStorageSync('userinfo', res.userinfo)
					this.userInfo = res.userinfo;
				})
			},
			getBanner() {
				this.$http('api/index/banner').then(res => {
					this.banner = res.list[0].image
					console.log(res)
				})
			},
			getLive() {
				this.$http('api/index/coin_live').then(res => {
					this.least_list = res.list
					// console.log(this.least_list)
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.notice {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 30rpx;
		box-sizing: border-box;

		.notice_icon {
			width: 50rpx;
			height: 50rpx;

			image {
				width: 50rpx;
				height: 50rpx;
			}
		}

		.notice_content {
			// background-color: #f5f5f5;
			// width: 619rpx;
			// height: 40rpx;
			// font-family: PingFang SC, PingFang SC;
			// font-weight: 400;
			// font-size: 26rpx;
			// color: #FFFFFF;
			overflow: hidden;
		}
	}

	.swiper {
		margin: 40rpx auto;
	}

	.swiper_img>image {
		width: 690rpx;
		height: 345rpx;
		border-radius: 15rpx 15rpx 15rpx 15rpx;
		background-color: #1B275C;
		// margin: 0 auto;
	}

	.idx_menu {
		width: 690rpx;
		height: 190rpx;
		background: #110F20;
		margin: 0 auto;
		padding: 40rpx 28rpx;
		box-sizing: border-box;
		border: 1rpx solid;
		border-image: linear-gradient(91deg, rgba(17.00000088661909, 72.00000330805779, 64.00000378489494, 1), rgba(17.00000088661909, 72.00000330805779, 64.00000378489494, 0)) 1 1;
		border-radius: 15rpx 15rpx 15rpx 15rpx;
	}

	.menu_list {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 611rpx;
		height: 130rpx;
	}

	.menu_item {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		height: 130rpx;

	}

	.menu_icon {
		width: 80rpx;
		height: 80rpx;

		image {
			width: 80rpx;
			height: 80rpx;
		}
	}

	.menu_text {
		font-family: PingFang SC, PingFang SC;
		font-weight: 400;
		font-size: 26rpx;
		color: #FFFFFF;
		line-height: 36rpx;
	}

	.least_dynamic {
		width: 690rpx;
		margin: 60rpx auto 0;

	}

	.dy_title {
		margin-bottom: 40rpx;
		font-family: PingFang SC, PingFang SC;
		font-weight: 400;
		font-size: 32rpx;
		color: #FFFFFF;
		line-height: 32rpx;
	}

	.list_head {
		width: 690rpx;
		height: 34rpx;
		display: flex;
		align-items: center;
		font-weight: 400;
		font-size: 24rpx;
		color: #908F93;

		.list_head_item1 {
			width: 366rpx;
			padding-right: 66rpx;
			box-sizing: border-box;
			text-align: center;
		}

		.list_head_item2 {
			width: 120rpx;
			text-align: center;
		}

		.list_head_item3 {
			width: 232rpx;
			text-align: center;
			padding-left: 94rpx;
			box-sizing: border-box;
		}
	}

	.least_list {
		display: flex;
		flex-direction: column;

		.least_item {
			width: 690rpx;
			height: 165rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
	}

	.bz_icon {
		width: 84rpx;
		height: 84rpx;
		margin-right: 32rpx;

		image {
			width: 84rpx;
			height: 84rpx;
		}
	}

	.bz_data {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex: 1;
	}

	.bz_name {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;

	}

	.bz_lprice {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
	}

	.bz_rf {
		width: 130rpx;
		height: 60rpx;
		box-shadow: 0rpx 0rpx 10rpx 0rpx rgba(255, 255, 255, 0.1);
		border-radius: 100rpx;
	}

	.zf {
		border: 1rpx solid #1CE89F;
		font-weight: 400;
		font-size: 28rpx;
		color: #1CE89F;
	}

	.df {
		border: 1rpx solid #FF9900;
		font-weight: 400;
		font-size: 28rpx;
		color: #FF9900;
	}

	.bz_key {
		font-weight: 400;
		font-size: 30rpx;
		color: #FFFFFF;
		line-height: 40rpx;
		margin-bottom: 15rpx;
	}

	.bz_value {
		font-weight: 400;
		font-size: 24rpx;
		color: #908F93;
		line-height: 34rpx;
	}
</style>