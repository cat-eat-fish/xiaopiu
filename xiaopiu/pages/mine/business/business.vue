<template>
	<view class="business">
		<view class="business-top">
			<view class="info">
				<view class="info-l">
					<view class="avatar">
						<image class="img" src="/static/img/category/3.png"  mode="widthFix"></image>
					</view>
				</view>
				<view class="info-r">
					<view class="name">小米官方旗舰店</view>
					<view class="follow">
						<text class="text">199人关注</text>
						<text class="status">已关注</text>
					</view>
				</view>
			</view>
			<view class="phone">
				<text class="text">电话：</text>
				<text class="in">13888888888</text>
			</view>
			<view class="address">
				<text class="text">地址：</text>
				<text class="in">河南省。。。。。。</text>
			</view>
		</view>
		<view class="business-content">
			<cat-tab position="relative" @change="tagger" bg="#ff1b1b" :initIndex="initIndex" :hasan="false" :navList="modelData" border="none">
				<view v-if="initIndex === 0">
					<view class="commodity">
						<view class="item" v-for="(item,index) in [1,2,3,4]" :key="index">
							<view class="item-l">
								<image class="img" src="/static/img/category/3.png" mode="widthFix"></image>
							</view>
							<view class="item-r">
								<view class="name">iphone...</view>
								<view class="money">
									<view class="text">￥1522</view>
									<view class="get">去选取</view>
								</view>
								<view class="info1">
									<text class="info1-1">1件起批</text>
									<text class="info1-2">库存10件</text>
									<text class="info1-3">月销量20件</text>
								</view>
								<view class="info2">
									<text class="info2-1">正品行货</text>
									<text class="info2-2">全国联保</text>
									<text class="info2-3">收货后请点确认收货</text>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view v-if="initIndex === 1">
					<view class="commodity2">
						<view class="item" v-for="(item,index) in [1,2,3,4]" :key="index">
							<view class="item-top">
								<view class="get">求购</view>
								<view class="name">求购苹果。。。</view>
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
				</view>
				<view v-if="initIndex === 2">
					<view class="commodity3">
						<view class="content">
							<view class="item" v-for="(item,index) in info" :key="index">
								<view class="text">{{item.text}}</view>
								<view class="con">{{item.con}}</view>
							</view>
						</view>
					</view>
				</view>
			</cat-tab>
		</view>
	</view>
</template>

<script>
	import catTab from "@/components/cat-tab.vue"
	export default {
		components:{catTab},
		data() {
			return {
				modelData:[{text:"商品"},{text:"求购"},{text:"简介"}],
				initIndex:0	,
				info:[
					{id:0,text:"商家简介",con:"fffffffffffff"},
					{id:1,text:"商家电话",con:"fffffffffffff"},
					{id:2,text:"商家地址",con:"fffffffffffff"},
					{id:3,text:"注册时间",con:"2019-06-28"},
					{id:4,text:"注册证明",con:"fffffffffffff"},
				],
			}
		},
		methods: {
			tagger(i) {
				this.initIndex = i;
			},
		}
	}
</script>

<style lang="scss">
@import url("./style.scss");
/* @import url("../../../static/css/modular.css"); */

// business
.business{
	height: 100%;
    min-height: 100vh;
	background-color: #d8d7d7;
	.business-top{
		width: 100%;
		height: 320upx;
		padding: 30upx 0;
		background-color: #007AFF;
	}
	.info{
		display: flex;
		padding: 0 24upx;
		margin-bottom: 30upx;
	}
	.info .info-r{
		margin-left: 24upx;
	}
	.avatar{
		width:120upx;
		height: 120upx;
		border-radius: 50%;
		overflow: hidden;
	}
	.avatar uni-image{width: 100%;display: block;}
	.follow{font-size:24upx;display: flex;}
	.follow .status{margin-left: 24upx;width: 73px;text-align: center;color: #fff;background-color: #ff1b1b;border-radius: 15px;display: block;}
	.phone,.address{padding: 0px 24upx 0;}
}

/* commodity */
.commodity{overflow: hidden;
	.item{
		width: 100%;
		padding: 40upx 30upx;
		background-color: #fff;
		display: flex;
	    margin-top: 20px;
		.item-l{
			width: 200upx;
			height: 200upx;
			.img{display: block;width: 100%;width: 200upx;height: 200upx;}
		}
		.item-r{margin-left: 24upx;width: 100%;
			.info1,.item .item-r .info2{font-size: 24upx;}
		}
	}
	.money{justify-content: space-between;
		.text{font-size: 36upx;color: #E80080;}
		.get{width: 140upx;background-color:#e82222;line-height:  60upx;height: 60upx;color: #fff;text-align: center;border-radius: 15px;}
	}
	.info1,.info2,.money{display: flex;width: 100%;}
	.info2{color: red;}
	.info1 text{margin-right: 15upx;font-size: 24upx}
	.info2 text{margin-right: 8upx;font-size: 24upx}
}

.commodity2,.commodity3{
	overflow: hidden;
}
.commodity2{
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
.commodity3{
	padding: 0;
	.content{
		margin: 30upx;
		border-radius: 10upx;
		background-color: #fff;
		padding: 30upx 20upx;
		.item::nth-child(1){
			margin: 0;
		}
		.item{
			margin-top: 30upx;
			display: flex;
			.text{
				width: 20%;
			}
			.con{
				box-sizing: border-box;
				border-bottom: 2upx solid #333;
				width: 80%;
				color: #999;
				padding-bottom: 20upx;
			}
		}
	}
}
</style>
