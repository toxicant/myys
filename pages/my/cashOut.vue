<template>
	<view>
		<navbar :title="'我的钱包'"></navbar>

		<view class="cashout">
			<view class="cashout_num">
				<view class="">
					请输入提现数量
				</view>
				<view class="input_box">
					<u--input placeholder="最低提现个数 0.2" border="none" v-model="value" @change="change" :placeholderStyle="placeholderStyle" color="#ffffff"></u--input>
				</view>
			</view>
			
			<view class="balance">
				<view class="ktx">
					可提现：<span>{{ maxCash }}</span>
				</view>
				<view class="tx" @click="balAll">
					全部提出
				</view>
			</view>
			
			<view class="tx_address">
				<view class="" style="margin: 25rpx 0;">
					提现地址
				</view>
				<view class="address">
					<view class="">
						f1xjn72rp2ezwpmet5o6htx4c67yaznkosecdptri
					</view>
					<view class="edit">
						<image src="../../static/my/edit.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>
		
		<view class="commission">
			<view class="">
				提现手续费
			</view>
			<view class="">
				20%
			</view>
		</view>
		
		<view class="confirm fl-center">
			<view class="">
				确认提现
			</view>
		</view>
		
		<view class="tip">
			<p>温馨提示:<br/>
 -单次提取手续费用：20%<br/>
 -单次最低提取数量：0.2 BTC<br/>
 -单日可提取上限量：50 BTC</p>
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
				value: '',
				account_id: 0,
				placeholderStyle: {
					fontSize: '36rpx',
					color: '#625E6C',
				},
				maxCash: '0.11799909',
			};
		},
		methods: {
			change(e) {
				console.log('change', e);
			},
			
			balAll() {
				this.value = this.maxCash
			}
		},
		
		onLoad(option) {
			console.log(option.account_id)
			this.account_id = option.account_id
		}
	}
</script>

<style lang="scss">
.cashout {
	width: 690rpx;
	height: 455rpx;
	background: #110F20;
	border-radius: 15rpx 15rpx 15rpx 15rpx;
	display: flex;
	flex-direction: column;
	padding: 35rpx 30rpx;
	box-sizing: border-box;
	font-family: PingFang SC, PingFang SC;
	font-weight: 400;
	font-size: 28rpx;
	color: #FFFFFF;
	line-height: 24rpx;
	margin: 30rpx auto;
}
.cashout_num {
	display: flex;
	flex-direction: column;
	.input_box {
		margin-top: 35rpx;
		width: 629rpx;
		height: 90rpx;
		background: #221F3A;
		border-radius: 15rpx 15rpx 15rpx 15rpx;
		padding: 25rpx 20rpx;
		box-sizing: border-box;
	}
}

.balance {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 40rpx 0;
}

.tx {
	font-family: PingFang SC, PingFang SC;
	font-weight: 400;
	font-size: 28rpx;
	color: #1CE89F;
	line-height: 32rpx;
}
.tx_address {
	display: flex;
	flex-direction: column;
}
.address {
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-family: PingFang SC, PingFang SC;
	font-weight: 400;
	font-size: 24rpx;
	color: #908F93;
	line-height: 34rpx;
}
.edit {
	width: 40rpx;
	height: 40rpx;
	image {
		width: 40rpx;
		height: 40rpx;
	}
}

.commission {
	width: 690rpx;
	height: 100rpx;
	background: #110F20;
	border-radius: 15rpx 15rpx 15rpx 15rpx;
	padding: 30rpx;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-family: PingFang SC, PingFang SC;
	font-weight: 400;
	font-size: 28rpx;
	color: #FFFFFF;
	line-height: 39rpx;
	margin: 0 auto 30rpx;
}

.confirm {
	width: 690rpx;
	height: 80rpx;
	background: #1CE89F;
	border-radius: 100rpx 100rpx 100rpx 100rpx;
	font-family: PingFang SC, PingFang SC;
	font-weight: 400;
	font-size: 30rpx;
	color: #0D081A;
	line-height: 30rpx;
	margin: 67rpx auto 60rpx;
}

.tip {
	margin: 0 auto;
	width: 654rpx;
	height: 181rpx;
	font-family: PingFang SC, PingFang SC;
	font-weight: 400;
	font-size: 24rpx;
	color: #908F93;
	line-height: 46rpx;
	text-align: left;
}
</style>