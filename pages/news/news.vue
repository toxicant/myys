<template>
	<view class="content">
		<page-header></page-header>
		
		<view class="swiper">
			<u-swiper :list="banner" keyName="image" :autoplay="false" indicator indicatorMode="line" circular height="345rpx" :indicatorActiveColor="'#1CE89F'"></u-swiper>
		</view>
		
		<view class="news_list">
			<view class="news_item" v-for="(item,index) in newsList" :key="index" :class="index == newsList.length-1 ? 'noBorder' : ''" @click="toPage(item.id)">
				<view class="news_item_info">
					<view class="news_title">
						{{ item.title }}
					</view>
					<view class="news_detail_info">
						<!-- <view class="like">
							<image src="../../static/news/like.png" mode=""></image>
							<span>{{ item.like }}</span>
						</view>
						<view class="reply">
							<image src="../../static/news/reply.png" mode=""></image>
							<span>{{ item.reply }}</span>
						</view> -->
						<view class="time">
							<span>{{ item.create_time }}</span>
						</view>
					</view>
				</view>
				<view class="news_img">
					<image :src="item.image" mode=""></image>
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
				banner: [
					'https://cdn.uviewui.com/uview/swiper/swiper3.png',
					'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					'https://cdn.uviewui.com/uview/swiper/swiper1.png',
				],
				
				newsList: [
					{
						imgUrl: '../../static/market/good_img2.png',
						title: '比特币现货ETF获批一个多月后，比特币价格站上5万美元',
						like: '23',
						reply: '2',
						time: '01-10 16:24',
						id: 0
					},
					{
						imgUrl: '../../static/market/good_img2.png',
						title: '狂飙！比特币也有春节行情？',
						like: '23',
						reply: '2',
						time: '01-10 16:24',
						id: 1
					},
					{
						imgUrl: '../../static/market/good_img2.png',
						title: '比特币期货守住5.2万美元 以太币期货涨向3000美元',
						like: '23',
						reply: '2',
						time: '01-10 16:24',
						id: 2
					},
					{
						imgUrl: '../../static/market/good_img2.png',
						title: '绿水青山里的宁夏答卷',
						like: '23',
						reply: '2',
						time: '01-10 16:24',
						id: 3
					},
				]
			};
		},
		
		onLoad() {
			this.getNewsList()
			this.getBanner()
		},
		methods: {
			getBanner() {
				this.$http('api/index/banner',{type:2}).then(res => {
					console.log(res)
					this.banner = res.list
				})
			},
			toPage(id) {
				console.log(id)
				uni.navigateTo({
					url: '/pages/news/news_detail?id=' + id
				})
			},
			getNewsList() {
				this.$http('api/news/news_list').then(res => {
					this.newsList = res.list
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.swiper {
		width: 690rpx;
		height: 420rpx;
		margin: 80rpx auto 10rpx;
	}
	/deep/ .u-swiper {
		overflow: visible!important;
	}
	
	.news_list {
		width: 690rpx;
		margin: 10rpx auto;
		display: flex;
		flex-direction: column;
		
	}
	.noBorder {
		border-bottom: none!important;
	}
	.news_item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 235rpx;
		border-bottom: 1px solid #1E192A;
	}
	.news_item_info {
		height: 150rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		flex: 1;
	}
	.news_title {
		font-family: PingFang SC, PingFang SC;
		font-weight: 400;
		font-size: 17px;
		color: #FFFFFF;
		line-height: 28px;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
	.news_img {
		width: 200rpx;
		height: 150rpx;
		margin-left: 40rpx;
		image {
			width: 200rpx;
			height: 150rpx;
		}
	}
	
	.news_detail_info {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-family: PingFang SC, PingFang SC;
		font-weight: 400;
		font-size: 24rpx;
		color: #908F93;
		line-height: 24rpx;
		padding-right: 30rpx;
		box-sizing: border-box;
	}
	
	.like {
		display: flex;
		align-items: center;
		image {
			width: 25rpx;
			height: 25rpx;
			margin-right: 8rpx;
		}
	}
	
	.reply {
		display: flex;
		align-items: center;
		image {
			width: 25rpx;
			height: 25rpx;
			margin-right: 8rpx;
		}
	}
	.time {
	}
	.content {
		padding-bottom: 80rpx;
	}
</style>