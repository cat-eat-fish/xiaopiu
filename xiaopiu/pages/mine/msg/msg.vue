<template>
	<view class="page">
		<tab :modelData="modelData" @change="change" :initIndex="initIndex"></tab>
		<view class="allmsg" v-if="initIndex == 0">
			<view class="chat" v-for="(chat,index) in chatList" :key="index">
					<view class="row" @tap="toChat(chat)">
						<view class="left">
							<image :src="chat.face"></image>
						</view>
						<view class="right">
							<view class="top">
								<view class="username">{{chat.username}}</view>
								<view class="time">{{chat.time}}</view>
							</view>
							<view class="bottom">
								<view class="msg">{{chat.msg}}</view>
								<view class="tis" v-if="chat.tisNum>0">{{chat.tisNum}}</view>
							</view>
						</view>
					</view>
				</view>
		</view>
		<view class="notice" v-if="initIndex == 2">
				<view class="notice-item" v-for="(item,index) in noticeData" :key="index">
					<text class="time">{{item.time}}</text>
					<view class="content">
						<text class="title">{{item.title}}</text>
						<view class="img-wrapper">
							<image class="pic" :src="item.img"></image>
							<view class="cover" v-if="!item.static">
								活动结束
							</view>
						</view>
						<text class="introduce" v-if="item.desc != ''">{{item.desc}}</text>
						<view class="bot b-t" >
							<text>查看详情</text>
							<text class="more-icon yticon icon-you"></text>
						</view>
					</view>
				</view>
			</view>
	</view>
</template>

