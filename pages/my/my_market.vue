<template>
	<view>
		<navbar :title="'我的市场'"></navbar>

		<view class="user_info">
			<view class="user_avatar">
				<image src="../../static/my/avatar.jpeg" mode=""></image>
			</view>
			<view class="user_detail">
				<view class="user_name">
					f1xjn...dptri
				</view>
				<view class="vip_level">
					<view class="vip_icon">
						<image src="../../static/my/vip_icon.png" mode=""></image>
					</view>
					<view class="id1">
						普通会员
					</view>
				</view>
			</view>
		</view>

		<view class="user_data">
			<view class="data_box">
				<view class="data_num">
					64
				</view>
				<view class="data_name">
					总业绩(T)
				</view>
			</view>
			<view class="data_box">
				<view class="data_num">
					30
				</view>
				<view class="data_name">
					自购量(T)
				</view>
			</view>
			<view class="data_box1">
				<view class="data_num">
					0
				</view>
				<view class="data_name">
					销售提成
				</view>
			</view>
			<view class="data_box1">
				<view class="data_num">
					0
				</view>
				<view class="data_name">
					团队奖励
				</view>
			</view>
		</view>
		
		<view class="invite_code">
			<view class="invite_title">
				我的邀请码
			</view>
			<view class="invite_body">
				<view class="inviteCode">
					f1xjn72rp2ezwpmet5o6htx4c67yaznkosecdptri
				</view>
				<view class="copy">
					<image src="../../static/my/copy.png" mode=""></image>
				</view>
			</view>
		</view>
		
		<view class="invite_code" style="margin-top: 50rpx;">
			<view class="invite_title">
				我的队长
			</view>
			<view class="invite_body">
				<view class="inviteCode">
					f1xjn72rp2ezwpmet5o6htx4c67yaznkosecdptri
				</view>
				<view class="copy">
					<!-- <image src="../../static/my/copy.png" mode=""></image> -->
				</view>
			</view>
		</view>
		
		<view class="invite_code" style="margin-top: 50rpx;border-bottom: none;">
			<view class="invite_title">
				我的社区
			</view>
			<view class="invite_body" style="padding-right: 0;">
				<view class="inviteCode" style="margin-left: 70rpx;">
					名称
				</view>
				<view class="copy1">
					<!-- <image src="../../static/my/copy.png" mode=""></image> -->
					<span>市场业绩</span>
				</view>
			</view>
			
			<view class="sq_list">
				<view class="sq_item">
					<view class="sq_left">
						<view class="sq_avatar">
							<image src="../../static/my/avatar.jpeg" mode=""></image>
						</view>
						<view class="sq_name">
							0CGLXV
						</view>
					</view>
					<view class="sq_right">
						0
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

			};
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
		width: 80rpx;
		height: 80rpx;
		border: 2rpx solid #FFFFFF;
		margin-right: 40rpx;
		border-radius: 50%;

		image {
			width: 80rpx;
			height: 80rpx;
			border-radius: 50%;
		}
	}

	.user_name {
		font-family: PingFang SC, PingFang SC;
		font-weight: 400;
		font-size: 32rpx;
		color: #FFFFFF;
		line-height: 45rpx;
	}

	.vip_level {
		display: flex;
		align-items: center;
	}

	.user_detail {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
		height: 80rpx;

		.vip_icon {
			// font-family: PingFang SC, PingFang SC;
			// font-weight: 400;
			// font-size: 32rpx;
			// color: #FFFFFF;
			// line-height: 45rpx;
			width: 30rpx;
			height: 30rpx;
			margin-right: 10rpx;

			image {
				width: 30rpx;
				height: 30rpx;
			}
		}

		.id1 {
			font-size: 28rpx;
			color: #FF9900;
		}
	}

	.user_data {
		width: 690rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex-wrap: wrap;
		margin: 0 auto;
	}

	.data_box {
		width: 330rpx;
		height: 140rpx;
		background: url(../../static/my/data_box.png) no-repeat;
		background-size: 100% 100%;  
		margin-bottom: 30px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 20rpx 30rpx;
		box-sizing: border-box;
		.data_num {
			font-size: 32rpx;
			color: #1CE89F;
			font-weight: 600;
		}
		.data_name {
			font-size: 24rpx;
			color: #FFFFFF;
		}
	}
	
	.data_box1 {
		width: 330rpx;
		height: 140rpx;
		background: #110F20;
		// background-size: 100% 100%;  
		margin-bottom: 30px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 20rpx 30rpx;
		box-sizing: border-box;
		.data_num {
			font-size: 32rpx;
			color: #FFFFFF;
			font-weight: 600;
		}
		.data_name {
			font-size: 24rpx;
			color: #908F93;
		}
	}
	
	.invite_code {
		width: 690rpx;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		padding-bottom: 40rpx;
		box-sizing: border-box;
		border-bottom: 1rpx solid #1E192A;
		.invite_title {
			font-size: 32rpx;
			color: #FFFFFF;
			font-weight: 600;
			margin-bottom: 20rpx;
		}
	}
	.invite_body {
		width: 100%;
		padding-right: 58rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		.inviteCode {
			// flex: 1;
			font-size: 24rpx;
			color: #908F93;
		}
		.copy {
			width: 40rpx;
			height: 40rpx;
			image {
				width: 40rpx;
				height: 40rpx;
			}
		}
	}
	
	.copy1 {
		font-size: 24rpx;
		color: #908F93;
	}
	
	.sq_list {
		width: 690rpx;
		display: flex;
		flex-direction: column;
		// justify-content: space-between;
		// align-items: center;
	}
	
	.sq_left {
		display: flex;
		align-items: center;
		.sq_avatar {
			width: 50rpx;
			height: 50rpx;
			margin-right: 20rpx;
			image {
				width: 50rpx;
				height: 50rpx;
			}
		}
		
		.sq_name {
			font-family: PingFang SC, PingFang SC;
			font-weight: 400;
			font-size: 28rpx;
			color: #FFFFFF;
			line-height: 39rpx;
		}
	}
	.sq_item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 26rpx 0;
		box-sizing: border-box;
		border-bottom: 1rpx solid #1E192A;
	}
	.sq_right {
		font-family: PingFang SC, PingFang SC;
		font-weight: 400;
		font-size: 28rpx;
		color: #FFFFFF;
		line-height: 39rpx;
	}
</style>