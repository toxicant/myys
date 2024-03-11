<template>
	<view>
		<view class="user_info">
			<view class="user_avatar">
				<image src="../../static/my/avatar.jpeg" mode=""></image>
			</view>
			<view class="user_detail">
				<view class="user_name">
					我的
				</view>
				<view class="id1">
					{{useraddress.substring(0, 5) + "*****" + useraddress.substr(36, 5)}}
				</view>
			</view>
		</view>

		<view class="identity">
			<view class="vip fl-center">
				<image src="../../static/my/vip.png" mode=""></image>
				<view class="identity_text">
					等级：<span style="font-weight: 600;font-size: 32rpx;color: #1CE89F;">会员</span>
				</view>
			</view>
			<view class="iden fl-center">
				<image src="../../static/my/ident.png" mode=""></image>
				<view class="identity_text">
					身份：<span style="font-weight: 600;font-size: 32rpx;color: #AF55FF;">{{userinfo.agent_name}}</span>
				</view>
			</view>
		</view>

		<view class="order">
			<view class="order_title">
				我的订单
			</view>
			<view class="order_body">
				<view class="SMH_order order_item" @click="toPage('/pages/my/my_order?order_id=0')">
					<image src="../../static/my/SMH.png" mode=""></image>
					<span>SMH订单</span>
				</view>
				<view class="KAS_order order_item" @click="toPage('/pages/my/my_order?order_id=1')">
					<image src="../../static/my/KAS.png" mode=""></image>
					<span>KAS订单</span>
				</view>
			</view>
		</view>

		<view class="invite">
			<view class="invite_title">
				我的邀请码
			</view>
			<view class="invite_code" @click="copy">
				<view class="">
					{{useraddress}}
				</view>
				<image src="../../static/my/copy.png" mode=""></image>
			</view>
		</view>

		<view class="tools">
			<view class="tools_title">
				常用工具
			</view>
			<view class="tools_menu">
				<view class="tools_item" @click="toPage('/pages/my/my_wallet')">
					<view class="">
						<image src="../../static/my/wallet.png" mode=""></image>
					</view>
					<view class="tool_item_text">
						我的钱包
					</view>
				</view>
				<view class="tools_item" @click="toPage('/pages/my/my_device')">
					<view class="">
						<image src="../../static/my/device.png" mode=""></image>
					</view>
					<view class="tool_item_text">
						我的设备
					</view>
				</view>
				<view class="tools_item" @click="toPage('/pages/my/my_market')">
					<view class="">
						<image src="../../static/my/market.png" mode=""></image>
					</view>
					<view class="tool_item_text">
						我的市场
					</view>
				</view>
			</view>
		</view>

		<view class="logout fl-center">
			<view class="">
				退出登录
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				useraddress: "",
				userinfo: [],
				shareUrl: "",
			};
		},
		mounted() {
			this.init()
			this.useraddress = uni.getStorageSync("account") || "";
		},
		methods: {
			init() {
				this.$http('api/user/info').then(res => {
					uni.setStorageSync('userinfo', res.userinfo)
					this.userinfo = res.userinfo;
					this.shareUrl = res.share_url
				})

			},
			toPage(url) {
				uni.navigateTo({
					url: url
				})
			},
			copy() {
				var that = this
				uni.setClipboardData({
					data: this.shareUrl + "?invite_code=" + uni.getStorageSync("account"),
					// data: uni.getStorageSync("account"),
					success: function() {
						uni.hideToast()
						uni.getClipboardData({
							success: function(res) {
								uni.showToast({
									title: "复制成功",
									icon: 'none'
								})
							}
						});
					}
				});
			},
		}
	}
</script>

