<template>
	<view>
		<page-header></page-header>
		
		<view class="swiper fl-center">
			<view class="swiper_img">
				<image :src="banner" mode=""></image>
				
			</view>
		</view>
		
		<view class="tab_swiper">
			<view class="tabs">
				<view class="tab_item" @click="tabIndex = 0" :class="tabIndex == 0 ? 'tab_selected' : ''">
					SMH服务器
				</view>
				<view class="tab_item" @click="tabIndex = 1" :class="tabIndex == 1 ? 'tab_selected' : ''">
					蚂蚁KS系列
				</view>
				<view class="slider" :style="{ left: `${tabIndex * 50 + 25}%` }">
					
				</view>
			</view>
			
			<view class="tab_content">
				<view class="goods_list" v-if="tabIndex == 0">
					<view class="good_item" v-for="(item,index) in goodsList1" :key="index">
						<view class="good_img" @click="toPage(item.id)">
							<image :src="item.image" mode=""></image>
						</view>
						
						<view class="good_info" @click="toPage(item.id)">
							<view class="good_name">
								{{ item.name }}
							</view>
							<view class="good_tip">
								购买{{ item.income_day }}天开始发放收益
							</view>
							<view class="good_price">
								<span>售价：</span>
								<span style="font-size: 34rpx;color: #FF9900;font-weight: 600;display: inline-block;margin: 0 10rpx;">{{ item.price }}</span>
								<span style="font-size: 22rpx;color: #FF9900;">USDT</span>
							</view>
						</view>
						
						<view class="buy_btn fl-center">
							<view class="buy">
								购买
							</view>
						</view>
					</view>
				</view>
				
				<view class="goods_list" v-if="tabIndex == 1">
					<view class="good_item" v-for="(item,index) in goodsList2" :key="index">
						<view class="good_img" @click="toPage(item.id)">
							<image :src="item.image" mode=""></image>
						</view>
						
						<view class="good_info" @click="toPage(item.id)">
							<view class="good_name">
								{{ item.name }}
							</view>
							<view class="good_tip">
								购买{{ item.income_day }}天开始发放收益
							</view>
							<view class="good_price">
								<span>售价：</span>
								<span style="font-size: 34rpx;color: #FF9900;font-weight: 600;display: inline-block;margin: 0 10rpx;">{{ item.price }}</span>
								<span style="font-size: 22rpx;color: #FF9900;">USDT</span>
							</view>
						</view>
						
						<view class="buy_btn fl-center">
							<view class="buy">
								购买
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
				tabIndex: 0,
				goodsList1: [],
				goodsList2: [],
			};
		},
		onLoad() {
			this.getShopList()
			this.getBanner()
		},
		methods: {
			getBanner() {
				this.$http('api/index/banner',{type:1}).then(res => {
					this.banner = res.list[0].image
					console.log(res)
				})
			},
			toPage(id) {
				console.log(id)
				uni.navigateTo({
					url: '/pages/mall/goods_detail?id=' + id
				})
			},
			getShopList() {
				this.$http('api/device/shop_list').then(res => {
					this.goodsList1 = res.list
				})
				this.$http('api/device/shop_list',{type:1}).then(res => {
					this.goodsList2 = res.list
				})
			},
		}
	}
</script>

<style lang="scss" scoped>

.swiper {
	margin: 40rpx auto;
}
.swiper_img > image {
	width: 690rpx;
	height: 345rpx;
	border-radius: 15rpx 15rpx 15rpx 15rpx;
	background-color: #1B275C;
	// margin: 0 auto;
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
		height: 220rpx;
		background: #110F20;
		border-radius: 15rpx 15rpx 15rpx 15rpx;
		padding: 30rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		position: relative;
		margin-bottom: 30rpx;
	}
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
.buy_btn {
	position: absolute;
	right: 30rpx;
	bottom: 30rpx;
	width: 90rpx;
	height: 50rpx;
	background: #1CE89F;
	box-shadow: 0rpx 0rpx 10rpx 0rpx rgba(255,255,255,0.1);
	border-radius: 100rpx 100rpx 100rpx 100rpx;
	border: 1rpx solid #1CE89F;
	.buy {
		font-family: PingFang SC, PingFang SC;
		font-weight: 400;
		font-size: 24rpx;
		color: #0D081A;
		line-height: 34rpx;
	}
}
</style>
