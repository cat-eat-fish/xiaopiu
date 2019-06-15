<template>
	<view class="container">
		<view class="row">
			<view class="title">头像</view>
			<view class="right"><view class="tis">
			<image src="/static/img/face.jpg" mode="widthFix"></image>
			</view><text class="cell-more yticon icon-you"></text></view>
		</view>
		<view class="row">
			<view class="title">昵称</view>
			<view class="right"><view class="tis">大黑哥</view>
			<text class="cell-more yticon icon-you"></text></view>
		</view>
		<view class="row">
			<view class="title">个性签名</view>
			<view class="right"><view class="tis">这人太懒了，什么都不写</view>
			<text class="cell-more yticon icon-you"></text>
			</view>
		</view>
		<view class="row" @click="toAddress">
			<view class="title">收货地址</view>
			<view class="right">
				<text class="cell-more yticon icon-you"></text>
			</view>
		</view>
		
		<view class="row" @click="navTo('实名认证')">
			<view class="title">实名认证</view>
			<view class="right">
				<text class="cell-more yticon icon-you"></text>
			</view>
		</view>
		
		<view class="list-cell m-t">
			<text class="cell-tit">消息推送</text>
			<switch checked color="#fa436a" @change="switchChange" />
		</view>
		<view class="list-cell m-t b-b" @click="navTo('清除缓存')" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">清除本地缓存</text>
			<text class="cell-more yticon icon-you"></text>
		</view>
		<view class="list-cell b-b" @click="navTo('关于Dcloud')" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">关于Dcloud</text>
			<text class="cell-more yticon icon-you"></text>
		</view>
		<!-- #ifdef APP-PLUS -->
		<view class="list-cell">
			<text class="cell-tit">检查更新</text>
			<text class="cell-tip">当前版本 {{version}}</text>
			<text class="cell-more yticon icon-you"></text>
		</view>
		<!-- #endif -->
		
		<view class="list-cell log-out-btn" @click="toLogout">
			<text class="cell-tit">退出登录</text>
		</view>
	</view>
</template>

<script>
	import { mapMutations} from 'vuex';
	export default {
		data() {
			return {
				version:"1.0.0",
			};
		},
		onLoad() {
			// #ifdef APP-PLUS
			this.version = plus.runtime.version;
			// #endif
			
		},
		methods:{
			toAddress(){
				uni.navigateTo({url:"/pages/mine/address/address"})
			},
			...mapMutations(['logout']),

			navTo(url){
				this.$api.msg(`跳转到${url}`);
			},
			//退出登录
			toLogout(){
				uni.showModal({
				    content: '确定要退出登录么',
				    success: (e)=>{
				    	if(e.confirm){
				    		this.logout();
				    		setTimeout(()=>{
				    			uni.navigateBack();
				    		}, 200)
				    	}
				    }
				});
			},
			//switch
			switchChange(e){
				let statusTip = e.detail.value ? '打开': '关闭';
				this.$api.msg(`${statusTip}消息推送`);
			},

		}
	}
</script>

<style lang='scss'>
	.list-cell:nth-child(1){
		padding: 0 $page-row-spacing;
	}
	.row{
		background: #fff;
		width: 100%;
		min-height: 90upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: solid 1upx #eee;
		padding:0 20upx;
		&:last-child{
			border-bottom: none;
		}
		.title{
			font-size: 32upx;
			color: #333;
		}
		.right{
			display: flex;
			align-items: center;
			color: #999;
			.tis{
				font-size: 26upx;
				margin-right: 5upx;
				max-height: 120upx;
				image{
					width: 100upx;
					height: 100upx;
					border-radius: 100%;
					margin: 10upx 0;
				}
			}
			.icon{
				width: 40upx;
				color: #cecece;
			}
		}
		
	}
	page{
		background: $page-color-base;
	}
	.list-cell{
		display:flex;
		align-items:baseline;
		padding: 20upx $page-row-spacing;
		line-height:60upx;
		position:relative;
		background: #fff;
		justify-content: center;
		&.log-out-btn{
			margin-top: 40upx;
			.cell-tit{
				color: $uni-color-primary;
				text-align: center;
				margin-right: 0;
			}
		}
		&.cell-hover{
			background:#fafafa;
		}
		&.b-b:after{
			left: 30upx;
		}
		&.m-t{
			margin-top: 16upx; 
		}
		.cell-more{
			align-self: baseline;
			font-size:$font-lg;
			color:$font-color-light;
			margin-left:10upx;
		}
		.cell-tit{
			flex: 1;
			font-size: $font-base + 2upx;
			color: $font-color-dark;
			margin-right:10upx;
		}
		.cell-tip{
			font-size: $font-base;
			color: $font-color-light;
		}
		switch{
			transform: translateX(16upx) scale(.84);
		}
	}
</style>
