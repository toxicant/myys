<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "@/uni_modules/uview-ui/index.scss";
	.status_bar {
	      height: var(--status-bar-height);
	      width: 100%;
				background-color: #0D081A;
				/* color: #FFFFFF!important; */
	  }
		.fl-center {
			display: flex;
			justify-content: center;
			align-items: center;
		}
	page {  
	  background-color: #0D081A;  
	}  
</style>
