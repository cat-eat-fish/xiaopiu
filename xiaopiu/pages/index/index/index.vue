<template>
	<view></view>
</template>
<script>
	export default {
		onReady() {
			if(uni.getStorageSync('ifLaunch')) 
				uni.reLaunch({
					url: '/pages/tabBar/index/index'
				})
			else 
				uni.navigateTo({
					url: '/pages/guide/guide'
				})
		},
		methods: {

		}
	}
</script>