<style lang="scss" scoped>
	.user_info {
		width: 690rpx;
		height: 100rpx;
		margin: 50rpx auto;
		display: flex;
		justify-content: flex-start;
	}

	.user_avatar {
		width: 100rpx;
		height: 100rpx;
		border: 2rpx solid #FFFFFF;
		margin-right: 23rpx;
		border-radius: 50%;

		image {
			width: 100rpx;
			height: 100rpx;
			border-radius: 50%;
		}
	}

	.user_detail {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
		height: 100rpx;

		.user_name {
			font-family: PingFang SC, PingFang SC;
			font-weight: 400;
			font-size: 32rpx;
			color: #FFFFFF;
			line-height: 45rpx;
		}

		.id1 {
			font-family: PingFang SC, PingFang SC;
			font-weight: 400;
			font-size: 28rpx;
			color: #908F93;
			line-height: 40rpx;
		}
	}

	.identity {
		display: flex;
		justify-content: center;
		align-items: center;
		font-family: PingFang SC, PingFang SC;
		font-weight: 400;
		font-size: 26rpx;
		color: #FFFFFF;
	}

	.vip {
		width: 330rpx;
		height: 100rpx;
		// background: url(../../static/my/vip.png) no-repeat;
		margin-right: 30rpx;
		position: relative;

		image {
			position: absolute;
			left: 0;
			top: 0;
			width: 330rpx;
			height: 100rpx;
		}

		.identity_text {
			z-index: 2;
			margin-left: -80rpx;
		}
	}

	.iden {
		width: 330rpx;
		height: 100rpx;
		position: relative;

		image {
			position: absolute;
			left: 0;
			top: 0;
			width: 330rpx;
			height: 100rpx;
		}

		.identity_text {
			z-index: 2;
			margin-left: -80rpx;
		}
	}

	.order {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 24rpx 30rpx;
		box-sizing: border-box;
		width: 690rpx;
		height: 240rpx;
		background: #110F20;
		border-radius: 15rpx 15rpx 15rpx 15rpx;
		margin: 30rpx auto;
	}

	.order_title {
		font-family: PingFang SC, PingFang SC;
		font-weight: 400;
		font-size: 32rpx;
		color: #FFFFFF;
		line-height: 45rpx;
		margin-bottom: 58rpx;
	}

	.order_item {
		padding: 0 55rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		font-family: PingFang SC, PingFang SC;
		font-weight: 400;
		font-size: 28rpx;
		color: #FFFFFF;
		line-height: 39rpx;
		width: 50%;

		image {
			width: 60rpx;
			height: 60rpx;
			margin-right: 20rpx;
		}
	}

	.order_body {
		width: 100%;
		display: flex;
		align-items: center;
	}

	.SMH_order {
		position: relative;
	}

	.SMH_order::after {
		content: "";
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		width: 1px;
		/* 渐变边框的宽度 */
		// background: linear-gradient(276deg, rgba(215, 215, 215, 0), rgba(236, 236, 236, 1), rgba(216, 216, 216, 0)) 1 1;
		background: linear-gradient(to bottom, #D8D8D8, #EDEDED, #D8D8D8);
		pointer-events: none;
		/* 防止渐变边框影响鼠标事件 */
	}

	.invite {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 24rpx 30rpx 36rpx;
		box-sizing: border-box;
		width: 690rpx;
		height: 180rpx;
		background: #110F20;
		border-radius: 15rpx 15rpx 15rpx 15rpx;
		margin: 0 auto;
	}

	.invite_title {
		font-family: PingFang SC, PingFang SC;
		font-weight: 400;
		font-size: 32rpx;
		color: #FFFFFF;
		line-height: 45rpx;
		margin-bottom: 40rpx;
	}

	.invite_code {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-family: PingFang SC, PingFang SC;
		font-weight: 400;
		font-size: 24rpx;
		color: #908F93;
		line-height: 34rpx;

		image {
			width: 40rpx;
			height: 40rpx;
		}
	}

	.tools {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 24rpx 30rpx 36rpx;
		box-sizing: border-box;
		width: 690rpx;
		height: 290rpx;
		background: #110F20;
		border-radius: 15rpx 15rpx 15rpx 15rpx;
		margin: 30rpx auto;
	}

	.tools_title {
		font-family: PingFang SC, PingFang SC;
		font-weight: 400;
		font-size: 32rpx;
		color: #FFFFFF;
		line-height: 45rpx;
		margin-bottom: 40rpx;
	}

	.tools_menu {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 10rpx;
		box-sizing: border-box;
	}

	.tools_item {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-family: PingFang SC, PingFang SC;
		font-weight: 400;
		font-size: 26rpx;
		color: #FFFFFF;
		line-height: 36rpx;

		image {
			width: 80rpx;
			height: 80rpx;
		}
	}

	.logout {
		width: 690rpx;
		height: 100rpx;
		background: #110F20;
		border-radius: 15rpx 15rpx 15rpx 15rpx;
		font-family: PingFang SC, PingFang SC;
		font-weight: 400;
		font-size: 28rpx;
		color: #FFFFFF;
		line-height: 39rpx;
		margin: 0 auto;
	}
</style>