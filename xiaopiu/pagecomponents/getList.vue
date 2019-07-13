<template>
	<view class="commodityList">
		<view class="item" v-for="(item,index) in [1,2,3,4]" :key="index">
			<view class="item-top">
				<view class="get">求购</view>
				<view class="name">求购苹果。。。</view>
			</view>
			<view class="m">
				<view class="l">
					<view class="icon"></view>
					<view class="name">邓州市</view>
					<view class="dj">一级会员</view>
				</view>
				<view class="time">
					2016-9-5
				</view>
			</view>
			<view class="info">
				<view class="info-l">
					<view class="look">1789次浏览</view>
					<view class="bj">5人报价</view>
				</view>
				<view class="info-r">
					20分钟前
				</view>
			</view>
			<view class="other">
				<view class="other-l">
					<view class="iconfont iconmoneycollect"></view>
					<view>我要报价</view>
				</view>
				<view class="other-r">
					<view class="iconfont iconshare"></view>
					<view>分享</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			
		},
		data(){
			return{
				
			}
		},
		methods:{
			
		}
	}
</script>

<style lang="scss">
	.commodityList{
		.item{
			padding: 20upx;
			background-color: #fff;
			margin-top: 40upx;
			.item-top{display: flex;
				.get{
					width: 130upx;
					background-color: #e82222;
					line-height: 40upx;
					height: 40upx;
					color: #fff;
					font-size: 24upx;
					text-align: center;
					border-radius: 30upx;
				}
				.name{line-height: 40upx;margin-left: 10upx}
			}
			.m{
				display: flex;justify-content: space-between;width: 100%;
				.l{width: 60%;display: flex;
					.dj{margin-left: 20upx}
				}
				.time{font-size: $uni-font-size-base}
			}
			.info{display: flex;margin:30upx 0;padding: 0;justify-content: space-between;width:100%;
				.info-l{display: flex;
					.look,.bj{
						padding: 0 26upx;
						background-color: #969696;
						line-height: 40upx;
						height: 40upx;
						color: #fff;
						font-size: 24upx;
						text-align: center;
						border-radius: 16upx;
					}
					.bj{margin-left: 10upx}
				}
				.info-r{line-height: 40upx}
			}
			.other{
				display: flex;justify-content: space-around;padding:20upx 0 4upx;border-top:1upx solid #999;
				.other-l,.other-r{
					display: flex;width: 50%;justify-content: center;
					.iconfont{    
						color: #007AFF;
						font-size: 40upx;
						width: 48upx;
						height: 48upx;
						overflow: hidden;
						text-align: center;
						line-height: 56upx;
					}
				}
			}
		}
	}
</style>
