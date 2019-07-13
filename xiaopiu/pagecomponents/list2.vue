<template>
	<view class="list">
		<view  v-for="(item, index) in goodsList" :key="index" class="guess-item" @click="navToDetailPage(item)">
			<!-- <view class="image-wrapper"> -->
				<image class="image-wrapper" :src="item.image" mode="aspectFill"></image>
			<!-- </view> -->
			
			<view class="text">
				<view class="title">
					<!-- <view class="label">求购</view> -->
					<view class="title-name">{{item.title}}</view>
				</view>
				<view class="business">
					<view class="money">￥1889-2000</view>
				</view>
				<view class="other">
					<view>共有5个商家在售</view>
					<!-- <view class="l">
						<view class="label">1789次浏览</view>
						<view class="label">5人报价</view>
					</view>
					<view class="addresss">
						<view class="iconfont iconlocation-fill"></view>
						<view class="address-text">郑州</view>
					</view> -->
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniRate from "@/components/uni-rate/uni-rate.vue"
	export default{
		components:{uniRate},
		props:{
			
		},
		data(){
			return{
				goodsList:[],
			}
		},
		created() { 
			this.loadData()
		},
		methods:{
			//详情页
			navToDetailPage(item) {
				//测试数据没有写id，用title代替
				let id = item.title;
				uni.navigateTo({
					url: `/pages/index/product/product?id=${id}`
				})
			},
			async loadData() {
				console.log(1)
				// let carouselList = await this.$api.json('carouselList');
				// this.titleNViewBackground = carouselList[0].background;
				// this.swiperLength = carouselList.length;
				// this.carouselList = carouselList;
				
				let goodsList = await this.$api.json('goodsList');
				this.goodsList = goodsList || [];
			},
		}
	}
</script>

<style lang="scss">
	.list{
		display: flex;
		flex-wrap: wrap;
		padding: 40upx 30upx 0;
		background: #fff;
		.guess-item{
			display: flex;
			width: 96%;
			padding-bottom: 20px;
			.image-wrapper{
				width: 200upx;
				height: 200upx;
			}
			.text{
				width: 68%;
				margin-left: 10upx;
				.label{line-height: 26px;background: #e0e0e0;color: #424141; border-radius: 15px;width: 30%;margin: 0 10upx 0 0;text-align: center;}
				.title{
					display: flex;
					.title-name{width:80%; white-space: nowrap;text-overflow: ellipsis;overflow: hidden}
				}
				.business{
					display: flex;
					.money{color: red;margin-bottom: 20upx;}
				}
				.other{display: flex;justify-content: space-between;
					.l,.addresss{display: flex;}
					.l{
						width: 70%;
						justify-content: start;
						.label{font-size: 12px}
						.label:first-child{width: 60%;}
						.label:last-child{width:42%;}
					}
					.addresss{
						.iconfont{color: #c5bfbf}
					}
				}
			}
		}
	}
</style>
