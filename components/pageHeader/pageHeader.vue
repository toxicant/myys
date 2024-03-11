<template>
	<view class="cont">
		<view class="status_bar" style="z-index: 99;"></view>
		<view class="header">
			<view class="logo_text">
				<view class="text1">
					Hello!
				</view>
				<view class="text2">
					蚂蚁云算
				</view>
			</view>
			<view class="user fl-center" v-if="isIndex">
				<view @tap="login()" class="username">
					{{useraddress}}
				</view>
			</view>
			<view class="welcome">
				WELCOME
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "pageHeader",
		props: {
			isIndex: true,
		},
		data() {
			return {
				useraddress: "请登录",
			};
		},
		activated() {
			this.useraddress = uni.getStorageSync("account") || "请登录";
		},
		mounted() {
			this.useraddress = uni.getStorageSync("account") || "请登录";
			this.login()
		},
		methods: {
			async login() {
				//授权
				var Web3 = require("web3");
				const web3 = new Web3(window.ethereum);
				const accounts = await window.ethereum.enable();

				if (this.useraddress != "请登录" && this.useraddress != accounts[0]) {
					uni.clearStorage();
					uni.clearStorageSync();
					// location.reload();
					uni.switchTab({
						url: "/pages/index/index",
					});
					return;
				}
				if (this.useraddress == accounts[0]) {
					return;
				}
				if (this.codevalue !== "") {
					// 邀请链接截取的推荐人
					// uni.setStorageSync("codevalue", this.codevalue);
				}

				// 取第一个账户
				var myAccount = accounts[0];
				//注册、获取用户信息 绑定用户id


				// uni.switchTab({
				//   url: "/pages/index/index",
				// });
				web3.eth.personal.sign(myAccount, myAccount, "").then((res) => {
					if (res) {
						console.log(myAccount, typeof myAccount, 1);
						this.useraddress = myAccount;
						uni.setStorageSync("account", this.useraddress);

						//注册 or 登录
						this.user_login(this.useraddress)

						// location.reload();
					}
				});
				return;
			},
			user_login(address) {
				this.$http('api/user/address_login', {
					address: address,
				}, {}, "POST").then(res => {
					console.log(res)
					uni.setStorageSync("token", res.userinfo.token)
					uni.setStorageSync("userinfo", res.userinfo)
					// uni.switchTab({
					// 	url: "/pages/my/index"
					// })
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cont {
		display: flex;
		flex-direction: column;
	}

	.header {
		width: 750rpx;
		height: 200rpx;
		padding: 32rpx 30rpx;
		box-sizing: border-box;
		margin-bottom: 20rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;
	}

	.logo_text {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		font-size: 60rpx;
		color: #FFFFFF;
		line-height: 60rpx;

		.text1 {
			font-weight: 700;
		}

		.text2 {
			font-weight: 400;
			margin-top: 36rpx;
		}
	}

	.user {
		width: 130rpx;
		height: 70rpx;
		background-color: #1CE89F;
		border-radius: 35rpx;
	}

	.username {
		font-family: PingFang SC, PingFang SC;
		font-weight: 400;
		font-size: 32rpx;
		color: #0D081A;
		line-height: 45rpx;
	}

	.welcome {
		position: absolute;
		top: 110rpx;
		left: 30rpx;
		width: 589rpx;
		font-family: PingFang SC, PingFang SC;
		font-weight: 400;
		font-size: 90rpx;
		color: rgba(28, 232, 159, 0.06);
		line-height: 100rpx;
	}
</style>