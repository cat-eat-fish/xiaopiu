<template>
	<view class="releaseGet">
		<view class="item">
			<view class="text">标题</view>
			<view class="con">
				<input type="text" placeholder="请输入标题" value="" />
			</view>
		</view>
		<view class="item">
			<view class="text">描述</view>
			<view class="con">
				<textarea value="" placeholder="请输入描述" />
			</view>
		</view>
		<view class="item">
			<view class="text">分类</view>
			<view class="con">
				
			</view>
		</view>
		<view class="item">
			<view class="text">截止日期</view>
			<view class="con" @tap="toggleTab">
				as
					<view class="result">选择结果：{{resultInfo.result}}</view>
				<w-picker 
					mode="date" 
					endYear="2030" 
					:defaultVal="defaultVal" 
					:current="true" 
					@confirm="onConfirm" 
					ref="picker" 
					themeColor="#f00"
				></w-picker>
			</view>
		</view>
		<view class="item">
			<view class="text">交易方式</view>
			<view class="con">
				<radio-group @change="radioChange">
					<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in items" :key="item.value">
						<view>
							<radio :value="item.value" :checked="index === current" />
						</view>
						<view>{{item.name}}</view>
					</label>
				</radio-group>
			</view>
		</view>
		<view class="btns">
			<button type="primary" >确认发布</button>
		</view>
	</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue";
	export default {
		components:{
			wPicker
		},
		
		data() {
			return {
				tabIndex:0,
				current: 0,
				resultInfo:"",
				items: [{
						value: '邮寄',
						name: '邮寄',
						checked: 'true'
					},
					{
						value: '自提',
						name: '自提',
					},
				],
			}
		},
		computed:{
			defaultVal(){
				return [0,1,3]
			}
		},
		methods: {
			toggleTab(){
				this.$refs.picker.show();
			},
			onConfirm(val){
				this.resultInfo=val.result;
			},
			radioChange(evt) {
				for (let i = 0; i < this.items.length; i++) {
					if (this.items[i].value === evt.target.value) {
						this.current = i;
						break;
					}
				}
			}
		}
	}
</script>

<style lang="scss">
	.releaseGet{
		width: 100%;
		padding:0 24upx;
		.item{
			border-bottom: 1upx solid #999;
		}
	}
</style>
