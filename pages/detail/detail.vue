<template>
	<view class="page-container">
		<up-navbar title="详情页" @rightClick="rightClick" :autoBack="true">
		</up-navbar>
		<view>
			<image class="detail-img" :src="imgUrl" mode="scaleToFill"></image>
			<view class="detail-top">
				<view class="top-title">2021菏泽未来城市汽车展</view>
				<view class="top-date">
					2021年4月14日-4月18日
				</view>
				<view class="top-num">
					<view class="num-left">
						<view>10点赞</view>
						<view>100评论</view>
						<view>100浏览</view>
					</view>
					<view class="num-right" @click="onShare">分享</view>
				</view>
			</view>
			<view class="bottom-box">
				<view class="table-box">
					<view class="table-item" v-for="(item,index) in detailInfoList">
						<view class="item-title">{{item.title}}</view>
						<view class="item-detail">{{item.detail}}</view>
					</view>
				</view>
				<view class="intro">车展介绍</view>
				<view class="intro-txt">{{introduction}}</view>
				<up-button type="primary" text="预约门票"></up-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgUrl: '../../static/shuijiao.jpg',
				detailInfoList:[
				  {title: '时间',detail:'2021年4月14日-4月18日'},
				  {title: '地点',detail:'菏泽国际中心'},
				  {title: '门票',detail: 100},
				  {title: '官网',detail:'http://carShow.com'},
				  {title: '主办方',detail:'中国机械国际合作股份有限公司、中国汽车流通协会'},
				  {title: '承办方',detail:'中国机械国际合作股份有限公司、菏泽市城投国际会展有限公司'}
				],
				introduction: '2021第十一届菏泽国际汽车展览会暨新能源·智能汽车展（以下简称“菏泽国际车展”）将于4月15-19日在菏泽国际会议展览中心盛大举行。此次菏泽国际车展将启用菏泽国际会议展览中心室内1-6号展馆以及室外北广场，豪华、进口、合资、自主品牌将齐聚现场，预计参展品牌达到80余个、近千款车型争相亮相，全面满足市民不同的购车需求。',
			}
		},
		methods: {
			rightClick() {
				console.log('rightClick');
			},
			onShare(){
				uni.share({
					provider: "weixin",
					scene: "WXSceneSession",
					type: 0,
					href: "http://uniapp.dcloud.io/",
					title: "uni-app分享",
					summary: "我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验！",
					imageUrl: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni@2x.png",
					success: function (res) {
						console.log("success:" + JSON.stringify(res));
					},
					fail: function (err) {
						console.log("fail:" + JSON.stringify(err));
					}
				});
			}
		}
	}
</script>

<style>
.page-container {
	display: flex;
	flex-direction: column;
	height: 100vh;
	background: #f5f5f5;
}
.detail-img{
	width: 100%;
}
.detail-top{
	padding: 20rpx;
	background: #fff;
	.top-title{
		font-size: 24rpx;
		font-weight: bold;
	}
	.top-date{
		margin-top: 10rpx;
		font-size: 20rpx;
		color: #666;
	}
	.top-num{
		display: flex;
		margin-top: 10rpx;
		font-size: 22rpx;
		color: #666;
		.num-left{
			display: flex;
			margin-right: auto;
			width: 400rpx;
		}
	}
}
.bottom-box{
	margin-top: 10rpx;
	padding: 20rpx;
	background: #fff;
	.table-box{
		display: flex;
		flex-direction: column;
		border-top: 1rpx solid #ccc;
		.table-item{
			display: flex;
			line-height: 42rpx;
			border-bottom: 1rpx solid #ccc;
			border-left: 1rpx solid #ccc;
			border-right: 1rpx solid #ccc;
			align-items: center;
			.item-title{
				padding: 5rpx;
				flex: 1;
			}
			.item-detail{
				padding: 5rpx;
				flex: 2;
				border-left: 1rpx solid #ccc;
			}
		}
	}
}
.intro{
	margin-top: 20rpx;
	font-size: 36rpx;
	font-weight: bold;
}
.intro-txt{
	margin-top: 10rpx;
	margin-bottom: 10rpx;
}
</style>
