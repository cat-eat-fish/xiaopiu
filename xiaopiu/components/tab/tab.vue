<template>
	<view :class="{'my-tabs':true,'space-between':formatBe}">
		<view  v-for="(item,index) in getModelData" :key="index" :class="{'tab-item':true,'active':initIndex==index}" @tap="tap(index)">
			{{item.label}}
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			modelData:{
				
			},
			initIndex:{
				default:0,
				type:Number
			},
		},
		data() {
			return {
				defaultInfo:{data:[{label:"测试",},{label:"测试"},{label:"测试"},],},
				// initIndex:0,//默认索引
			}
		},
		created() {
			this.initActive()
		},
		computed:{
			getModelData(){
				return this.modelData||this.defaultInfo.data
			},
			formatBe(){
				return this.modelData
						?this.modelData.length>4?true:false
						:false
			}
		},
		methods: {
			tap(index){
				if(index!==this.initIndex)this.$emit("change",index);
				this.initIndex=index;
			},
			/**
			 * @name 初始化initIndex
			 */
			initActive(){
				this.initIndex=this.initIndex||this.initIndex
			}
		},
	}
</script>
<style lang='scss'>
	.my-tabs {background-color: #f7f7f7;height: 88upx;position: fixed; z-index: 100;font-size: 28upx;display: flex;justify-content: space-around;box-sizing: border-box;border-top: 2upx solid #dddddd;border-bottom: 2upx solid #dddddd;min-width: 100%;overflow-x: auto;
		.tab-item{line-height: 48upx;padding: 20upx;min-width: 100upx;text-align: center;}
		.tab-item.active{position: relative;color: #3682FF;}
		.tab-item.active::after{content: "";position: absolute;bottom: 0;left:50%;transform: translateX(-50%);width: 100%;border-bottom: 4upx solid #3682FF;animation: test ease 1 1.5s;}
	}
	.my-tabs.space-between{justify-content: space-between;}
	@keyframes test{
		0%{width: 100%}
		50%{width: 150%}
		100%{width: 100%}
	}
</style>
