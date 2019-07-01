<template>
	<view class="purchase">
		<view class="info">
			<view class="info-l">
				<view class="avatar">
					<image class="img" src="/static/img/category/3.png"  mode="widthFix"></image>
				</view>
			</view>
			<view class="info-r">
				<view class="info-r-1">
					<view class="name">邓州。。</view>
					<view class="box">一级会员</view>
				</view>
				<view class="info-r-2">
					<view class="yticon icon-dizhi"></view>
					<view class="add">邓州。。</view>
				</view>
			</view>
			<view class="iconfont iconright goto"></view>
		</view>
		<view class="info2">
			<view class="info2-1">
				<view class="get">求购</view>
				<view class="name">求购。。</view>
			</view>
			<view class="info2-2">
				<view class="info2-2-l">
					<view class="look">1789次浏览</view>
					<view class="bj">5人报价</view>
				</view>
				<view class="info2-2-r">
					20分钟前
				</view>
			</view>
			<view class="info2-3">
				<view class="text">描述</view>
				<view class="con">aa</view>
			</view>
			<view class="info2-4">
				<view class="text">截止日期</view>
				<view class="con">aa</view>
			</view>
			<view class="info2-5">
				<view class="text">交易方式</view>
				<view class="con">邮寄</view>
			</view>
		</view>
		<view class="info3">
			<view class="item">
				<view class="text">报价内容</view>
				<view class="con">
					<input type="text" value="" placeholder="请输入您的报价内容" />
				</view>
			</view>
			<view class="item">
				<view class="text">您的电话</view>
				<view class="con">
					<input type="text" value="" placeholder="请输入您的电话,方便联系" />
				</view>
			</view>
		</view>
		<view class="btns">
			<button class="btn" type="primary">确定报价</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.purchase{
		background-color: #d6d6d6;
		overflow: hidden;
		height: 100%;
		position: relative;
		min-height: 100vh;
		.info{
			margin: 40upx 0;
			display: flex;
			background-color: #fff;
			padding:30upx 30upx;
			.avatar{
				width: 100upx;
				height: 100upx;
				border-radius: 50%;
				overflow: hidden;
				.img{
					display: block;
					width: 100%;
				}
			}
			.info-r{margin-left: 40upx;
				.info-r-1{display: flex;
					.name{line-height: 40upx}
					.box{
						margin-left: 40upx;
						width: 130upx;
						background-color: #e82222;
						line-height: 40upx;
						height: 40upx;
						color: #fff;
						font-size: 12px;
						text-align: center;
						border-radius: 15px;
					}
				}
				.info-r-2{display: flex;
					.add{margin-left: 20upx}
				}
			}
			.iconfont.goto{
				line-height: 90upx;
				flex: 1;
				text-align: right;
			}
		}
		.info2{
			background-color: #fff;
			padding: 20upx 24upx;
			.info2-1,.info2-2,.info2-3,.info2-4,.info2-5{display: flex}
			.info2-1{
				.name{
					line-height: 40upx;
					margin-left: 20upx;
				}
				.get{
					width: 130upx;
					background-color: #e82222;
					line-height: 40upx;
					height: 40upx;
					color: #fff;
					font-size: 12px;
					text-align: center;
					border-radius: 15px;
				}
			}
			.info2-2{
				margin: 40upx 0;
				justify-content: space-between;
				.info2-2-l{
					display: flex;
					.look,.bj{
						padding: 0 13px;
						background-color: #969696;
						line-height: 20px;
						height: 20px;
						color: #fff;
						font-size: 12px;
						text-align: center;
						border-radius: 8px;
					}
					.bj{margin-left: 20upx}
				}
			}
			.info2-3 .text,.info2-4 .text,.info2-5 .text{
				width: 17%;
				text-align: right;
			}
			.info2-3 .con,.info2-4 .con,.info2-5 .con{
				width: 70%;
				margin-left: 50upx;
			}
		}
		.info3{background: #fff;padding: 30upx 24upx;margin-top: 40upx;
			.item{display: flex;
				.text{width: 20%;}
				.con{width: 80%;}
			}
			.item:nth-child(2){margin-top: 50upx}
		}
		.btns{
			bottom: 80upx;position:absolute;width: 100%;padding: 0 24upx;
			.btn{}
		}
	}
</style>
