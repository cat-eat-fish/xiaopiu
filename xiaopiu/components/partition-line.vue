<template>
	<view class="partition-line" :style="bodyStyle">
		<view class="line-l" :style="lineStyle"></view>
		<view class="text" :style="textStyle" v-html="text"></view>
		<view class="line-r" :style="lineStyle"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:{
			text:{
				default:"我是有底线的",
				type:String
			},
			lineStyle:{
				default:"background-Coloe:#c3c3c3;width:30%",
				type:String
			},
			textStyle:{
				default:"color:#c3c3c3",
				type:String
			},
			bodyStyle:{
				default:"padding:24upx 0",
				type:String
			}
		}
	}
</script>

<style lang="scss">
	.partition-line{display: flex;justify-content: space-between;width: 100%;padding: 0upx 0;
		.line-l,.line-r{width: 30%;height:1upx;margin: 25upx auto;background-color: #c3c3c3;}
		.text{color: #c3c3c3;}
	}
</style>
