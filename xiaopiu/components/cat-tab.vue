<template>
	<view class="cat-tab">
		<view class="nav" :style="{position:position}">
			<view 
				:style="{border:border, 'width':`${100/navList.length}%`,'background':currentIndex === index ? bg : '' , 'color': currentIndex === index ? '#fff' : ''}" 
				:class="{'navItem':true,'navItemOnan':currentIndex === index && hasan}"  
				@tap="tap(index)" v-for="(item,index) in navList" 
				:key="item.text"
			>
				{{item.text}}
			</view>
		</view>
		<view class="con" :style="{padding:position != 'fixed' ? '0':'98upx 0 0'}">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			initIndex:{
				type:Number,
				default:0,
			},
			position:{
				type:String,
				default:'fixed',
			},
			hasan:{
				type:Boolean,
				default:true,
			},
			bg:{
				type:String,
				default:'#5a5a5a',
			},
			border:{
				type:String,
				default:'1upx solid #5a5a5a',
			},
			navList:{
				type:Array,
				default:()=>{
					([
						{id:0,text:"tab1"},
						{id:1,text:"tab2"},
						{id:2,text:"tab3"},
					])
				},
			}
		},
		data() {
			return {
				currentIndex:this.initIndex,
			};
		},
		watch:{
			initIndex(val,oldval){
				if(val !== oldval){
					this.currentIndex = val;
				}
			}
		},
		methods:{
			tap(index){
				this.currentIndex = index;
				
				uni.pageScrollTo({scrollTop:0,duration:0})
				this.$emit('change', index);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cat-tab{
		width: 100%;
		height: 100%;
		.nav{
			background-color: #fff;position: fixed;z-index: 10;
			width: 100%;display: flex;justify-content: space-between;text-align: center;
			// border: 1upx solid #000;border-right: none;border-left: none;
			// box-sizing: border-box;
			// border-radius: 5px;
			color: #5a5a5a;
			overflow: hidden;
			.navItem{
				box-sizing: border-box;
				border: 1px solid #333;
				width:33.3%;
				box-sizing: border-box;
				padding: 10px 0;
				background-color: #fff;
			}
			.navItemOn{
				color: #dcdcdc;
			}
			.navItemOnan{
				transition: all 0.5s;
			}
		}
		.con{width: 100%;min-height:calc(100% - 88upx);height:calc(100% - 88upx);padding-top: 98upx;}
	}
</style>
