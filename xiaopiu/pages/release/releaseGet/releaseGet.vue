<template>
	<view class="releaseGet">
		<view class="item">
			<cat-label @handleconfirmInput="change" :hasR="false" dataType="text" text="标题"  />
		</view>
		<view class="item">
			<cat-label @handleconfirmTextarea="changeTextarea" :hasR="false" inputType="textarea" dataType="text" text="描述"  />
		</view>
		<view class="item">
			
		</view>
		<view class="item">
			<cat-label :data="uploadData.foundDate" :hasR="true"  @handleconfirmDate="confirm" dataType="date" text="截止日期"  />
		</view>
		<view class="item">
				<cat-label :selectList="selectType" :hasR="true" dataType="selector" text="交易方式"  />
		</view>
		<view class="btns">
			<button type="primary" >确认发布</button>
		</view>
	</view>
</template>

<script>
	import catLabel from "@/components/cat-label.vue"
	import wPicker from "@/components/w-picker/w-picker.vue";
	export default {
		components:{
			wPicker,catLabel
		},
		
		data() {
			return {
				tabIndex:0,
				current: 0,
				resultInfo:"",
				selectType:[{label:"邮寄",value:0},{label:"自提",value:1}],
				
				
				uploadData:{
					foundDate:"点击选择截止日期",
				}
			}
		},
		computed:{
			defaultVal(){
				return [0,1,3]
			}
		},
		methods: {
			change(e){
				
			},
			changeTextarea(e){
				
			},
			confirm(e){
				this.uploadData.foundDate = e.result;
			},
			toggleTab(){
				this.$refs.picker.show();
			},
			onConfirm(val){
				this.resultInfo=val.result;
			},
			
		}
	}
</script>

<style lang="scss">
	.releaseGet{
		width: 100%;
		padding:0 24upx;
		.item{
			// border-bottom: 1upx solid #999;
		}
	}
</style>
