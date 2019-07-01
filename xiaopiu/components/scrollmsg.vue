<template>
	<view class="uni-swiper-msg">
		<view class="uni-swiper-msg-icon">
			<view class="iconfont iconsound"></view>
		</view>
		<swiper class="uni-swiper-msg-swipers" :vertical="type === 'vertical' ? true : false" :autoplay="type !== 'none' ? true : false" :circular="type === 'circular' ? true : false" :interval="interval">
			<swiper-item  v-for="(item, index) in msg" :key="index">
				<view @tap="goDesc(item)" class="text">{{item.text}}</view>
			</swiper-item>
		</swiper>
		<view @click="getMore" class="iconfont icondoubleright you"></view>
	</view>
</template>

<script>
	export default {
		props:{
			msg:{
				type:Array,
				default:function(){
					return (
						[
							{id:0,text:"uni-app行业峰会频频亮相，开发者反响热烈",},
							{id:1,text:"DCloud完成B2轮融资，uni-app震撼发布",},
							{id:2,text:"36氪热文榜推荐、CSDN公号推荐 DCloud CEO文章",},
						]
					)
				}
			},
			type:{
				type:String,
				default:"none",
			},
			interval:{
				type:String,
				default:"3000",
			}
		},
		data() {
			return {
				
			};
		},
		methods:{
			goDesc(item){
				uni.navigateTo({url:`/pages/index/noticeDesc/noticeDesc?detailDate=%257B%2522author_name%2522%253A%2522%25E8%25B5%25B5%25E5%25B0%258F%25E7%25BA%25AF%254036%25E6%25B0%25AA%25E5%2587%25BA%25E6%25B5%25B7%2522%252C%2522cover%2522%253A%2522https%253A%252F%252Fpic.36krcnd.com%252F201906%252F29035312%252Fl02i3caf73tbu8yq%21heading%2522%252C%2522id%2522%253A90966%252C%2522post_id%2522%253A%25225220640%2522%252C%2522published_at%2522%253A%25224%25E5%25B0%258F%25E6%2597%25B6%25E5%2589%258D%2522%252C%2522title%2522%253A%2522%25E5%25BC%2580%25E5%2590%25AF%25E2%2580%259C%25E4%25B9%25B0%25E4%25B9%25B0%25E4%25B9%25B0%25E2%2580%259D%25E6%25A8%25A1%25E5%25BC%258F%25E7%259A%2584%25E4%25B8%259C%25E5%258D%2597%25E4%25BA%259A%25E7%258B%25AC%25E8%25A7%2592%25E5%2585%25BD%25E4%25BB%25AC%25EF%25BC%258C%25E6%25AD%25A3%25E5%259C%25A8%25E6%2588%2590%25E4%25B8%25BA%25E5%2588%259B%25E4%25B8%259A%25E5%2585%25AC%25E5%258F%25B8%25E7%259A%2584%25E9%2587%258D%25E8%25A6%2581%25E2%2580%259C%25E5%25BD%2592%25E5%25AE%25BF%25E2%2580%259D%2522%257D`})
			},
			getMore() {
				uni.navigateTo({url:"/pages/mine/msg/msg?initIndex=1"})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.uni-swiper-msg{
		padding: 10upx 22upx;
		background: rgb(255, 251, 232);
		.uni-swiper-msg-icon{
			    margin-right: 10upx;
		}
		.text{
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
			color: #555;
		}
		.iconfont{
			color: rgb(222, 140, 23);
		}
		.iconfont.you{color:rgb(51, 51, 51)}
	}
</style>
