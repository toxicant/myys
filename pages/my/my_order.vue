<template>
	<view>
		<navbar :title="'SMH订单'" v-if="order_id == 0"></navbar>
		<navbar :title="'KAS订单'" v-if="order_id == 1"></navbar>

		<view class="tab_swiper">
			<view class="tabs">
				<view class="tab_item" @click="tabIndex = 0" :class="tabIndex == 0 ? 'tab_selected' : ''">
					全部
				</view>
				<view class="tab_item" @click="tabIndex = 1" :class="tabIndex == 1 ? 'tab_selected' : ''">
					部署中
				</view>
				<view class="tab_item" @click="tabIndex = 2" :class="tabIndex == 2 ? 'tab_selected' : ''">
					工作中
				</view>
				<view class="slider" :style="{ left: `${tabIndex * 33 + 16.8}%` }">

				</view>
			</view>

			<view class="tab_content">
				<view class="goods_list" v-if="tabIndex == 0">
					<view class="good_item" v-for="(item,index) in goodsList1" :key="index">
						<view class="device_intro">
							<view class="device_img">
								<image :src="item.device_image" mode=""></image>
							</view>
							<view class="intro_right">
								<view class="rt">
									<view class="ccsl">
										{{ item.device_name }}
									</view>
									<view class="status" :class="item.status == 0 ? 'pending' : 'error'">
										<span v-if="item.status == 1">工作中</span>
										<span v-if="item.status == 0">部署中</span>
									</view>
								</view>
						
								<view class="rd">
									<view class="coin">
										<!-- <image src="../../static/my/icon_dd.png" mode=""
											style="width: 36rpx;height: 36rpx;"></image> -->
										<span style="font-size: 40rpx;color: #FF9900;">{{ item.price }}</span> USDT
									</view>
									<view class="count">
										x {{ item.num }}
									</view>
								</view>
							</view>
						
						</view>
						
						<view class="act_pay">
							实际支付：<span style="font-weight: 600;font-size: 30rpx;">{{ item.total_money }}</span><span
								style="font-size: 22rpx;">USDT</span>
						</view>
						<view class="work_day">
							<view class="">
								订单时间
							</view>
							<view class="work_days">
								{{ item.create_time }}
							</view>
						</view>
						<!-- <view class="output">
							<view class="lj_output">
								<view class="">
									累计产出
								</view>
								<view class="">
									{{ item.lj_output }}
								</view>
							</view>
							<view class="zr_output">
								<view class="">
									累计产出
								</view>
								<view class="">
									{{ item.zr_output }}
								</view>
							</view>
						</view> -->
					</view>
				</view>
				<view class="goods_list" v-if="tabIndex == 1">
					<view class="good_item" v-for="(item,index) in goodsList2" :key="index">
						<view class="device_intro">
							<view class="device_img">
								<image :src="item.device_image" mode=""></image>
							</view>
							<view class="intro_right">
								<view class="rt">
									<view class="ccsl">
										{{ item.device_name }}
									</view>
									<view class="status" :class="item.status == 0 ? 'pending' : 'error'">
										<span v-if="item.status == 1">工作中</span>
										<span v-if="item.status == 0">部署中</span>
									</view>
								</view>
						
								<view class="rd">
									<view class="coin">
										<!-- <image src="../../static/my/icon_dd.png" mode=""
											style="width: 36rpx;height: 36rpx;"></image> -->
										<span style="font-size: 40rpx;color: #FF9900;">{{ item.price }}</span> USDT
									</view>
									<view class="count">
										x {{ item.num }}
									</view>
								</view>
							</view>
						
						</view>
						
						<view class="act_pay">
							实际支付：<span style="font-weight: 600;font-size: 30rpx;">{{ item.total_money }}</span><span
								style="font-size: 22rpx;">USDT</span>
						</view>
						<view class="work_day">
							<view class="">
								订单时间
							</view>
							<view class="work_days">
								{{ item.create_time }}
							</view>
						</view>
					</view>
				</view>
				<view class="goods_list" v-if="tabIndex == 2">
					<view class="good_item" v-for="(item,index) in goodsList3" :key="index">
						<view class="device_intro">
							<view class="device_img">
								<image :src="item.device_image" mode=""></image>
							</view>
							<view class="intro_right">
								<view class="rt">
									<view class="ccsl">
										{{ item.device_name }}
									</view>
									<view class="status" :class="item.status == 0 ? 'pending' : 'error'">
										<span v-if="item.status == 1">工作中</span>
										<span v-if="item.status == 0">部署中</span>
									</view>
								</view>

								<view class="rd">
									<view class="coin">
										<!-- <image src="../../static/my/icon_dd.png" mode=""
											style="width: 36rpx;height: 36rpx;"></image> -->
										<span style="font-size: 40rpx;color: #FF9900;">{{ item.price }}</span> USDT
									</view>
									<view class="count">
										x {{ item.num }}
									</view>
								</view>
							</view>

						</view>

						<view class="act_pay">
							实际支付：<span style="font-weight: 600;font-size: 30rpx;">{{ item.total_money }}</span><span
								style="font-size: 22rpx;">USDT</span>
						</view>
						<view class="work_day">
							<view class="">
								订单时间
							</view>
							<view class="work_days">
								{{ item.create_time }}
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
		data() {
			return {
				tabIndex: 0,
				goodsList1: [],
				goodsList2: [],
				goodsList3: [],
				order_id: 0,
			};
		},
		onLoad(options) {
			this.order_id = options.order_id

			this.getOrderList(this.order_id)
		},
		methods: {
			getOrderList(type) {
				this.$http('api/device/user_order', {
					device_type: type
				}).then(res => {
					this.goodsList1 = res.list
				})
				this.$http('api/device/user_order', {
					device_type: type,
					status: 0
				}).then(res => {
					this.goodsList2 = res.list
				})
				this.$http('api/device/user_order', {
					device_type: type,
					status: 1
				}).then(res => {
					this.goodsList3 = res.list
				})
			},
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
		color: #1CE89F !important;
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
			height: 370rpx;
			background: #110F20;
			border-radius: 15rpx 15rpx 15rpx 15rpx;
			margin-bottom: 30rpx;
			padding: 25rpx 0;
			box-sizing: border-box;
			display: flex;
			flex-direction: column;
			justify-content: center;
			position: relative;
			align-items: center;
			// border-bottom: 0.5px solid rgba(144, 143, 147, .3);
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

	.pending {
		color: #FF9900;
	}

	.error {
		color: #1CE89F;
	}

	.status {
		font-size: 28rpx;
	}

	.device_intro {
		width: 630rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 0 auto;
	}

	.device_img {
		width: 160rpx;
		height: 160rpx;
		margin-right: 30rpx;

		image {
			width: 160rpx;
			height: 160rpx;
		}
	}

	.intro_right {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		flex: 1;

		.rt {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 70rpx;
		}

		.rd {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
	}

	.rt {
		.ccsl {
			font-size: 28rpx;
			color: #FFFFFF;
		}
	}

	.rd {
		.coin {

			display: flex;
			align-items: center;
		}

		.count {
			font-size: 28rpx;
			color: #908F93;
		}
	}


	.act_pay {
		width: 630rpx;
		font-size: 26rpx;
		color: #FFFFFF;
		text-align: right;
		margin: 30rpx auto 0;

	}

	.work_day {
		width: 690rpx;
		height: 80rpx;
		background: #1A1829;
		padding: 27rpx 30rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 26rpx;
		color: #FFFFFF;
		margin: 20rpx 0 20rpx;
	}

	.work_days {
		font-size: 24rpx;
		color: #908F93;
	}

	.output {
		font-family: PingFang SC, PingFang SC;
		font-weight: 400;
		font-size: 26rpx;
		color: #908F93;
		line-height: 36rpx;
		display: flex;
		flex-direction: column;
		width: 690rpx;
		padding: 0 30rpx;
		box-sizing: border-box;
	}

	.lj_output {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 20rpx;
	}

	.zr_output {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>