<template>
	<view>
		<navbar :title="'详情'"></navbar>

		<view class="good_img">
			<image :src="device.image" mode=""></image>
		</view>

		<view class="goodInfo_detail">
			<view class="goodTitle_part">
				<view class="title_top">
					<view class="good_name">
						{{device.name}}
					</view>
					<view class="good_price">
						<view class="">
							售价：
						</view>
						<view class="price">
							{{device.price}}
						</view>
						<view class="price_dw">
							USDT
						</view>
					</view>
				</view>
				<view class="good_tip">
					<span>购买{{ device.income_day }}天开始发放收益</span>
				</view>
			</view>

			<view class="good_detail_body">
				<view class="good_detail_list">
					<view class="good_detail_item" v-for="(item,index) in good_detail_list" :key="index">
						<view class="good_detail_name">
							{{ item.name }}
						</view>
						<view class="good_detail_desc">
							{{ item.desc }}
						</view>
						<view class="good_detail_data">
							{{ item.data }}
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="buyNow fl-center">
			<view class="buy_btn fl-center">
				<view class="buy_text">
					立即购买
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
				device:[],
				good_detail_list: []
			};
		},
		onLoad() {
			this.getDevice(this.$route.query.id)
		},
		methods: {
			getDevice() {
				this.$http('api/device/device_info', {
					id:2
				}).then(res => {
					this.device = res.info
					this.good_detail_list = this.device.info
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.good_img {
		width: 690rpx;
		height: 345rpx;
		border-radius: 15rpx 15rpx 15rpx 15rpx;
		margin: 30rpx auto;

		image {
			width: 690rpx;
			height: 345rpx;
		}
	}

	.goodInfo_detail {
		width: 690rpx;
		margin: 0 auto;
		display: flex;
		flex-direction: column;

	}

	.goodTitle_part {
		display: flex;
		flex-direction: column;

		.title_top {
			display: flex;
			justify-content: space-between;
			width: 690rpx;
			margin-bottom: 20rpx;

			.good_name {
				font-family: PingFang SC, PingFang SC;
				font-weight: 400;
				font-size: 28rpx;
				color: #FFFFFF;
				line-height: 30rpx;
			}

			.good_price {
				font-family: PingFang SC, PingFang SC;
				font-weight: 400;
				font-size: 26rpx;
				color: #FFFFFF;
				line-height: 26rpx;
				display: flex;
				align-items: center;

				.price {
					font-size: 34rpx;
					color: #FF9900;
					line-height: 36rpx;
					display: inline-block;
					margin-right: 8rpx;
				}

				.price_dw {
					font-size: 22rpx;
					color: #FF9900;
				}
			}
		}

		.good_tip {
			font-family: PingFang SC, PingFang SC;
			font-weight: 400;
			font-size: 24rpx;
			color: #1CE89F;
			line-height: 26rpx;
		}
	}

	.good_detail_body {
		width: 690rpx;
		height: 630rpx;
		background: #110F20;
		border-radius: 15rpx;
		padding: 25rpx;
		box-sizing: border-box;
		margin-top: 32rpx;

	}

	.good_detail_list {
		display: flex;
		flex-direction: column;

	}

	.good_detail_item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		height: 70rpx;
	}

	.good_detail_name {
		font-family: PingFang SC, PingFang SC;
		font-weight: 400;
		font-size: 26rpx;
		color: #908F93;
		line-height: 36rpx;
		width: 30%;
	}

	.good_detail_desc {
		font-family: PingFang SC, PingFang SC;
		font-weight: 400;
		font-size: 26rpx;
		color: #FFFFFF;
		line-height: 36rpx;
		width: 30%;
	}

	.good_detail_data {
		font-family: PingFang SC, PingFang SC;
		font-weight: 400;
		font-size: 26rpx;
		color: #FFFFFF;
		line-height: 36rpx;
		width: 40%;
	}

	.buyNow {
		width: 750rpx;
		height: 120rpx;
		background: #070311;
		position: fixed;
		bottom: 0;
		left: 0;
	}

	.buy_btn {
		width: 570rpx;
		height: 80rpx;
		background: #1CE89F;
		border-radius: 100rpx 100rpx 100rpx 100rpx;
	}

	.buy_text {
		font-family: PingFang SC, PingFang SC;
		font-weight: 600;
		font-size: 30rpx;
		color: #0D081A;
		line-height: 30rpx;
	}
</style>