<template>
	<view>
		<navbar :title="'详情'"></navbar>

		<view class="news_content">
			<view class="news_title">
				{{news.title}}
			</view>
			<view class="user_card">
				<view class="user_avatar">
					<image :src="news.avatar" mode=""></image>
				</view>
				<view class="user_info">
					<view class="user_name">
						{{news.user_name}}
					</view>
					<view class="time">
						{{news.create_time}}
					</view>
				</view>
			</view>

			<view class="news_article">
				<view class="">
					<image :src="news.image" mode=""></image>
				</view>
				<!-- <view class="article_text">
					<rich-text :nodes="news.content">
					</rich-text>
				</view> -->
				<view class="uni-common-mt article_text">
					<rich-text :nodes="news.content"></rich-text>
				</view>
			</view>
		</view>

		<!-- <view class="comment fl-center">
			<view class="comment_btn">
				<view class="comm_text">
					写评论
				</view>
			</view>
			<view class="like">
					<image src="../../static/news/like.png" mode=""></image>
					<span>23</span>
			</view>
			<view class="reply">
				<image src="../../static/news/reply.png" mode=""></image>
				<span>1</span>
			</view>
		</view> -->
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
				news: {},
			};
		},
		onLoad() {
			this.getNews(this.$route.query.id)
		},
		methods: {
			getNews(id) {
				this.$http('api/news/news_info', {
					id: id
				}).then(res => {
					console.log(res)
					this.news = res.info
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.news_content {
		display: flex;
		flex-direction: column;
		margin: 0 auto;
		padding: 0 30rpx 140rpx;
		box-sizing: border-box;
	}

	.news_title {
		width: 681rpx;
		height: 78rpx;
		font-family: PingFang SC, PingFang SC;
		font-weight: 400;
		font-size: 30rpx;
		color: #FFFFFF;
		line-height: 40rpx;
		margin: 20rpx auto 44rpx;
	}

	.user_card {
		width: 690rpx;
		height: 120rpx;
		background: #151326;
		padding: 28rpx 30rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: flex-start;
		align-items: center;

		.user_avatar {
			width: 64rpx;
			height: 64rpx;
			margin-right: 28rpx;

			image {
				width: 64rpx;
				height: 64rpx;
			}
		}
	}

	.user_info {
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;
	}

	.user_name {
		font-family: PingFang SC, PingFang SC;
		font-weight: 400;
		font-size: 24rpx;
		color: #FFFFFF;
		line-height: 24rpx;
	}

	.time {
		font-family: PingFang SC, PingFang SC;
		font-weight: 400;
		font-size: 24rpx;
		color: #908F93;
		line-height: 24rpx;
	}

	.news_article {
		padding: 40rpx 0;
		box-sizing: border-box;

		image {
			width: 690rpx;
			height: 402rpx;
		}
	}

	.article_text {
		font-family: PingFang SC, PingFang SC;
		font-weight: 400;
		font-size: 28rpx;
		color: #FFFFFF;
		line-height: 43rpx;

		p {}
	}

	.comment {
		width: 750rpx;
		height: 120rpx;
		background: #070311;
		position: fixed;
		bottom: 0;
		left: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 25rpx 30rpx;
		box-sizing: border-box;
	}

	.comment_btn {
		width: 466rpx;
		height: 70rpx;
		background: #151326;
		border-radius: 100rpx 100rpx 100rpx 100rpx;
		padding: 16rpx 25rpx;
		box-sizing: border-box;
	}

	.comm_text {
		font-family: PingFang SC, PingFang SC;
		font-weight: 400;
		font-size: 26rpx;
		color: #908F93;
		line-height: 38rpx;
	}

	.like {
		display: flex;
		align-items: center;
		font-family: PingFang SC, PingFang SC;
		font-weight: 400;
		font-size: 24rpx;
		color: #908F93;
		line-height: 24rpx;
		margin-right: 20rpx;

		image {
			width: 25rpx;
			height: 25rpx;
			margin-right: 8rpx;
		}
	}

	.reply {
		display: flex;
		align-items: center;
		font-family: PingFang SC, PingFang SC;
		font-weight: 400;
		font-size: 24rpx;
		color: #908F93;
		line-height: 24rpx;

		image {
			width: 25rpx;
			height: 25rpx;
			margin-right: 8rpx;
		}
	}
</style>