<template>
	<view class="grid">
		<view class="cate-item" v-for="(item,index) in dataInfo" :key="index">
			<view :class="item.icon"></view>
			<text>{{item.text}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {};
		},
		props:{
			dataInfo:{
				default:function(){
					return ([
						{id:0,text:"智能手机",icon:"iconfont icontablet",url:""},
						{id:1,text:"功能手机",icon:"iconfont iconmobile",url:""},
						{id:2,text:"智能设备",icon:"iconfont iconungroup",url:""},
						{id:3,text:"电脑平板",icon:"iconfont icondesktop",url:""},
						{id:5,text:"电子教育",icon:"iconfont icondeploymentunit",url:""},
						{id:6,text:"办公设备",icon:"iconfont iconfork",url:""},
						{id:7,text:"配件中心",icon:"iconfont iconmeh",url:""},
						{id:8,text:"更多分类",icon:"iconfont iconappstore",url:""},
					])
				},
				type:Array
			}
		},
	}
</script>
rgb(240, 108, 122)
<style lang="scss">
	.grid{width:100%; display: flex;justify-content: space-between;flex-wrap: wrap;background-color: #fff;
		.cate-item{width: 25%;padding: 20upx 0;display: -webkit-box;display: -webkit-flex;display: -ms-flexbox;display: flex;flex-direction: column;align-items: center;font-size: 13px;color: #303133;
			uni-image,.iconfont{width:88upx;height: 88upx;font-size: 32px;text-align: center;line-height: 88upx;color:rgb(240, 108, 122); margin-bottom: 14upx;border-radius: 50%;opacity: .7;box-shadow: 2px 2px 10px rgba(250, 67, 106, 0.3);}
		}
	}

</style>
