<template>
	<view class="purchaseD">
		<view class="title">{{dataInfo.title}}</view>
		<view class="desc">{{dataInfo.desc}}</view>
		<cat-label  text="截止日期" data="2019-07-07" />
		<cat-label  text="交易方式" data="邮寄" />
		<cat-label  text="发布时间" data="2019-03-07" />
	</view>
</template>

<script>
	import catLabel from "@/components/cat-label.vue"
	export default {
		components:{catLabel},
		data() {
			return {
				dataInfo:{
					title:"求购啊。。。。",
					desc:"详情",
				}
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.purchaseD{
		
	}
</style>
