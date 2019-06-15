<template>
	<view class="grid">
		<view class="cate-item" v-for="(item,index) in dataInfo" :key="index">
			<image :src="item.img"></image>
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
						{id:0,text:"智能手机",img:"/static/img/temp/c3.png",url:""},
						{id:1,text:"功能手机",img:"/static/img/temp/c5.png",url:""},
						{id:2,text:"智能设备",img:"/static/img/temp/c6.png",url:""},
						{id:3,text:"电信平板",img:"/static/img/temp/c7.png",url:""},
						{id:4,text:"办公设备",img:"/static/img/temp/c8.png",url:""},
						{id:5,text:"电子教育",img:"/static/img/temp/c3.png",url:""},
						{id:6,text:"配件中心",img:"/static/img/temp/c5.png",url:""},
						{id:7,text:"我的主页",img:"/static/img/temp/c6.png",url:""},
						{id:8,text:"积分",img:"/static/img/temp/c7.png",url:""},
						{id:9,text:"其他",img:"/static/img/temp/c8.png",url:""},
					])
				},
				type:Array
			}
		},
	}
</script>

<style lang="scss">
	.grid{width:100%; display: flex;justify-content: space-between;flex-wrap: wrap;background-color: #fff;
		.cate-item{width: 20%;padding: 20upx 0;display: -webkit-box;display: -webkit-flex;display: -ms-flexbox;display: flex;flex-direction: column;align-items: center;font-size: 13px;color: #303133;
			uni-image{width:88upx;height: 88upx;margin-bottom: 14upx;border-radius: 50%;opacity: .7;box-shadow: 2px 2px 10px rgba(250, 67, 106, 0.3);}
		}
	}

</style>