<script>
	import tab from "@/components/tab/tab.vue";
	export default {
		components:{tab},
		data() {
			return {
				noticeData:[
					{id:0,time:"11:30",static:true,title:"新品上市，全场满199减50",img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556465765776&di=57bb5ff70dc4f67dcdb856e5d123c9e7&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01fd015aa4d95fa801206d96069229.jpg%401280w_1l_2o_100sh.jpg",desc:"虽然做了一件好事，但很有可能因此招来他人的无端猜测，例如被质疑是否藏有其他利己动机等，乃至谴责。即便如此，还是要做好事。",href:"",},
					{id:1,time:"昨天 12:30",static:false,title:"新品上市，全场满199减50",img:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3761064275,227090144&fm=26&gp=0.jpg",desc:"",href:"",},
					{id:2,time:"2019-07-26 12:30",static:false,title:"新品上市，全场满199减50",img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556465765776&di=57bb5ff70dc4f67dcdb856e5d123c9e7&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01fd015aa4d95fa801206d96069229.jpg%401280w_1l_2o_100sh.jpg",desc:"新品上市全场2折起，新品上市全场2折起，新品上市全场2折起，新品上市全场2折起，新品上市全场2折起",href:"",},
				],
				modelData:[{label:"订单消息"},{label:"行业资讯"},{label:"系统通知"}],
				initIndex:0,
				chatList:[
					{
						uid:1,
						username:"鲜果蔬专营店",
						face:"/static/img/im/face/face_1.jpg",
						time:"13:08",
						msg:"亲，20点前下单都是当天送达的",
						tisNum:1
					},
					{
						uid:2,
						username:"官店大欺客旗舰店",
						face:"/static/img/im/face/face_2.jpg",
						time:"13:05",
						msg:"问那么多干什么？不想买就滚~",
						tisNum:0
					},
					{
						uid:3,
						username:"妙不可言",
						face:"/static/img/im/face/face_3.jpg",
						time:"12:15",
						msg:"推荐一个商品呗？",
						tisNum:0
					},
					{
						uid:4,
						username:"茶叶专卖",
						face:"/static/img/im/face/face_4.jpg",
						time:"12:11",
						msg:"现在卖的都是未过青的茶哦",
						tisNum:0
					},
					{
						uid:5,
						username:"likeKiss客服",
						face:"/static/img/im/face/face_5.jpg",
						time:"12:10",
						msg:"你好，发福建快递多久送到的？",
						tisNum:0
					},
					{
						uid:6,
						username:"白开水",
						face:"/static/img/im/face/face_6.jpg",
						time:"12:10",
						msg:"在吗？",
						tisNum:0
					},
					{
						uid:7,
						username:"衣帽间的叹息",
						face:"/static/img/im/face/face_7.jpg",
						time:"11:56",
						msg:"新品上市，欢迎选购",
						tisNum:0
					},
					{
						uid:8,
						username:"景萧疏",
						face:"/static/img/im/face/face_8.jpg",
						time:"11:56",
						msg:"商品七天无理由退换的",
						tisNum:0
					},
					{
						uid:9,
						username:"文宁先生",
						face:"/static/img/im/face/face_9.jpg",
						time:"12:15",
						msg:"星期天再发货的",
						tisNum:0
					},
					{
						uid:10,
						username:"高端Chieh",
						face:"/static/img/im/face/face_10.jpg",
						time:"12:36",
						msg:"建议你直接先测量好尺码在选购的。",
						tisNum:0
					},
					{
						uid:11,
						username:"mode旗舰店",
						face:"/static/img/im/face/face_11.jpg",
						time:"12:40",
						msg:"新品5折，还有大量优惠券。",
						tisNum:0
					},
					{
						uid:12,
						username:"敏萘客服",
						face:"/static/img/im/face/face_12.jpg",
						time:"12:36",
						msg:"还没有用，等我明天早上试一下",
						tisNum:0
					},
					{
						uid:13,
						username:"春天里的花",
						face:"/static/img/im/face/face_13.jpg",
						time:"12:36",
						msg:"适用于成年人的，小孩不适用的",
						tisNum:0
					},
					{
						uid:14,
						username:"电脑外设专业户",
						face:"/static/img/im/face/face_13.jpg",
						time:"12:36",
						msg:"把上面的螺丝拆下来，把铁片撬开就能看见了",
						tisNum:0
					},
					{
						uid:15,
						username:"至善汽车用品",
						face:"/static/img/im/face/face_15.jpg",
						time:"12:36",
						msg:"这个产品是原车配件，完美装上的",
						tisNum:0
					}

				]
			
			}
		},
		//下拉刷新，需要自己在page.json文件中配置开启页面下拉刷新 "enablePullDownRefresh": true
		onPullDownRefresh() {
		    setTimeout(function () {
		        uni.stopPullDownRefresh();
		    }, 1000);
		},
		onLoad() {

		},
		methods: {
			change(e){
				uni.showLoading({
					title: '加载中',
					mask: true,
				});
				setTimeout(()=>{
					uni.hideLoading();
				},3000)
				this.initIndex = e;
			},
			toChat(chat){
				uni.navigateTo({
					url:"/pages/mine/chat/chat?name="+chat.username
				})
			}
		}
	}
</script>

<style  lang="scss">
	page {background-color: #f7f7f7;padding-bottom: 30upx;}
	.allmsg{
		width: 100%;
		padding: 88upx 3% 0;
			.chat{
				width: 100%;
				height: 150upx;
				padding: 20upx 0;
				border-bottom: solid 1upx #eaeaea;
				.row{
					display: flex;
					justify-content: flex-start;
					.left{
						flex-shrink:0;
						width: 100upx;
						height: 100upx;
						image{
							width: 100upx;
							height: 100upx;
							border-radius: 20upx;
						}
					}
					.right{
						flex-shrink:1;
						width: 98%;
						padding-left: 2%;
						.top{
							width: 100%;
							display: flex;
							justify-content: space-between;
							align-items: flex-end;
							.usernam{
								font-size: 26upx;
							}
							.time{
								font-size: 22upx;
								color: #bebebe;
							}
						}
						.bottom{
							width: 100%;
							height: 40upx;
							display: flex;
							justify-content: space-between;
							align-items: center;
							.msg{
								font-size: 25upx;
								color: #777;
							}
							.tis{
								width: 35upx;
								height: 35upx;
								font-size: 22upx;
								display: flex;
								justify-content: center;
								align-items: center;
								background-color: #eb4d3d;
								color: #fff;
								border-radius: 100%;
							}
						}
					}
				}
			}
		
	}
	.notice{
		padding: 88upx 0 0;
		.notice-item {display: flex;flex-direction: column;align-items: center;}
		.time {display: flex;align-items: center;justify-content: center;height: 80upx;padding-top: 10upx;font-size: 26upx;color: #7d7d7d;}
		.content {width: 710upx;padding: 0 24upx;background-color: #fff;border-radius: 4upx;}
		.title {display: flex;align-items: center;height: 90upx;font-size: 32upx;color: #303133;}
		.img-wrapper {width: 100%;height: 260upx;position: relative;}
		.pic {display: block;width: 100%;height: 100%;border-radius: 6upx;}
		.cover {display: flex;justify-content: center;align-items: center;position: absolute;left: 0;top: 0;width: 100%;height: 100%;background-color: rgba(0, 0, 0, .5);font-size: 36upx;color: #fff;}
		.introduce {display: inline-block;padding: 16upx 0;font-size: 28upx;color: #606266;line-height: 38upx;}
		.bot {display: flex;align-items: center;justify-content: space-between;height: 80upx;font-size: 24upx;color: #707070;position: relative;}
		.more-icon {font-size: 32upx;}
	}
</style>
