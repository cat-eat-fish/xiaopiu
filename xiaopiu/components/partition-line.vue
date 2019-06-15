<template>
	<view class="partition-line" :style="{padding:bodyPadding}">
		<view class="line-l" :style="{backgroundColor:lineColor}"></view>
		<view class="text" :style="{color:textColor}" v-html="text"></view>
		<view class="line-r" :style="{backgroundColor:lineColor}"></view>
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
			lineColor:{
				default:"#c3c3c3",
				type:String
			},
			textColor:{
				default:"#c3c3c3",
				type:String
			},
			bodyPadding:{
				default:"24upx 0",
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
