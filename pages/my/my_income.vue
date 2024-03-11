<template>
	<view>
		<navbar :title="'收益明细'"></navbar>
		
		<view class="income_list">
			<view class="income_item" v-for="(item,index) in income_list" :key="index" :class="item.status == 0 ? 'pending_item' : 'done_item'">
				<view class="item_top">
					<view class="time" v-if="item.status == 1">
						2024年02月22日
					</view>
					<view class="pending_time" v-if="item.status == 0">
						20210422-305 <span style="font-size: 28rpx;color: #1CE89F;">(15T)</span>
					</view>
					<view class="isPending" v-if="item.status == 0">
						工作中
					</view>
				</view>
				<view class="item_bottom1" v-if="item.status == 1">
					<view class="total">
						收益数
					</view>
					<view class="income_num">
						{{ item.income_num }}
					</view>
				</view>
				<view class="item_bottom" v-if="item.status == 0">
					<view class="total">
						累计收益
					</view>
					<view class="income_num">
						{{ item.income_num }}
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
				income_list: [
					{
						status: 0,
						time: '20210422-305',
						income_num: '149.95997471',
					},
					{
						status: 1,
						time: '2024年02月22日',
						income_num: '149.95997471',
					},
					{
						status: 1,
						time: '2024年02月22日',
						income_num: '149.95997471',
					},
					{
						status: 1,
						time: '2024年02月22日',
						income_num: '149.95997471',
					},
					{
						status: 1,
						time: '2024年02月22日',
						income_num: '149.95997471',
					},
					{
						status: 1,
						time: '2024年02月22日',
						income_num: '149.95997471',
					},
					{
						status: 1,
						time: '2024年02月22日',
						income_num: '149.95997471',
					},
					{
						status: 1,
						time: '2024年02月22日',
						income_num: '149.95997471',
					},
					{
						status: 1,
						time: '2024年02月22日',
						income_num: '149.95997471',
					},
				]
			};
		}
	}
</script>

<style lang="scss" scoped>
.income_list {
	width: 690rpx;
	margin: 30rpx auto 0;
	display: flex;
	flex-direction: column;
}
.income_item {
	width: 690rpx;
	height: 150rpx;
	// background: #110F20;
	border-radius: 15rpx 15rpx 15rpx 15rpx;
	padding: 30rpx;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-bottom: 30rpx;
}
.item_top {
	display: flex;
	justify-content: space-between;
	align-items: center;
	.time {
		font-family: PingFang SC, PingFang SC;
		font-weight: 400;
		font-size: 28rpx;
		color: #FFFFFF;
		line-height: 30rpx;
	}
	.pending_time {
		font-family: PingFang SC, PingFang SC;
		font-weight: 400;
		font-size: 28rpx;
		color: #FFFFFF;
		line-height: 30rpx;
	}
}
.item_bottom {
	display: flex;
	justify-content: space-between;
	align-items: center;
	.total {
		font-size: 26rpx;
		color: #FFFFFF;
	}
	.income_num {
		font-size: 26rpx;
		color: #FFFFFF;
	}
}
.item_bottom1 {
	display: flex;
	justify-content: space-between;
	align-items: center;
	.total {
		font-size: 26rpx;
		color: #908F93;
	}
	.income_num {
		font-weight: 600;
		font-size: 26rpx;
		color: #1CE89F;
	}
}
.isPending {
	font-size: 24rpx;
	color: #FF9900;
}
.pending_item {
	background: #213635;
}
.done_item {
	background: #110F20;
}
</style>
