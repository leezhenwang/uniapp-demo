<template>
	<!-- <view>仿车展日项目</view> -->
	<view class="page-container">
		<up-navbar title="首页" @rightClick="rightClick" :autoBack="true">
		</up-navbar>
		<view>
			<uni-swiper-dot :info="bannerList" :current="current" field="content" :mode="mode">
				<swiper class="swiper-box" @change="change">
					<swiper-item v-for="(item ,index) in bannerList" :key="index">
						<image class="swiper-img" :src="item.imgUrl" mode="aspectFill"></image>
					</swiper-item>
				</swiper>
			</uni-swiper-dot>
		</view>
		<up-sticky bgColor="#fff">
			<up-tabs class="tab-box" :list="tabList" @click="tabClick"
				itemStyle="padding-left: 15px; padding-right: 15px; min-width: 20%; height: 34px;"></up-tabs>
		</up-sticky>
		<view class="list-box">
			<up-list @scrolltolower="scrolltolower" height="height">
				<up-list-item v-for="(item, index) in this.tabList[this.tabIndex].list" :key="index">
					<view class="item-box">
						<image class="item-img" :src="item.imgUrl" mode="aspectFill"></image>
						<view class="item-right">
							<view class="item-txt item-title">{{item.title}}</view>
							<view class="item-txt item-date">{{item.date}}</view>
							<view class="item-txt item-location">{{item.location}}</view>
						</view>
					</view>
				</up-list-item>
			</up-list>
		</view>
		<view>
			<up-tabbar :value="tabbarValue" @change="change1" :fixed="true" :placeholder="true"
				:safeAreaInsetBottom="true">
				<up-tabbar-item text="首页" icon="home"></up-tabbar-item>
				<up-tabbar-item text="我的" icon="account"></up-tabbar-item>
			</up-tabbar>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				mode: 'dot',
				bannerList: [{
						imgUrl: '../../static/shuijiao.jpg'
					},
					{
						imgUrl: '../../static/shuijiao.jpg'
					},
				],
				tabList: [{
					name: '华东'
				}, {
					name: '华南'
				}, {
					name: '华中'
				}, {
					name: '华北'
				}, {
					name: '西南'
				}, {
					name: '西北'
				}, {
					name: '东北'
				}],
				tabIndex: 0,
				isLoading: false,
				tabbarValue: 0,
				height: '100rpx',
			}
		},
		onLoad() {
			this.tabList = this.tabList.map(item => {
				item.list = []
				return item
			})
			this.tabClick({
				index: 0
			})
		},
		onReady() {
			// 创建查询对象
			const query = uni.createSelectorQuery().in(this);

			// 查询元素并获取高度
			query.select('#list-box').boundingClientRect(res => {
				if (res) {
					console.log('元素高度:', res.height);
					this.height = res.height
				}
			}).exec();
		},
		methods: {
			change(e) {
				this.current = e.detail.current;
			},
			tabClick(item) {
				console.log('item', item);
				this.tabIndex = item.index
				this.tabList[this.tabIndex].list = this.tabList[this.tabIndex].list || []
				this.tabList[this.tabIndex].totalPage = this.tabList[this.tabIndex].totalPage ? this.tabList[this.tabIndex]
					.totalPage : Math.floor(Math.random(15, 20))
				if (!this.tabList[this.tabIndex].list.length) {
					this.genData(this.tabIndex, (this.tabList[this.tabIndex].page || 0) + 1)
				}
			},
			scrolltolower() {
				this.genData(this.tabIndex, (this.tabList[this.tabIndex].page || 0) + 1)
			},
			genData(index, newpage) {
				let tablist = this.tabList;
				// 超过总页数则返回
				if (tablist[index].totalPage && newpage > tablist[index].totalPage) {
					return
				}
				this.isLoading = true
				setTimeout(() => {
					let index1 = 1;
					tablist[index].page = newpage;
					// 第一页时设置总页数
					tablist[index].totalPage = newpage === 1 ? Math.floor(Math.random() * 10) : tablist[index]
						.totalPage;
					tablist[index].list = tablist[index].list ? tablist[index].list : []
					tablist[index].list = tablist[index].list.concat([{
							imgUrl: '../../static/shuijiao.jpg',
							title: `2021菏泽未来城市汽车展${index}-${newpage ? newpage : 0}-${(index1++)+5*(newpage-1)}`,
							date: '2021年4月14日-4月18日',
							location: '菏泽国际中心',
							id: `${index}-${newpage ? newpage : 0}-${(index1)+5*(newpage-1)}`
						},
						{
							imgUrl: '../../static/shuijiao.jpg',
							title: `2021菏泽未来城市汽车展${index}-${newpage ? newpage : 0}-${(index1++)+5*(newpage-1)}`,
							date: '2021年4月14日-4月18日',
							location: '菏泽国际中心',
							id: `${index}-${newpage ? newpage : 0}-${(index1)+5*(newpage-1)}`
						}, {
							imgUrl: '../../static/shuijiao.jpg',
							title: `2021菏泽未来城市汽车展${index}-${newpage ? newpage : 0}-${(index1++)+5*(newpage-1)}`,
							date: '2021年4月14日-4月18日',
							location: '菏泽国际中心',
							id: `${index}-${newpage ? newpage : 0}-${(index1)+5*(newpage-1)}`
						}, {
							imgUrl: '../../static/shuijiao.jpg',
							title: `2021菏泽未来城市汽车展${index}-${newpage ? newpage : 0}-${(index1++)+5*(newpage-1)}`,
							date: '2021年4月14日-4月18日',
							location: '菏泽国际中心',
							id: `${index}-${newpage ? newpage : 0}-${(index1)+5*(newpage-1)}`
						}, {
							imgUrl: '../../static/shuijiao.jpg',
							title: `2021菏泽未来城市汽车展${index}-${newpage ? newpage : 0}-${(index1++)+5*(newpage-1)}`,
							date: '2021年4月14日-4月18日',
							location: '菏泽国际中心',
							id: `${index}-${newpage ? newpage : 0}-${(index1)+5*(newpage-1)}`
						}, {
							imgUrl: '../../static/shuijiao.jpg',
							title: `2021菏泽未来城市汽车展${index}-${newpage ? newpage : 0}-${(index1++)+5*(newpage-1)}`,
							date: '2021年4月14日-4月18日',
							location: '菏泽国际中心',
							id: `${index}-${newpage ? newpage : 0}-${(index1)+5*(newpage-1)}`
						}, {
							imgUrl: '../../static/shuijiao.jpg',
							title: `2021菏泽未来城市汽车展${index}-${newpage ? newpage : 0}-${(index1++)+5*(newpage-1)}`,
							date: '2021年4月14日-4月18日',
							location: '菏泽国际中心',
							id: `${index}-${newpage ? newpage : 0}-${(index1)+5*(newpage-1)}`
						}, {
							imgUrl: '../../static/shuijiao.jpg',
							title: `2021菏泽未来城市汽车展${index}-${newpage ? newpage : 0}-${(index1++)+5*(newpage-1)}`,
							date: '2021年4月14日-4月18日',
							location: '菏泽国际中心',
							id: `${index}-${newpage ? newpage : 0}-${(index1)+5*(newpage-1)}`
						}, {
							imgUrl: '../../static/shuijiao.jpg',
							title: `2021菏泽未来城市汽车展${index}-${newpage ? newpage : 0}-${(index1++)+5*(newpage-1)}`,
							date: '2021年4月14日-4月18日',
							location: '菏泽国际中心',
							id: `${index}-${newpage ? newpage : 0}-${(index1)+5*(newpage-1)}`
						}, {
							imgUrl: '../../static/shuijiao.jpg',
							title: `2021菏泽未来城市汽车展${index}-${newpage ? newpage : 0}-${(index1++)+5*(newpage-1)}`,
							date: '2021年4月14日-4月18日',
							location: '菏泽国际中心',
							id: `${index}-${newpage ? newpage : 0}-${(index1)+5*(newpage-1)}`
						}, {
							imgUrl: '../../static/shuijiao.jpg',
							title: `2021菏泽未来城市汽车展${index}-${newpage ? newpage : 0}-${(index1++)+5*(newpage-1)}`,
							date: '2021年4月14日-4月18日',
							location: '菏泽国际中心',
							id: `${index}-${newpage ? newpage : 0}-${(index1)+5*(newpage-1)}`
						}, {
							imgUrl: '../../static/shuijiao.jpg',
							title: `2021菏泽未来城市汽车展${index}-${newpage ? newpage : 0}-${(index1++)+5*(newpage-1)}`,
							date: '2021年4月14日-4月18日',
							location: '菏泽国际中心',
							id: `${index}-${newpage ? newpage : 0}-${(index1)+5*(newpage-1)}`
						},
					])
					this.tabList = tablist
					console.log(this.tabList)
					this.isLoading = false
				}, 1000)
			},
			rightClick() {
				console.log('rightClick');
			},
			change1(item) {
				console.log(item)
				this.tabbarValue = item
			}
		}
	}
</script>

<style>
	.page-container {
		display: flex;
		flex-direction: column;
		height: 100vh;
	}

	.list-box {
		flex: 1;
		overflow: auto;
	}

	.swiper-box {
		height: 450rpx;
	}

	.swiper-img {
		width: 100%;
		height: 100%;
	}

	.tab-box {
		width: 100%;
		overflow-x: scroll;
	}

	.item-box {
		padding: 20rpx;
		width: 100%;
		display: flex;
		border-bottom: 1rpx solid #ccc;
	}

	.item-img {
		width: 200rpx;
		height: 100rpx;
	}

	.item-right {
		padding: 10rpx;

		.item-txt {
			padding-bottom: 10rpx;

			&.item-title {
				font-weight: bold;
				font-size: 18rpx;
			}

			&.item-date {
				font-size: 14rpx;
				color: #555;
			}

			&.item-location {
				font-size: 14rpx;
				color: #666;
			}
		}
	}
</style>