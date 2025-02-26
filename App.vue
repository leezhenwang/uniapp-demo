/* uni.scss */
@import '@/uni_modules/uview-plus/theme.scss';
// 需要在app.vue首行引入基础样式
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
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "@/uni_modules/uview-plus/index.scss";
</style>
