<template>
	<view class="cat-label">
		<view class="container">
			<!-- 左侧 -->
			<view :class="['text',required ? 'required' : '',] " :style="{textAlign,textAlign}">{{text}}</view>
			<view class="data">
				<view v-if="dataType == ''"  class="data-l">
					<input type="text" :value="data" disabled="disabled">
				</view>
				<view v-if="dataType == 'click'" class="data-l" @tap="toggleTabClick">
					<view>请点击选择{{text}}</view>
				</view>
				<view v-if="dataType == 'text' && inputType!='textarea'" class="data-l" :style="{width: hasR ? '75%': '100%' }">
					<input v-if="dataType == 'text' && inputType!='textarea'" :type="inputType" @input="handleChange"  :placeholder=" placeholder? placeholder:  '请输入'+text" />
				</view>
				
				<!-- textatea -->
				<view v-if="dataType == 'text' && inputType=='textarea'" class="data-l" :style="{width: hasR ? '75%': '100%' }">
					<textarea v-if="dataType == 'text' && inputType=='textarea'" :maxlength="textareaNum" class="textarea" @input="handleChangeTextarea" :placeholder=" placeholder? placeholder:  '请输入'+text" />
					<view class="info">{{txt}}</view>
				</view>
				<!-- textatea -->
				
				<!-- mode selector -->
				<view v-if="dataType == 'selector'"  @tap="toggleTabSelector" class="data-l">
					<view>{{selectList[tabIndex].label}}</view>
				</view>
				<w-picker v-if="dataType == 'selector'" mode="selector" :defaultVal="selectorD" @confirm="onConfirm" ref="selector" themeColor="#f00" :selectList="selectList" />
				<!-- mode selector -->
				
				<!-- mode  date-->
				<view v-if="dataType == 'date'"  @tap="toggleTabDate" class="data-l">
					<view>{{data}}</view>
				</view>
				<w-picker v-if="dataType == 'date'" mode="date" startYear="1949" endYear="2019" :defaultVal="defaultVal2" :current="true" @confirm="onConfirm2" ref="date" themeColor="#f00"  />
				<!-- mode date -->
				
				
				<!-- mode range -->
				<view v-if="dataType == 'range'"  @tap="toggleTabRange" class="data-l">
					<view>{{data}}</view>
				</view>
				<w-picker v-if="dataType == 'range'"  mode="range"  dayStep="60" startHour="8" endYear="2050" endHour="20" minuteStep="5" afterStep="30" :defaultVal="[0,0,0]" :current="true" @confirm="onConfirm3" ref="range"  themeColor="#f00" />
				<!-- mode range -->
				
				<!-- 右侧 -->
				<view v-if="hasR" class="data-r">></view>
			</view>
		</view>
	</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue";
	export default {
		components:{wPicker},
		props:{
			text:{
				default:"默认占位符",
				type:String
			},
			textAlign:{
				default:"left",
				type:String
			},
			textareaInfo:{
				default:"0/140",
				type:String
			},
			textareaNum:{
				default:140,
				type:Number
			},
			model:{
				default:"",
				type:String
			},
			placeholder:{
				default:"",
				type:String
			},
			data:{
				default:"默认占位符",
				type:String
			},
			hasR:{
				default:false,
				type:Boolean,
			},
			dataType:{
				default:"",
				type:String
			},
			initIndex:{
				type:Number,
				default:0,
			},
			selectList:{
				type:Array,
				default: function(){
					return (
						[{label:"男",value:"0"},{label:"女",value:"1"}]
					)
				}
			},
			
			// input type
			inputType:{
				default:"text",
				type:String
			},
			// 验证
			required:{
				default:false,
				type:Boolean
			},
			
		},
		created() {
			
		},
		data() {
			return {
				txt:this.textareaInfo,
				selectorD : [this.initIndex],
				defaultVal2:[0,1,3],
				tabIndex : this.initIndex,
			};
		},
		methods:{
			handleChange(event){
				this.$emit("handleconfirmInput",event.target.value);
			},
			handleChangeTextarea(event){
				var num = event.target.value.length;
				this.txt = `${num}/${this.textareaNum}`
				this.$emit("handleconfirmTextarea",event.target.value);
			},
			toggleTabClick(){
				this.$emit("handleconfirmClick");
			},
			toggleTabSelector(){
				this.$refs.selector.show();
			},
			toggleTabDate(){
				this.$refs.date.show();
			},
			toggleTabRange(){
				this.$refs.range.show();
			},	
			onConfirm(val){
				this.$emit("handleconfirm",val);
				this.tabIndex=val.checkArr.value;
			},
			onConfirm2(val){
				this.$emit("handleconfirmDate",val);
			},
			onConfirm3(val){
				this.$emit("handleconfirmRange",val);
			}
		}
	}
</script>

<style lang="scss">
	.cat-label{
		width: 100%;
		.container{
			padding:$uni-spacing-col-lg $uni-spacing-row-lg;
			width: 100%;
			box-sizing: border-box;
			flex: 1;
			position: relative;
			display: flex;
			flex-direction: row;
			align-items: flex-start;
			.text{width: 25%;margin-right:5%; font-size: $uni-font-size-base;text-overflow: ellipsis;white-space: nowrap;color: inherit;line-height: 1.5;overflow: hidden;}
			.required::before{
				content: "*";
				color: $my-bg-color-red;
			}
			.data{width: 70%; display: flex;justify-content: space-between; font-size: $uni-font-size-sm;text-overflow: ellipsis;white-space: nowrap;color: inherit;line-height: 1.5;overflow: hidden;
				.data-l{width: 90%;position: relative;
					.textarea{
						width: 100%;height: 100upx;position: relative;font-size:$font-base;
					}
					.info{
						z-index:100; position: absolute;bottom: 0;right: 0;font-size: $font-sm;color: $font-color-disabled;background: #fff;
					}
				}
				.data-r{width: 10%;display: flex;flex-direction: row;justify-content: flex-end;align-items: center;}
			}
			
		}
		.container::after{
			position: absolute;
			z-index: 3;
			right: $uni-spacing-row-lg;
			bottom: 0;
			left: $uni-spacing-row-lg;
			height: 1px;
			content: '';
			transform: scaleY(.5);
			background-color: $uni-text-color-disable;
		}
	}
</style>
